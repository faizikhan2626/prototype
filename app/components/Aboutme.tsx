import React from "react";
import Image from "next/image";

const AboutMeSection: React.FC = () => {
  return (
    <div className="relative pb-1">
      {/* Racing Flag Background positioned at bottom and extended downward */}
      <div
        className="absolute -bottom-30 left-0 right-0 h-90 bg-no-repeat bg-bottom bg-cover opacity-20 z-0 translate-y-12"
        style={{ backgroundImage: "url('/logo/bg-flags.png')" }}
      ></div>

      {/* Main Content */}
      <div className="relative w-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-10 py-10 z-10 gap-8">
        {/* Left Side - About Me Info */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-xs sm:text-sm text-gray-500 bg-amber-100 rounded-2xl w-fit px-4 py-1 font-semibold">
            About me
          </h2>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
            Hi, I am Nurul Kaiser,
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
            your trusted driver
          </h1>

          <p className="text-gray-700 text-base sm:text-lg lg:text-2xl">
            I offer safe, comfortable, and reliable transportation across Swiss
            cities and towns. Whether you need a quick ride across town, a
            transfer to the airport, or a scheduled trip, I am here to make sure
            you get to your destination on time.
          </p>

          <p className="text-gray-700 text-base sm:text-lg lg:text-2xl">
            With a focus on punctuality, professionalism, and friendly service,
            I aim to make every journey smooth and stressfree. I speak English
            and [insert other language(s) if needed], and I know the roads
            well—so you are always in good hands.
          </p>

          <p className="text-gray-700 text-base sm:text-lg lg:text-2xl">
            Let’s ride safely, comfortably, and right on time.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row sm:justify-start items-center gap-4">
            <button
              type="submit"
              className="cursor-pointer w-full sm:w-auto px-10 bg-yellow-500 text-black font-semibold py-3 rounded-md flex justify-center items-center gap-2"
            >
              Book Now
              <Image
                src="/emojis/arrow.svg"
                alt="Taxi Icon"
                width={24}
                height={24}
                className="h-5 w-auto"
              />
            </button>

            <button
              type="submit"
              className="cursor-pointer w-full sm:w-auto border border-gray-300 text-black font-semibold py-3 px-5 rounded-md flex justify-center items-center gap-2"
            >
              Chat with me
              <Image
                src="/logo/chat.svg"
                alt="Chat Icon"
                width={24}
                height={24}
                className="h-6 w-auto"
              />
            </button>
          </div>
        </div>

        {/* Right Side - Big Picture */}
        <div className="w-full md:w-1/2">
          <img
            width={500}
            height={500}
            src="/profile.jpg"
            alt="Nurul Kaiser"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
