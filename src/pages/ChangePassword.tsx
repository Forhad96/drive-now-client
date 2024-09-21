import { Button, Row } from "antd";
import CommonForm from "../components/form/CommonForm";
import CommonInput from "../components/form/CommonInput";
import { FieldValues, SubmitHandler } from "react-hook-form";

import { TResponse } from "../types";
import { useAppDispatch } from "../redux/hooks";
import { logout } from "../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useChangePasswordMutation } from "../redux/features/admin/userManagement.api";

const ChangePassword = () => {
  const [changePassword] = useChangePasswordMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);

    const res = (await changePassword(data)) as TResponse<any>;
    console.log(res?.data?.success);
    if (res?.data?.success) {
      dispatch(logout());
      navigate("/login");
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <CommonForm onSubmit={onSubmit}>
        <CommonInput type="text" name="oldPassword" label="Old Password" />
        <CommonInput type="text" name="newPassword" label="New Password" />
        <Button htmlType="submit">Login</Button>
      </CommonForm>
    </Row>
  );
};

export default ChangePassword;
