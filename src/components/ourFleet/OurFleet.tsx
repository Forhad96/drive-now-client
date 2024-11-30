
import CommonSlider from "../Shared/CommonSlider/CommonSlider";
import SliderAction from "../Shared/CommonSlider/SliderAction";
import Container from "../Shared/Container";
import SectionHeader from "../Shared/SectionHeader";

const OurFleet = () => {

  return (
    <Container className="relative">
      <SectionHeader
        subtitle="Our Fleet"
        title="Explore our perfect and </br> extensive fleet"
      />
      <CommonSlider sliderId="ourFleet" >
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <CarCard key={item} />
        ))}
      </CommonSlider>
      <SliderAction
        sliderId="ourFleet"

        buttonColor="bg-primary"

      />
    </Container>
  );
};
export default OurFleet;

const CarCard = () => {
  
  return (
    <div className="max-w-sm bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg shadow-lg p-4">
      {/* Car Image */}
      <img
        src="https://demo.awaikenthemes.com/novaride/wp-content/uploads/2024/08/Breeze-Compact.png" // Replace with actual image
        alt="Voyager Hybrid"
        className="w-full h-40 object-cover rounded-lg"
      />

      {/* Category Badge */}
      <span className="mt-3 inline-block bg-light-input dark:bg-dark-input text-primary dark:text-dark-text text-sm font-medium px-3 py-1 rounded-full">
        Electric Car
      </span>

      {/* Car Title */}
      <h3 className="mt-3 text-xl font-semibold text-light-text dark:text-dark-text">
        Voyager Hybrid
      </h3>

      {/* Features */}
      <div className="mt-3 flex justify-between text-light-text dark:text-dark-text text-sm">
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-primary dark:text-dark-text"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 8.25v-1.5A2.25 2.25 0 016.75 4.5h10.5a2.25 2.25 0 012.25 2.25v1.5m-15 0h15m-15 0v8.25a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V8.25m-15 0h15"
            />
          </svg>
          <span>4 Doors</span>
        </div>
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-primary dark:text-dark-text"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25V9m9 0v9m0 0a2.25 2.25 0 01-2.25 2.25H8.25A2.25 2.25 0 016 18V9m9 9H9"
            />
          </svg>
          <span>2 Passengers</span>
        </div>
      </div>

      {/* Price and Action */}
      <div className="mt-4 flex justify-between items-center">
        <div>
          <span className="text-xl font-bold text-primary dark:text-primary">
            $248
          </span>
          <span className="text-sm text-light-text dark:text-dark-text">
            /Per Day
          </span>
        </div>
        <button className="bg-primary dark:bg-dark-input text-light-buttonText dark:text-dark-buttonText p-3 rounded-full hover:bg-primaryHover dark:hover:bg-dark-buttonHover transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 12l-6.75 6.75M17.25 12l-6.75-6.75"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

// export default CarCard;
