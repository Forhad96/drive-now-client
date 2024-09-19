const CustomerTestimonials = () => {
  const testimonials = [
    {
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      name: "Robert Johnson",
      title: "Business Traveler",
      quote:
        "The car was clean, comfortable, and exactly what I needed for my business trip. The rental process was smooth and hassle-free!",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      name: "Emily Davis",
      title: "Vacationer",
      quote:
        "Great service and a wonderful selection of vehicles. The staff was incredibly helpful and made my trip even better.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/55.jpg",
      name: "Michael Lee",
      title: "Frequent Renter",
      quote:
        "I’ve rented from several companies, but this one always delivers the best service and vehicles at affordable prices.",
    },
  ];


  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl sm:text-center md:mx-auto">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Client Testimonials
          </h3>
          <p className="mt-3 text-gray-600">
            Real feedback from real customers. See how our products and services
            have made a difference.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, idx) => (
              <li key={idx} className="bg-gray-100 p-4 rounded-xl">
                <figure>
                  <div className="flex items-center gap-x-4">
                    <img src={item.avatar} className="w-16 h-16 rounded-full" />
                    <div>
                      <span className="block text-gray-800 font-semibold">
                        {item.name}
                      </span>
                      <span className="block text-gray-600 text-sm mt-0.5">
                        {item.title}
                      </span>
                    </div>
                  </div>
                  <blockquote>
                    <p className="mt-6 text-gray-700">{item.quote}</p>
                  </blockquote>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default CustomerTestimonials;
