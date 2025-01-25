import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import CommonForm from "../components/form/CommonForm";
import CommonInput from "../components/form/CommonInput";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const onSubmit = async (data: FieldValues) => {
    const tostId = toast.loading("logging in...");
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      console.log(res);
      const user = verifyToken(res.data.accessToken) as TUser;
      console.log(user);
      dispatch(setUser({ user, token: res.data.accessToken }));
      toast.success("Login successful", { id: tostId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
    } catch (error) {
      toast.error("something went wrong.", { id: tostId, duration: 2000 });
    }
  };

  const defaultValues = {
    // email: "forhad@gmail.com",
    // password: "admin123",
  };
  return (
<div className="bg-gray-100  py-20 flex items-center justify-center">
<div className="flex flex-col items-center gap-2 border-2 border-gray-200 p-12  rounded-lg shadow-md w-96 mx-auto mt-10 ">
      <h1  className="text-2xl font-bold text-center">Welcome back to <br /> Drive Now</h1>
      <p className="text-gray-500">Enter your email and password to login</p>

        <CommonForm onSubmit={onSubmit} defaultValues={defaultValues}>
          <CommonInput type="text" name="email" label="Email" />
          <CommonInput type="text" name="password" label="Password" />
          <Row justify="space-between" style={{ gap: 20 }}>
            <Button className="bg-primary w-full text-light-buttonText dark:text-dark-buttonText" htmlType="submit">Login</Button>
          </Row>
        </CommonForm>

    </div>
</div>
  );
};

export default Login;
