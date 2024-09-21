import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type CommonInputProps = {
  type: string;
  name: string;
  label: string;
  disabled?: boolean;
};

const CommonInput = ({ type, name, label, disabled }: CommonInputProps) => {
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
            type={type}
            id={name}
            {...field}
            disabled={disabled}
            size="large"
          />
        </Form.Item>
      )}
    />
  );
};

export default CommonInput;
