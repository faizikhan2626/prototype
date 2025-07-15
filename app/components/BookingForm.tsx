import { NextPage } from "next";
import Image from "next/image";
import {
  LocationIcon,
  PhoneIcon,
  PersonIcon,
  DirectionIcon,
  CalendarIcon,
} from "./icons/icon";

const BookingForm: NextPage = () => {
  return (
    <div className="relative pb-10">
      {/* Racing Flag Background */}
      <div
        className="absolute inset-0 bg-no-repeat bg-left opacity-20 z-0"
        style={{ backgroundImage: "url('/logo/bg-flags.png')" }}
      ></div>

      {/* Form Container */}
      <div className="relative z-10 md:-mt-20 bg-white rounded-xl shadow-xl max-w-4xl mx-auto">
        <div className="relative p-6 bg-white rounded-xl shadow-xl">
          {/* Floating Discount Badge - visible on md+ */}
          <div className="hidden md:flex absolute -top-16 right-4 sm:-right-20 w-40 h-40 bg-blue-900 text-white rounded-full flex-col justify-center items-center shadow-lg text-center z-20">
            <span className="text-sm font-bold leading-tight text-center">
              Discount Taxi &<br />
              Limousine Service
              <br />
              Zurich
            </span>
            <span className="text-yellow-400 text-2xl font-bold mt-1">20%</span>
            <span className="text-xs">
              DISCOUNT
              <br />
              always
            </span>
          </div>

          {/* Mobile Discount Banner */}
          <div className="md:hidden bg-blue-900 text-white font-semibold text-center py-2 rounded-t-xl mb-4">
            20% Discount Always Available
          </div>

          <h2 className="text-2xl font-bold mb-6">Book Your Ride</h2>

          <form className="space-y-6">
            {/* Name & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">
                  Name
                </label>
                <div className="p-3 border border-gray-300 rounded-xl">
                  John Doe
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="p-3 border border-gray-300 rounded-xl">
                    +41 0000 0000
                  </div>
                  <PhoneIcon className="w-5 h-5 text-yellow-500 absolute right-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>
            </div>

            {/* Pick-Up & Drop-Off */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">
                  Pick-Up
                </label>
                <div className="relative">
                  <div className="p-3 border border-gray-300 rounded-xl">
                    Zürich Hauptbahnhof (Main Train Station)
                  </div>
                  <LocationIcon className="w-5 h-5 text-yellow-500 absolute right-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">
                  Drop-Off Location
                </label>
                <div className="relative">
                  <div className="p-3 border border-gray-300 rounded-xl">
                    Zürich Airport (ZRH)
                  </div>
                  <DirectionIcon className="w-5 h-5 text-yellow-500 absolute right-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>
            </div>

            {/* Date, Passengers, and Button - Responsive */}
            <div className="grid grid-cols-1 md:flex md:justify-between gap-4 items-end">
              <div className="flex md:w-1/2">
                {/* Date & Time */}
                <div className="pr-1">
                  <label className="block text-sm font-semibold text-gray-800 mb-1">
                    Date & Time
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      className="p-3 pr-12 font-medium border border-gray-300 rounded-xl w-full"
                      placeholder="e.g., 10 July, 9:00 AM"
                    />
                    <CalendarIcon className="w-5 h-5 text-yellow-500 absolute right-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                {/* Passengers */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1">
                    Passengers
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="3"
                      className="p-3 font-medium border border-gray-300 rounded-xl w-full"
                    />
                    <PersonIcon className="w-5 h-5 text-yellow-500 absolute right-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-2 md:mt-0">
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-yellow-500 text-black font-semibold rounded-md flex justify-center items-center gap-2 hover:bg-yellow-600 transition"
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
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
