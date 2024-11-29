import React, { useState, useRef } from "react";

const PoliciesAgreement = () => {
  // Realistic data for policies
  const policies = [
    {
      title: "Driver's License Requirements",
      content:
        "Drivers must present a valid driver's license that has been held for at least one year. International drivers may require an International Driving Permit (IDP) along with their local license.",
    },
    {
      title: "Insurance and Coverage policy",
      content:
        "Our vehicles are covered with standard liability insurance. Customers can opt for additional coverage to reduce liability in case of an accident.",
    },
    {
      title: "Available Payment Methods",
      content:
        "We accept credit cards, debit cards, and online payments. Cash payments are available in certain locations. A valid card is required for security deposits.",
    },
    {
      title: "Cancellation and Modification Policy",
      content:
        "Cancellations made 48 hours before the booking date are free of charge. Modifications are subject to availability and may incur additional charges.",
    },
    {
      title: "Smoking and Pet Policies",
      content:
        "Smoking is strictly prohibited in all vehicles. Pets are allowed, but the vehicle must be returned clean, or additional cleaning fees may apply.",
    },
    {
      title: "The Minimum Age Requirements",
      content:
        "The minimum age for renting a vehicle is 21 years. Drivers under 25 may incur a young driver surcharge.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-lg font-semibold text-red-500 mb-2">
        Rental Conditions
      </h2>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Policies and Agreement
      </h1>
      <div className="space-y-4">
        {policies.map((policy, index) => (
          <div
            key={index}
            className={`border ${
              activeIndex === index ? "bg-primary text-white" : "border-gray-300"
            } rounded-lg overflow-hidden`}
          >
            <button
              className={`w-full text-left flex items-center justify-between px-4 py-3 font-medium ${
                activeIndex === index
                  ? " text-white"
                  : " text-gray-800"
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <span>{policy.title}</span>
              <span className="text-xl">{activeIndex === index ? "- " : "+ "}</span>
            </button>
            <hr />
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className="overflow-hidden transition-all duration-300"
              style={{
                maxHeight:
                  activeIndex === index
                    ? contentRefs.current[index]?.scrollHeight
                    : 0,
              }}
            >
              <div className="px-4 py-3">
                {policy.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PoliciesAgreement;
