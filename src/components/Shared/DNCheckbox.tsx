import { Checkbox, GetProp } from "antd";
type TDNCheckboxProp = {
    options:string[]
}
const DNCheckbox: React.FC<TDNCheckboxProp> = ({ options}) => {
  const onChange: GetProp<typeof Checkbox.Group, "onChange"> = (
    checkedValues
  ) => {
    console.log("checked = ", checkedValues);
  };

  const plainOptions = ["sedan", "SUV", "truck", "van", "coupe", "electric"];

  //   const options = [
  //     { label: "Apple", value: "Apple" },
  //     { label: "Pear", value: "Pear" },
  //     { label: "Orange", value: "Orange" },
  //   ];

  const optionsWithDisabled = [
    { label: "Apple", value: "Apple" },
    { label: "Pear", value: "Pear" },
    { label: "Orange", value: "Orange", disabled: false },
  ];

  return (
    <>
      <Checkbox.Group
        options={options}
        defaultValue={["Apple"]}
        onChange={onChange}
      />
    </>
  );
};
export default DNCheckbox