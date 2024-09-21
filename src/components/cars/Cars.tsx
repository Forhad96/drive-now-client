import { Link } from "react-router-dom";
import { useGetAllCarsQuery } from "../../redux/features/car/CarMangement.api";
import Container from "../Shared/Container";

import { Select, Slider, Tabs } from "antd";
import DNCheckbox from "../Shared/DNCheckbox";
import CarsCard from "./CarsCard";
import { TCar } from "../../types";

const tabItems = [
  {
    label: "All",
    key: "all",
  },
  {
    label: "Economy",
    key: "economy",
  },
  {
    label: "Luxury",
    key: "luxury",
  },
  {
    label: "Best Seller",
    key: "best",
  },
  {
    label: "Discount offer",
    key: "discount",
  },
];

const Cars = () => {
  const { data } = useGetAllCarsQuery(undefined);
  // console.log(data.data.result);
  const cars = data?.data?.result as TCar[]

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <Container className="py-5">
      <div className="flex justify-between">
        <Tabs
          defaultActiveKey="1"
          centered
          items={tabItems.map((item) => {
            return {
              label: item.label,
              key: item.key,
              // children: `Content of Tab Pane ${id}`,
            };
          })}
        />
        <Select
          // defaultValue="lucy"
          placeholder="Sort By"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: "high", label: "Price Form Lower to higher" },
            { value: "lower", label: "Price Form higher to Lower " },
          ]}
        />
      </div>
      <div className="flex">
        {/* <SectionTitle title="Trending product"></SectionTitle> */}

        <div className="w-1/4 shadow-2xl rounded-xl max-h-fit p-6">
          <h4 className="text-xl font-medium border-b-2 pb-4">Filter By🎯</h4>
          <div>
            <h5 className="text-base py-3 border-b-2 font-medium">Car Type</h5>
            <DNCheckbox
              options={["sedan", "SUV", "truck", "van", "coupe", "electric"]}
            />
            <h5 className="text-base py-3 border-b-2 font-medium">
              Price Range
            </h5>

            <PriceRangeFilter />
            <h5 className="text-base py-3 border-b-2 font-medium">Colors</h5>
            <DNCheckbox
              options={["sedan", "SUV", "truck", "van", "coupe", "electric"]}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3">
          {cars?.map((car) => (
            <CarsCard key={car?.name} car={car} />
          ))}
        </div>
      </div>

      <Link to="" className="flex items-center justify-center">
        <button className="bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-neutral focus:outline-none focus:ring-4 focus:ring-blue-300">
          Show All
        </button>
      </Link>
    </Container>
  );
};
export default Cars;

const PriceRangeFilter: React.FC = () => {
  const onChange = (value: number | number[]) => {
    console.log("onChange: ", value);
  };

  const onChangeComplete = (value: number | number[]) => {
    console.log("onChangeComplete: ", value);
  };

  return (
    <>
      <Slider
        defaultValue={30}
        onChange={onChange}
        onChangeComplete={onChangeComplete}
      />
    </>
  );
};
