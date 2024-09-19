import { Form, Input } from "antd";
import { Controller } from "react-hook-form";
type TPHInputProps = {
  type: string;
  name: string;
  label: string;
  disabled?:boolean
};
const PHInput = ({ type, name, label,disabled }: TPHInputProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      {/* <label htmlFor={name}>{label}:</label> */}
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item  label={label}>
            <Input type={type} id={name} {...field} disabled={disabled} size="large" />
          </Form.Item>
        )}
      />
    </div>
  );
};
export default PHInput;
