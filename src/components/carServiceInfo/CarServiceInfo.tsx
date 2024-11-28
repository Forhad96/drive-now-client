import SectionHeader from "../Shared/SectionHeader";

const CarServiceInfo = () => {
  return (
    <section className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-lg font-semibold text-red-500 mb-2">
        General Information
      </h2>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Know about our car service
      </h1>
      {/* <SectionHeader title=" Know about our car service" subtitle="General Information" alignment="left"/> */}
      <p className="text-gray-700 mb-6">
        At <strong>Drive Now</strong>, we provide top-notch car services to make
        your journey comfortable and hassle-free. Whether you’re planning a
        road trip or need reliable transportation, our service is tailored to
        meet your needs. Enjoy the peace of mind with our quality support and
        customer-friendly policies.
      </p>
      <ul className="space-y-4">
        <li className="flex items-center">
          <span className="text-green-500 mr-2">✔</span>
          <span className="text-gray-800 font-medium">
            24/7 Roadside Assistance
          </span>
        </li>
        <li className="flex items-center">
          <span className="text-green-500 mr-2">✔</span>
          <span className="text-gray-800 font-medium">
            Free Cancellation & Return
          </span>
        </li>
        <li className="flex items-center">
          <span className="text-green-500 mr-2">✔</span>
          <span className="text-gray-800 font-medium">
            Rent Now, Pay When You Arrive
          </span>
        </li>
      </ul>
    </section>
  );
};

export default CarServiceInfo;
