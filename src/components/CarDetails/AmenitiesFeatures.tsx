import SectionHeader from "../Shared/SectionHeader";


const AmenitiesFeatures = () => {
  const amenities = [
    "Music System",
    "Toolkit",
    "Abs System",
    "Bluetooth",
    "Full Boot Space",
    "Usb Charger",
    "Aux Input",
    "Spare Tyre",
    "Power Steering",
    "Power Windows",
  ];

  return (
    <section className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-lg font-semibold text-red-500 mb-2">Amenities</h2>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Premium amenities and features
      </h1>
      {/* <SectionHeader title="Premium amenities and features" subtitle="Amenities" alignment="left"/> */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex items-center">
            <span className="text-green-500 mr-2">✔</span>
            <span className="text-gray-800 font-medium">{amenity}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AmenitiesFeatures;
