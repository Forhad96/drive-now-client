import { Button, Layout, } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/features/auth/authSlice";
import { useState } from "react";
const { Header, Content} = Layout;
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,

} from "@ant-design/icons";
const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = ()=>{
    dispatch(logout())
    navigate("/login")
  }
  return (
    <Layout style={{ height: "100%" }}>
      <Sidebar collapsed={collapsed}/>
      <Layout>
        <Header style={{ padding: 0 }}>
          {/* <Button onClick={handleLogout}>Logout</Button> */}
          <Button
            type="primary"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {/*render Outlet */}
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
