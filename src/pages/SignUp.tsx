/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Checkbox, Form, notification } from "antd";
import CommonForm from "../components/form/CommonForm";
import CommonInput from "../components/form/CommonInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useSignUpMutation } from "../redux/features/auth/authApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";


// Define validation schema using Zod
const signUpSchema = z
  .object({
    name: z.string().nonempty("Name is required"),
    email: z.string().email("Please enter a valid email"),
    phone: z
      .string()
      .min(10, "Phone number must be at least 10 digits")
      .max(15, "Phone number can't exceed 15 digits"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    cPassword: z.string(),
  })
  .superRefine((data, context) => {
    if (data.password !== data.cPassword) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords must match",
        path: ["cPassword"],
      });
    }
  });

const SignUp = () => {
  const [signup] = useSignUpMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      await signup(data).unwrap();
      notification.success({
        message: "Registration Successful",
        description: "You have successfully registered. Redirecting to login.",
      });
      navigate("/login");
    } catch (error: any) {
      notification.error({
        message: "Registration Failed",
        description: error?.message || "Something went wrong!",
      });
    }
  };

  const defaultValues = {
    name: "forhad",
    email: "forhad@gmail.com",
    phone: "12365653245",
    password: "admin1234",
    cPassword: "admin1234",
    terms: false,
  };

  return (
    <div className="bg-gray-100 py-20 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 border border-gray-300 bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        {/* Heading Section */}
        <h1 className="text-3xl font-extrabold text-gray-800 text-center">
          Join <span className="text-primary">Drive Now</span>
        </h1>
        <p className="text-gray-500 text-center">
          Already have an account?{" "}
          <span
            className="text-primary font-medium cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Log in
          </span>
        </p>
        <p className="text-gray-500 text-sm text-center">
          Enter your details to create an account.
        </p>

        {/* Form Section */}
        <CommonForm
          resolver={zodResolver(signUpSchema)}
          onSubmit={onSubmit}
          defaultValues={defaultValues}
        >
          <CommonInput type="text" name="name" label="Name" />
          <CommonInput type="email" name="email" label="Email" />
          <CommonInput type="tel" name="phone" label="Phone" />
          <CommonInput type="password" name="password" label="Password" />
          <CommonInput
            type="password"
            name="cPassword"
            label="Confirm Password"
          />

          <Form.Item
            name="terms"
            valuePropName="checked"
            rules={[
              {
                required: true,
                message: "You must accept the terms and conditions",
              },
            ]}
          >
            <Checkbox>
              I agree to the <Link className="text-primary font-medium hover:underline" to="/terms">Terms and Conditions</Link>
            </Checkbox>
          </Form.Item>

          {/* Submit Button */}
          <Button
            htmlType="submit"
            className="bg-primary text-white w-full mt-5 py-2 rounded-md hover:bg-primaryHover transition-all"
          >
            Sign Up
          </Button>
        </CommonForm>
      </div>
    </div>
  );
};

export default SignUp;
