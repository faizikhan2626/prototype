import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import prisma from "../../lib/prisma";
import { authOptions } from "../../lib/authOptions";

export async function GET(req: Request) {
  console.log("API /api/profile GET called"); // Debug log
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.id) {
    console.error("Unauthorized access to /api/profile");
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = parseInt(session.user.id);
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { profile: true },
    });
    if (!user) {
      console.error("User not found for ID:", userId);
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    const response = {
      name: user.name || "No name available",
      email: user.email || "No email available",
      bio: user.profile?.bio || "",
      languages: user.profile?.languages || "",
      picture: user.profile?.picture || "",
      phone: user.profile?.phone || "",
    };
    console.log("Profile data returned:", response);
    return NextResponse.json(response);
  } catch (error) {
    console.error("Profile fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch profile", details: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  console.log("API /api/profile POST called"); // Debug log
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.id) {
    console.error("Unauthorized access to /api/profile");
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = parseInt(session.user.id);
  const { bio, languages, picture, phone } = await req.json();
  console.log("POST body:", { bio, languages, picture, phone }); // Debug log
  console.log("Phone value received:", phone); // Debug phone specifically

  // Validate input
  if (typeof bio !== "string" && bio !== undefined) {
    console.error("Invalid bio:", bio);
    return NextResponse.json({ error: "Invalid bio format" }, { status: 400 });
  }
  if (typeof languages !== "string" && languages !== undefined) {
    console.error("Invalid languages:", languages);
    return NextResponse.json(
      { error: "Invalid languages format" },
      { status: 400 }
    );
  }
  if (typeof picture !== "string" && picture !== undefined) {
    console.error("Invalid picture:", picture);
    return NextResponse.json(
      { error: "Invalid picture format" },
      { status: 400 }
    );
  }
  if (typeof phone !== "string" && phone !== undefined) {
    console.error("Invalid phone:", phone);
    return NextResponse.json(
      { error: "Invalid phone format" },
      { status: 400 }
    );
  }

  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      console.error("User not found for ID:", userId);
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    await prisma.profile.upsert({
      where: { userId },
      update: {
        bio: bio || undefined,
        languages: languages || undefined,
        picture: picture || undefined,
        phone: phone || undefined,
        updatedAt: new Date(),
      },
      create: {
        userId,
        bio: bio || undefined,
        languages: languages || undefined,
        picture: picture || undefined,
        phone: phone || undefined,
      },
    });
    console.log("Profile updated for user ID:", userId);
    return NextResponse.json({ message: "Profile updated successfully" });
  } catch (error) {
    console.error("Profile update error:", error);
    return NextResponse.json(
      { error: "Failed to update profile", details: error.message },
      { status: 500 }
    );
  }
}
