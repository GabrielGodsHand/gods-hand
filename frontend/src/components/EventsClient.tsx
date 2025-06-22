"use client";

import { Organization, Event } from "@/lib/types/database";
import { User } from "@supabase/supabase-js";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import TiltedCard from "@/components/TiltedCard";
import DivineLoader from "@/components/DivineLoader";
import InteractiveGlobe from "@/components/InteractiveGlobe";

interface EventsClientProps {
  user: User | null;
  organization: Organization | null;
  events: Event[];
}

interface DisasterLocation {
  id: string;
  lat: number;
  lng: number;
  name: string;
  type: string;
  amount: number;
}

export default function EventsClient({
  user,
  organization,
  events,
}: EventsClientProps) {
  const navigate = useNavigate();

  // Consistent date formatting function to avoid hydration mismatch
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${day}/${month}/${year}`;
  };

  // Convert events to disaster locations for the globe
  const disasterLocations: DisasterLocation[] = events.map((event) => ({
    id: event.id,
    lat: getLatitudeFromLocation(event.disaster_location),
    lng: getLongitudeFromLocation(event.disaster_location),
    name: event.disaster_location,
    type: "Disaster Event",
    amount: event.estimated_amount_required,
  }));

  // Simple location to coordinates mapping (in a real app, you'd use a geocoding service)
  function getLatitudeFromLocation(location: string): number {
    const locationMap: { [key: string]: number } = {
      Turkey: 39.9334,
      Syria: 34.8021,
      Morocco: 31.7917,
      Libya: 26.3351,
      Pakistan: 30.3753,
      Afghanistan: 33.9391,
      Haiti: 18.9712,
      Philippines: 12.8797,
      Indonesia: -0.7893,
      Japan: 36.2048,
      Nepal: 28.3949,
      Chile: -35.6751,
      "New Zealand": -40.9006,
      California: 36.7783,
      Florida: 27.7663,
      Texas: 31.9686,
      Louisiana: 31.1695,
      "Puerto Rico": 18.2208,
      Australia: -25.2744,
      Greece: 39.0742,
      Italy: 41.8719,
      Portugal: 39.3999,
      Spain: 40.4637,
      France: 46.6034,
      Germany: 51.1657,
      Canada: 56.1304,
      Brazil: -14.235,
      India: 20.5937,
      China: 35.8617,
      Thailand: 15.87,
      Myanmar: 21.9162,
      Bangladesh: 23.685,
      "Sri Lanka": 7.8731,
      Madagascar: -18.7669,
      Mozambique: -18.6657,
      Somalia: 5.1521,
      Kenya: -0.0236,
      Ethiopia: 9.145,
      Sudan: 12.8628,
      Yemen: 15.5527,
      Iraq: 33.2232,
      Iran: 32.4279,
      Ukraine: 48.3794,
      Russia: 61.524,
      Poland: 51.9194,
      Romania: 45.9432,
      Hungary: 47.1625,
      "Czech Republic": 49.8175,
      Slovakia: 48.669,
      Slovenia: 46.1512,
      Croatia: 45.1,
      Bosnia: 43.9159,
      Serbia: 44.0165,
      Montenegro: 42.7087,
      Albania: 41.1533,
      "North Macedonia": 41.6086,
      Bulgaria: 42.7339,
      Moldova: 47.4116,
      Belarus: 53.7098,
      Lithuania: 55.1694,
      Latvia: 56.8796,
      Estonia: 58.5953,
      Finland: 61.9241,
      Sweden: 60.1282,
      Norway: 60.472,
      Denmark: 56.2639,
      Netherlands: 52.1326,
      Belgium: 50.5039,
      Luxembourg: 49.8153,
      Switzerland: 46.8182,
      Austria: 47.5162,
      Liechtenstein: 47.166,
      Monaco: 43.7384,
      "San Marino": 43.9424,
      "Vatican City": 41.9029,
      Malta: 35.9375,
      Cyprus: 35.1264,
      Iceland: 64.9631,
      Ireland: 53.4129,
      "United Kingdom": 55.3781,
      Mexico: 23.6345,
      Guatemala: 15.7835,
      Belize: 17.1899,
      "El Salvador": 13.7942,
      Honduras: 15.2,
      Nicaragua: 12.8654,
      "Costa Rica": 9.7489,
      Panama: 8.538,
      Colombia: 4.5709,
      Venezuela: 6.4238,
      Guyana: 4.8604,
      Suriname: 3.9193,
      "French Guiana": 3.9339,
      Ecuador: -1.8312,
      Peru: -9.19,
      Bolivia: -16.2902,
      Paraguay: -23.4425,
      Uruguay: -32.5228,
      Argentina: -38.4161,
      "South Africa": -30.5595,
      Namibia: -22.9576,
      Botswana: -22.3285,
      Zimbabwe: -19.0154,
      Zambia: -13.1339,
      Malawi: -13.2543,
      Tanzania: -6.369,
      Uganda: 1.3733,
      Rwanda: -1.9403,
      Burundi: -3.3731,
      "Democratic Republic of Congo": -4.0383,
      "Republic of Congo": -0.228,
      "Central African Republic": 6.6111,
      Cameroon: 7.3697,
      "Equatorial Guinea": 1.6508,
      Gabon: -0.8037,
      "São Tomé and Príncipe": 0.1864,
      Chad: 15.4542,
      Niger: 17.6078,
      Mali: 17.5707,
      "Burkina Faso": 12.2383,
      "Ivory Coast": 7.54,
      Ghana: 7.9465,
      Togo: 8.6195,
      Benin: 9.3077,
      Nigeria: 9.082,
      Senegal: 14.4974,
      Gambia: 13.4432,
      "Guinea-Bissau": 11.8037,
      Guinea: 9.9456,
      "Sierra Leone": 8.4606,
      Liberia: 6.4281,
      Algeria: 28.0339,
      Tunisia: 33.8869,
      Egypt: 26.0975,
      default: 0,
    };
    return locationMap[location] || locationMap["default"];
  }

  function getLongitudeFromLocation(location: string): number {
    const locationMap: { [key: string]: number } = {
      Turkey: 35.2433,
      Syria: 38.9968,
      Morocco: -7.0926,
      Libya: 17.2283,
      Pakistan: 69.3451,
      Afghanistan: 67.71,
      Haiti: -72.2852,
      Philippines: 121.774,
      Indonesia: 113.9213,
      Japan: 138.2529,
      Nepal: 84.124,
      Chile: -71.543,
      "New Zealand": 174.886,
      California: -119.4179,
      Florida: -82.9001,
      Texas: -99.9018,
      Louisiana: -91.8677,
      "Puerto Rico": -66.5901,
      Australia: 133.7751,
      Greece: 21.8243,
      Italy: 12.5674,
      Portugal: -8.2245,
      Spain: -3.7492,
      France: 1.8883,
      Germany: 10.4515,
      Canada: -106.3468,
      Brazil: -51.9253,
      India: 78.9629,
      China: 104.1954,
      Thailand: 100.9925,
      Myanmar: 95.956,
      Bangladesh: 90.3563,
      "Sri Lanka": 80.7718,
      Madagascar: 46.8691,
      Mozambique: 35.5296,
      Somalia: 46.1996,
      Kenya: 37.9062,
      Ethiopia: 40.4897,
      Sudan: 30.2176,
      Yemen: 48.5164,
      Iraq: 43.6793,
      Iran: 53.688,
      Ukraine: 31.1656,
      Russia: 105.3188,
      Poland: 19.1451,
      Romania: 24.9668,
      Hungary: 19.5033,
      "Czech Republic": 15.4729,
      Slovakia: 19.699,
      Slovenia: 14.9955,
      Croatia: 15.2,
      Bosnia: 17.6791,
      Serbia: 21.0059,
      Montenegro: 19.3744,
      Albania: 20.1683,
      "North Macedonia": 21.7453,
      Bulgaria: 25.4858,
      Moldova: 28.3699,
      Belarus: 27.9534,
      Lithuania: 25.2797,
      Latvia: 24.6032,
      Estonia: 25.0136,
      Finland: 25.7482,
      Sweden: 18.6435,
      Norway: 8.4689,
      Denmark: 9.5018,
      Netherlands: 5.2913,
      Belgium: 4.4699,
      Luxembourg: 6.1296,
      Switzerland: 8.2275,
      Austria: 14.5501,
      Liechtenstein: 9.5554,
      Monaco: 7.4246,
      "San Marino": 12.4578,
      "Vatican City": 12.4534,
      Malta: 14.3754,
      Cyprus: 33.4299,
      Iceland: -19.0208,
      Ireland: -8.2439,
      "United Kingdom": -3.436,
      Mexico: -102.5528,
      Guatemala: -90.2308,
      Belize: -88.4976,
      "El Salvador": -88.8965,
      Honduras: -86.2419,
      Nicaragua: -85.2072,
      "Costa Rica": -83.7534,
      Panama: -80.7821,
      Colombia: -74.2973,
      Venezuela: -66.5897,
      Guyana: -58.9302,
      Suriname: -56.0278,
      "French Guiana": -53.1258,
      Ecuador: -78.1834,
      Peru: -75.0152,
      Bolivia: -63.5887,
      Paraguay: -58.4438,
      Uruguay: -55.7658,
      Argentina: -63.6167,
      "South Africa": 22.9375,
      Namibia: 18.4941,
      Botswana: 24.6849,
      Zimbabwe: 29.1549,
      Zambia: 27.8546,
      Malawi: 34.3015,
      Tanzania: 34.8888,
      Uganda: 32.2903,
      Rwanda: 29.8739,
      Burundi: 29.9189,
      "Democratic Republic of Congo": 21.7587,
      "Republic of Congo": 15.8277,
      "Central African Republic": 20.9394,
      Cameroon: 12.3547,
      "Equatorial Guinea": 10.2679,
      Gabon: 11.6094,
      "São Tomé and Príncipe": 6.6131,
      Chad: 18.7322,
      Niger: 8.0817,
      Mali: -3.9962,
      "Burkina Faso": -1.5616,
      "Ivory Coast": -5.5471,
      Ghana: -1.0232,
      Togo: 0.8248,
      Benin: 2.3158,
      Nigeria: 8.6753,
      Senegal: -14.4524,
      Gambia: -15.3101,
      "Guinea-Bissau": -15.1804,
      Guinea: -9.6966,
      "Sierra Leone": -11.7799,
      Liberia: -9.4295,
      Algeria: 1.6596,
      Tunisia: 9.5375,
      Egypt: 30.8025,
      default: 0,
    };
    return locationMap[location] || locationMap["default"];
  }

  const handleEventClick = (eventId: string) => {
    // Navigate to event detail page
    navigate(`/event/${eventId}`);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Divine Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#d4af8c] via-[#c9a876] to-[#b8956a]"></div>
        <div className="absolute inset-0 opacity-60">
          <img
            src="/assets/clouds.png"
            alt="Divine Clouds"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Divine Header */}
      <Header />

      <main
        className="relative z-10 max-w-7xl mx-auto px-6 py-8"
        style={{ paddingTop: "100px" }}
      >
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 font-['Cinzel'] drop-shadow-lg bg-gradient-to-b from-gray-800 to-gray-900 bg-clip-text text-transparent">
            Global Disaster Events
          </h1>
          <p className="text-xl text-gray-800 font-['Cinzel'] max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-md">
            Explore active disaster relief funds around the world. Each red
            region represents a location where communities need divine support
            and compassion.
          </p>
        </div>

        {/* Interactive Globe Section - Full Screen */}
        <div className="mb-16">
          {/* Globe without container - full screen with divine background */}
          <InteractiveGlobe disasters={disasterLocations} />
        </div>

        {/* Available Events Section */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 font-['Cinzel'] text-center drop-shadow-lg bg-gradient-to-b from-gray-800 to-gray-900 bg-clip-text text-transparent">
            Sacred Relief Missions
          </h2>

          {events.length === 0 ? (
            <div className="text-center py-16">
              <div className="mx-auto w-20 h-20 bg-amber-100/60 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <svg
                  className="w-10 h-10 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2-2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
              </div>
              <p className="text-gray-800 font-['Cinzel'] text-xl font-medium drop-shadow-sm">
                No active divine missions at this moment.
              </p>
              <p className="text-gray-700 font-['Cinzel'] text-lg mt-2">
                The heavens await new calls for aid.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <div
                  key={event.id}
                  id={`disaster-${event.id}`}
                  className="relative h-[420px]"
                >
                  <TiltedCard
                    imageSrc="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQyMCIgdmlld0JveD0iMCAwIDMwMCA0MjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iNDIwIiBmaWxsPSJ0cmFuc3BhcmVudCIvPgo8L3N2Zz4K"
                    altText={`${event.title} disaster relief fund`}
                    captionText={event.title}
                    containerHeight="420px"
                    containerWidth="100%"
                    imageHeight="420px"
                    imageWidth="320px"
                    scaleOnHover={1.02}
                    rotateAmplitude={8}
                    showMobileWarning={false}
                    showTooltip={false}
                    displayOverlayContent={true}
                    overlayContent={
                      <div
                        className="w-full h-full bg-amber-50/90 backdrop-blur-sm rounded-[15px] border border-amber-200 shadow-xl cursor-pointer transition-all duration-200 hover:shadow-2xl hover:border-amber-300 flex flex-col"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEventClick(event.id);
                        }}
                      >
                        {/* Header - Fixed Height */}
                        <div className="p-6 pb-4 border-b border-amber-100 flex-shrink-0">
                          <h3 className="text-xl font-bold text-gray-900 mb-3 font-['Cinzel'] leading-tight min-h-[3.5rem] flex items-center drop-shadow-sm">
                            {event.title}
                          </h3>

                          {/* Location Badge */}
                          <div className="inline-flex items-center bg-amber-100 border border-amber-200 rounded-full px-3 py-1">
                            <svg
                              className="w-4 h-4 mr-2 text-amber-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            <span className="text-sm font-bold text-amber-800 font-['Cinzel'] drop-shadow-sm">
                              {event.disaster_location}
                            </span>
                          </div>
                        </div>

                        {/* Content - Flexible Height */}
                        <div className="p-6 flex-1 flex flex-col justify-between">
                          {/* Event Details - Fixed Height */}
                          <div className="space-y-3 mb-4 flex-shrink-0">
                            <div className="flex items-center text-gray-800 font-['Cinzel'] text-sm font-medium">
                              <svg
                                className="w-4 h-4 mr-2 text-amber-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              <span className="drop-shadow-sm">
                                {formatDate(event.created_at)}
                              </span>
                            </div>

                            <div className="flex items-center text-gray-800 font-['Cinzel'] text-sm font-medium">
                              <svg
                                className="w-4 h-4 mr-2 text-amber-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                                />
                              </svg>
                              <span className="font-bold text-amber-800 drop-shadow-sm">
                                $
                                {event.estimated_amount_required.toLocaleString()}
                              </span>
                              <span className="ml-1 text-gray-700">needed</span>
                            </div>
                          </div>

                          {/* Description - Fixed Height with Overflow */}
                          <div className="mb-4 flex-1">
                            <p className="text-gray-800 font-['Cinzel'] text-sm leading-relaxed font-medium drop-shadow-sm h-[4.5rem] overflow-hidden">
                              {event.description.length > 140
                                ? `${event.description.substring(0, 140)}...`
                                : event.description}
                            </p>
                          </div>

                          {/* Footer - Fixed Height */}
                          <div className="flex items-center justify-between pt-3 border-t border-amber-100 flex-shrink-0">
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-amber-400 rounded-full shadow-sm"></div>
                              <span className="text-xs text-amber-800 font-['Cinzel'] font-bold drop-shadow-sm">
                                Sacred Mission Active
                              </span>
                            </div>

                            <div className="flex items-center text-amber-700">
                              <span className="text-xs font-['Cinzel'] mr-1 font-bold drop-shadow-sm">
                                Enter Mission
                              </span>
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Information Section for Non-logged-in Users */}
        {!user && (
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-['Cinzel'] drop-shadow-lg bg-gradient-to-b from-gray-800 to-gray-900 bg-clip-text text-transparent">
              Answer the Divine Call to Serve
            </h2>
            <p className="text-gray-800 mb-8 font-['Cinzel'] text-xl max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-sm">
              Join our sacred mission to distribute divine resources to
              communities touched by earthly trials. Your compassion can become
              their salvation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/login"
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#ffd700] to-[#ffed4e] text-gray-900 font-bold text-lg rounded-xl hover:from-[#ffed4e] hover:to-[#ffd700] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] font-['Cinzel'] drop-shadow-sm"
              >
                Begin Sacred Journey
              </Link>
              <Link
                to="/"
                className="inline-flex items-center px-10 py-5 bg-gray-900 hover:bg-gray-800 text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] font-['Cinzel'] drop-shadow-sm"
              >
                Discover Our Mission
              </Link>
            </div>
          </div>
        )}

        {/* Quick Actions for Logged-in Users */}
        {user && organization && (
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-['Cinzel'] text-center drop-shadow-lg bg-gradient-to-b from-gray-800 to-gray-900 bg-clip-text text-transparent">
              Divine Administration
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                to="/kyb"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-5 px-8 rounded-xl text-center text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] font-['Cinzel'] drop-shadow-sm"
              >
                Sacred Registry
              </Link>
              <Link
                to="/petitions"
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-5 px-8 rounded-xl text-center text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] font-['Cinzel'] drop-shadow-sm"
              >
                Divine Petitions
              </Link>
              <Link
                to="/documents"
                className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold py-5 px-8 rounded-xl text-center text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] font-['Cinzel'] drop-shadow-sm"
              >
                Sacred Scrolls
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
