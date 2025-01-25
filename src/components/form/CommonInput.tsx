import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type CommonInputProps = {
  type: string;
  name: string;
  label: string;
  placeHolder?:string;
  disabled?: boolean;
};

const CommonInput = ({ type, name, label,placeHolder, disabled }: CommonInputProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item
          label={label}
          validateStatus={error ? "error" : ""}
          help={error ? error.message : null}
        >
          <Input
          className="focus:outline-none hover:border-primary w-full   focus:border-primary focus:ring-2 focus:ring-primary"
            type={type}
            id={name}
            {...field}
            placeholder={placeHolder}
            disabled={disabled}
            size="large"
          />
        </Form.Item>
      )}
    />
  );
};

export default CommonInput;
