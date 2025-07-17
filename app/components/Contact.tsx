"use client";

import { useState, useEffect } from "react";
import { EmailIcon, PhoneIcon } from "../../icons/icon";

export default function ContactSection() {
  const [profile, setProfile] = useState<{
    name: string;
    email: string;
    phone: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("/api/profile");
        if (response.ok) {
          const data = await response.json();
          console.log("ContactSection Profile API response:", data); // Debug log
          setProfile({
            name: data.name || "No name available",
            email: data.email || "No email available",
            phone: data.phone || "076 822 5204",
          });
        } else {
          console.error(
            "Profile API error:",
            response.status,
            response.statusText
          );
          setError("Failed to fetch profile data");
        }
      } catch (error) {
        console.error("Fetch profile error:", error);
        setError("Error fetching profile data");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Left Side - Text and Contacts */}
        <div className="md:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-snug">
            Have a question or need a ride? I am just a message away.
          </h1>
          <p className="text-gray-700 mb-6 text-lg sm:text-xl">
            Whether you are planning ahead or need a quick pickup, feel free to
            reach out to {profile?.name || "Nurul Kaiser"}. I will respond as
            soon as possible.
          </p>
          <h2 className="text-2xl font-bold mb-4">My Contacts</h2>
          <div className="flex items-center mb-3">
            <EmailIcon className="w-5 h-5 mr-2 text-yellow-500" />
            <a
              href={`mailto:${profile?.email || "munna001@hotmail.com"}`}
              className="text-gray-700 text-base underline"
            >
              {profile?.email || "munna001@hotmail.com"}
            </a>
          </div>
          <div className="flex items-center">
            <PhoneIcon className="w-5 h-5 mr-2 text-yellow-500" />
            <a
              href={`tel:${profile?.phone || "+41768225204"}`}
              className="text-gray-700 text-base underline"
            >
              {profile?.phone || "076 822 5204"}
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="md:w-1/2 bg-white rounded-lg shadow-lg p-6 w-full">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Your message"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
