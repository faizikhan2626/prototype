import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="">
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
          <button className=" text-white px-6 py-1 rounded-full font-medium text-xs transition-colors flex items-center mx-auto mb-6 border-2 border-white">
            Nurul Kaiser
          </button>

          <h1 className="text-2xl text-white  md:text-4xl lg:text-4xl font-bold mb-6 leading-tight">
            On-Time Rides You Can Rely On
          </h1>

          {/* Subheading */}
          <p className="text-sm text-white md:text-lg items-center max-w-6xl mx-auto">
            Book a trusted local driver for everyday travel, airport transfers,
            and more. Fast, friendly, and always on time.
          </p>
          <p className="text-sm text-white md:text-lg mb-5 max-w-6xl mx-auto">
            Enjoy 20% off with Nurul Kaiser Taxi & Limousine Service – Zurichs
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
};

export default HeroSection;
