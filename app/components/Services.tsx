import {
  AirportIcon,
  LocalIcon,
  NightIcon,
  ScheduleIcon,
} from "../../icons/icon";

const ServicesOffered = () => {
  return (
    <section className="py-16 px-4 -mt-15 bg-white">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-3xl font-bold text-gray-800 mb-2">
          Services Offered
        </h2>
        <p className="text-lg md:text-sm text-gray-500">
          I can help you with the following services
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {/* Service 1 */}
        <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
          <div className="bg-blue-900 p-3 rounded-md">
            <LocalIcon className="w-10 h-10 md:w-6 md:h-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl md:text-lg font-semibold text-gray-800">
              Local City Rides
            </h3>
            <p className="text-lg md:text-sm text-gray-600">
              Reliable transport within the city. Quick pickups and smooth
              drop-offs wherever you need.
            </p>
          </div>
        </div>

        {/* Service 2 */}
        <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
          <div className="bg-blue-900 p-3 rounded-md">
            <AirportIcon className="w-10 h-10 md:w-6 md:h-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl md:text-lg font-semibold text-gray-800">
              Airport Drop-off
            </h3>
            <p className="text-lg md:text-sm text-gray-600">
              On-time service to ensure you never miss a flight. Hassle-free
              luggage support included.
            </p>
          </div>
        </div>

        {/* Service 3 */}
        <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
          <div className="bg-blue-900 p-3 rounded-md">
            <ScheduleIcon className="w-10 h-10 md:w-6 md:h-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl md:text-lg font-semibold text-gray-800">
              Scheduled Trips
            </h3>
            <p className="text-lg md:text-sm text-gray-600">
              Plan ahead and book your ride for later. Perfect for events,
              appointments, or regular commutes.
            </p>
          </div>
        </div>

        {/* Service 4 */}
        <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
          <div className="bg-blue-900 p-3 rounded-md">
            <NightIcon className="w-10 h-10 md:w-6 md:h-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl md:text-lg font-semibold text-gray-800">
              Late Night Rides
            </h3>
            <p className="text-lg md:text-sm text-gray-600">
              Safe and secure transport after hours. Available anytime you need
              a ride, day or night.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOffered;
