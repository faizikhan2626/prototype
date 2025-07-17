import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Create a user with a hashed password
  const hashedPassword = await bcrypt.hash("testpassword", 10);
  await prisma.user.create({
    data: {
      email: "test3@example.com",
      name: "Test User 3",
      password: hashedPassword,
    },
  });
  console.log("User created with password");

  // Query all users
  const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      name: true,
      password: true, // Should include the hashed password
      createdAt: true,
      updatedAt: true,
    },
  });
  console.log("Users:", users);
}

main()
  .catch((e) => console.error("Error:", e))
  .finally(() => prisma.$disconnect());
