"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const [profile, setProfile] = useState<{ name: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("/api/profile");
        if (response.ok) {
          const data = await response.json();
          console.log("HeroSection Profile API response:", data); // Debug log
          setProfile({ name: data.name || "No name available" });
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
    <div>
      {/* Hero Section with Background Image */}
      <div className="relative flex justify-center items-center overflow-hidden pt-10 min-h-[450px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px]">
        {/* Background Image */}
        <Image
          src="/logo/cab.jpg"
          alt="Taxi service background"
          fill
          className="object-cover z-10"
        />

        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Content Container */}
        <div className="items-center justify-center text-center px-6 md:px-12 lg:px-24 z-10">
          <button className="text-white px-6 py-1 rounded-full font-medium text-xs transition-colors flex items-center mx-auto mb-6 border-2 border-white">
            {profile?.name || "Nurul Kaiser"}
          </button>

          <h1 className="text-2xl text-white md:text-4xl lg:text-4xl font-bold mb-6 leading-tight">
            On-Time Rides You Can Rely On
          </h1>

          {/* Subheading */}
          <p className="text-sm text-white md:text-lg items-center max-w-6xl mx-auto">
            Book a trusted local driver for everyday travel, airport transfers,
            and more. Fast, friendly, and always on time.
          </p>
          <p className="text-sm text-white md:text-lg mb-5 max-w-6xl mx-auto">
            Enjoy 20% off with {profile?.name || "Nurul Kaiser"}&apos;s Taxi &
            Limousine Service – {profile?.name || "Nurul Kaiser"}&apos;s
            reliable ride, always
          </p>

          {/* Chat Button */}
          <div className="flex justify-center items-center px-2 py-2">
            <Link
              href=""
              className="bg-amber-300 text-black px-4 py-2 rounded-lg flex items-center justify-center gap-2 w-full sm:w-auto hover:bg-amber-400 transition-colors"
            >
              <span className="font-medium text-base sm:text-lg text-center">
                Chat with me
              </span>
              <Image
                src="/logo/chat.svg"
                alt="Chat Icon"
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
