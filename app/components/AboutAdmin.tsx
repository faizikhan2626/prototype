"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AdminAboutPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bio: "",
    languages: "",
    picture: "",
    phone: "", // New field for phone number
  });
  const [preview, setPreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (status === "authenticated") {
      console.log("Session:", session);
      setFormData((prev) => ({
        ...prev,
        name: session.user?.name || "No name available",
        email: session.user?.email || "No email available",
      }));
      const fetchProfile = async () => {
        try {
          const response = await fetch("/api/profile");
          if (response.ok) {
            const data = await response.json();
            console.log("Profile API response:", data);
            setFormData((prev) => ({
              ...prev,
              name: data.name || session.user?.name || "No name available",
              email: data.email || session.user?.email || "No email available",
              bio: data.bio || "",
              languages: data.languages || "",
              picture: data.picture || "",
              phone: data.phone || "",
            }));
            if (data.picture) {
              setPreview(data.picture);
            }
          } else {
            console.error(
              "Profile API error:",
              response.status,
              response.statusText
            );
            toast.error("Failed to fetch profile data");
          }
        } catch (error) {
          console.error("Fetch profile error:", error);
          toast.error("Error fetching profile data");
        }
      };
      fetchProfile();
    }
  }, [status, session, router]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      console.error("No file selected");
      toast.error("No file selected");
      return;
    }

    console.log("Selected file:", file.name, file.type, file.size);
    setPreview(URL.createObjectURL(file));
    setIsUploading(true);

    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
    if (!cloudName || !uploadPreset) {
      console.error("Cloudinary configuration missing:", {
        cloudName,
        uploadPreset,
      });
      toast.error("Cloudinary configuration missing");
      setIsUploading(false);
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    try {
      console.log("Uploading to Cloudinary:", { cloudName, uploadPreset });
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      console.log("Cloudinary response:", data);

      if (response.ok && data.secure_url) {
        setFormData((prev) => {
          const newFormData = { ...prev, picture: data.secure_url };
          console.log("Updated formData with picture:", newFormData);
          return newFormData;
        });
        toast.success("Image uploaded to Cloudinary! Please submit to save.");
      } else {
        console.error("Cloudinary upload failed:", data);
        toast.error(
          `Failed to upload image: ${data.error?.message || "Unknown error"}`
        );
      }
    } catch (error) {
      console.error("Cloudinary upload error:", error);
      toast.error(
        `Error uploading to Cloudinary: ${error.message || "Unknown error"}`
      );
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting form with data:", formData);
    const savePromise = fetch("/api/profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        bio: formData.bio,
        languages: formData.languages,
        picture: formData.picture,
        phone: formData.phone,
      }),
    });

    toast.promise(savePromise, {
      loading: "Saving profile...",
      success: (response) => {
        if (!response.ok) {
          throw new Error("Failed to update profile");
        }
        return "Profile updated successfully!";
      },
      error: (err) =>
        `Failed to update profile: ${err.message || "Unknown error"}`,
    });

    try {
      const response = await savePromise;
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Failed to save profile:", errorData);
        throw new Error(
          errorData.details || errorData.error || "Unknown error"
        );
      }
      console.log("Profile saved successfully");
      const refreshResponse = await fetch("/api/profile");
      if (refreshResponse.ok) {
        const data = await refreshResponse.json();
        setFormData((prev) => ({
          ...prev,
          bio: data.bio || "",
          languages: data.languages || "",
          picture: data.picture || "",
          phone: data.phone || "",
        }));
        if (data.picture) {
          setPreview(data.picture);
        }
      }
    } catch (error) {
      console.error("Submit error:", error);
    }
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Profile</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              disabled
              className="w-full p-2 border border-gray-300 rounded bg-gray-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              disabled
              className="w-full p-2 border border-gray-300 rounded bg-gray-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bio
            </label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              rows={4}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Languages (comma-separated)
            </label>
            <input
              type="text"
              name="languages"
              value={formData.languages}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="e.g., English, Spanish, French"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="e.g., 076 822 5204"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Profile Picture
            </label>
            <input
              type="file"
              name="picture"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded"
              disabled={isUploading}
            />
            {preview && (
              <img
                src={preview}
                alt="Profile Preview"
                className="mt-2 w-32 h-32 object-cover rounded"
              />
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:bg-gray-400"
            disabled={isUploading}
          >
            {isUploading ? "Uploading..." : "Save Profile"}
          </button>
        </form>
      </div>
    </div>
  );
}
