import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useSignUpMutation } from "../redux/features/auth/authApi";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import CommonForm from "../components/form/CommonForm";
import CommonInput from "../components/form/CommonInput";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signUp] = useSignUpMutation();

  const onSubmit = async (data: FieldValues) => {
    const tostId = toast.loading("Creating account...");
    try {
      const newUser = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      const res = await signUp(newUser).unwrap();
      console.log(res);
      const user = verifyToken(res.data.accessToken) as TUser;
      console.log(user);
      dispatch(setUser({ user, token: res.data.accessToken }));
      toast.success("Account created successfully", { id: tostId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
    } catch (error) {
      toast.error("Something went wrong.", { id: tostId, duration: 2000 });
    }
  };

  const defaultValues = {
    // name: "Forhad Hossain",
    // email: "forhad@gmail.com",
    // password: "admin123",
  };

  return (
    <div className="bg-gray-100 py-20 flex items-center justify-center">
      <div className="flex flex-col items-center gap-2 border-2 border-gray-200 p-12 rounded-lg shadow-md w-96 mx-auto mt-10">
        <h1 className="text-2xl font-bold text-center">
          Join <br /> Drive Now
        </h1>
        <p className="text-gray-500">Enter your details to create an account</p>

        <CommonForm onSubmit={onSubmit} defaultValues={defaultValues}>
          <CommonInput type="text" name="name" label="Name" />
          <CommonInput type="email" name="email" label="Email" />
          <CommonInput type="password" name="password" label="Password" />
          <Row justify="space-between" style={{ gap: 20 }}>
            <Button className="bg-primary w-full text-light-buttonText dark:text-dark-buttonText" htmlType="submit">
              Register
            </Button>
          </Row>
        </CommonForm>
      </div>
    </div>
  );
};

export default Register;
