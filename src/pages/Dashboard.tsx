import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  HomeOutlined,
  CalendarOutlined,
  MessageOutlined,
  CreditCardOutlined,
  SettingOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, Avatar, Button } from "antd";
import companyLogo from "../assets/companyLogo.png";
import profile from "../assets/profile.png";

const { Header, Content, Sider } = Layout;

const items2 = [
  {
    key: "sub1",
    icon: <UserOutlined />,
    label: "subnav 1",
    children: [
      { key: "1", label: "option1" },
      { key: "2", label: "option2" },
      { key: "3", label: "option3" },
      { key: "4", label: "option4" },
    ],
  },
  {
    key: "sub2",
    icon: <LaptopOutlined />,
    label: "subnav 2",
    children: [
      { key: "5", label: "option5" },
      { key: "6", label: "option6" },
      { key: "7", label: "option7" },
      { key: "8", label: "option8" },
    ],
  },
  {
    key: "sub3",
    icon: <NotificationOutlined />,
    label: "subnav 3",
    children: [
      { key: "9", label: "option9" },
      { key: "10", label: "option10" },
      { key: "11", label: "option11" },
      { key: "12", label: "option12" },
    ],
  },
];

const Dashboard = () => {
  const colorBgContainer = "#fff";
  const borderRadiusLG = "8px";

  return (
    <Layout className="min-h-screen">
      {/* Header */}
      <Header className="flex items-center justify-between px-4 bg-white shadow-md">
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
              icon={<EllipsisOutlined className="font-bold transform rotate-90" />}
              shape="circle"
              className="text-gray-600 bg-transparent border-none hover:text-green-600"
            />
          </div>
        </div>
      </Header>

      {/* Sidebar and Content Layout */}
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
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
