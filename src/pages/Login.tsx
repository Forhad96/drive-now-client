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
        id: data.userId,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      console.log(user);
      dispatch(setUser({ user, token: res.data.accessToken }));
      toast.success("Login successful", { id: tostId, duration: 2000 });
      if (res.data.needsPasswordChange) {
        navigate(`/change-password`);
      } else {
        navigate(`/${user.role}/dashboard`);
      }
    } catch (error) {
      toast.error("something went wrong.", { id: tostId, duration: 2000 });
    }
  };

  const defaultValues = {
    userId: "A-0001",
    password: "admin123",
  };
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <CommonForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <CommonInput type="text" name="userId" label="ID" />
        <CommonInput type="text" name="password" label="Password" />
        <Button htmlType="submit">Login</Button>
      </CommonForm>
    </Row>
  );
};

export default Login;
