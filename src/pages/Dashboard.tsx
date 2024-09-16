import {
  UserOutlined,
  HomeOutlined,
  CalendarOutlined,
  MessageOutlined,
  CreditCardOutlined,
  SettingOutlined,
  EllipsisOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Avatar, Button } from "antd";
import companyLogo from "../assets/companyLogo.png";
import profile from "../assets/profile.png";
import { sideMenuItems } from "../data/data";

const { Header, Content, Sider } = Layout;

const Dashboard = () => {
  const colorBgContainer = "#fff";
  const borderRadiusLG = "8px";

  return (
    <Layout className="min-h-screen">
      {/* Header */}
      <Header className="flex items-center justify-between px-4 bg-white">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={companyLogo} alt="Tech.Care Logo" className="h-10 mr-3" />
        </div>

        {/* Menu Items */}
        <Menu
          mode="horizontal"
          className="flex justify-center bg-transparent border-none"
        >
          <Menu.Item
            key="1"
            icon={<HomeOutlined />}
            className="text-sm font-semibold no-underline hover:no-underline"
          >
            Overview
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<UserOutlined />}
            className="text-sm font-semibold text-white bg-[#01F0D0] w-[120px] mx-auto text-center rounded-full no-underline hover:no-underline"
          >
            Patients
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<CalendarOutlined />}
            className="text-sm font-semibold no-underline hover:no-underline"
          >
            Schedule
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={<MessageOutlined />}
            className="text-sm font-semibold no-underline hover:no-underline"
          >
            Message
          </Menu.Item>
          <Menu.Item
            key="5"
            icon={<CreditCardOutlined />}
            className="text-sm font-semibold no-underline hover:no-underline"
          >
            Transactions
          </Menu.Item>
        </Menu>
        {/* User Profile Section */}
        <div className="flex items-center p-4 bg-white rounded-lg">
          <Avatar src={profile} size="large" />
          <div className="px-3 ml-3 border-r">
            <span className="block text-base font-semibold text-gray-900">
              Dr. Jose Simmons
            </span>
            <span className="block text-sm text-gray-500">
              General Practitioner
            </span>
          </div>
          <div className="flex">
            <Button
              icon={<SettingOutlined className="font-bold" />}
              shape="circle"
              className="text-gray-600 bg-transparent border-none hover:text-green-600"
            />
            <Button
              icon={
                <EllipsisOutlined className="font-bold transform rotate-90" />
              }
              shape="circle"
              className="text-gray-600 bg-transparent border-none hover:text-green-600"
            />
          </div>
        </div>
      </Header>

      <Layout className="p-6">
        <Sider
          width={300}
          style={{
            background: colorBgContainer,
            height: "100vh",
            overflowY: "auto",
          }}
          className="py-3 sider-custom-scrollbar" // Added custom class
        >
          <div className="flex items-center justify-between px-5 mb-4">
            <h2 className="text-2xl font-bold">Patients</h2>
            <SearchOutlined className="text-lg cursor-pointer" />
          </div>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            {sideMenuItems.map((item) => (
             <Menu.Item
             className="py-8"
             key={item.key}
           >
             <div className="flex items-center justify-between">
             <img
                   src={item.icon}
                   alt="menu item"
                   className="w-12 h-12 border rounded-full"
                 />
               <div>
                 <h3 className="font-semibold">{item.name}</h3>
                 <p>
                   {item.gender}, <span>{item.age}</span>
                 </p>
               </div>
               <div className="flex items-center">
                 <div className="mr-4">{item.rightIcon}</div>
               
               </div>
             </div>
           </Menu.Item>
           
            ))}
          </Menu>
        </Sider>

        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            content here
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
