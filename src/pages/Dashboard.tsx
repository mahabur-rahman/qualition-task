import {
  SettingOutlined,
  EllipsisOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Avatar, Button } from "antd";
import companyLogo from "../assets/companyLogo.png";
import profile from "../assets/profile.png";
import { menuItems, sideMenuItems } from "../data/data";
import { useState } from "react";

const { Header, Content, Sider } = Layout;

const Dashboard = () => {
  const [selectedKey, setSelectedKey] = useState("4");

  const colorBgContainer = "#fff";

  return (
    <Layout className="min-h-screen">
      <Header className="flex items-center justify-between px-4 bg-white">
        <div className="flex items-center">
          <img src={companyLogo} alt="Tech.Care Logo" className="h-10 mr-3" />
        </div>

        <Menu
          mode="horizontal"
          className="flex justify-center bg-transparent border-none"
        >
          {menuItems.map((menu) => (
            <Menu.Item
              key={menu.id}
              icon={menu.icon}
              className={`text-sm font-semibold no-underline hover:no-underline ${
                menu.style || ""
              }`}
            >
              {menu.label}
            </Menu.Item>
          ))}
        </Menu>
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
          width={350}
          style={{
            background: colorBgContainer,
            height: "100vh",
            overflowY: "auto",
          }}
          className="py-3 sider-custom-scrollbar"
        >
          <div className="flex items-center justify-between px-5 mb-4">
            <h2 className="text-2xl font-bold">Patients</h2>
            <SearchOutlined className="text-lg cursor-pointer" />
          </div>
          <Menu
            mode="inline"
            style={{ height: "100%", borderRight: 0 }}
            selectedKeys={[selectedKey]}
          >
            {sideMenuItems.map((item) => (
              <Menu.Item
                className={`py-8 ${item.key === "4" ? "bg-[#D8FCF7]" : ""}`}
                key={item.key}
                onClick={() => setSelectedKey(item.key)}
                style={{
                  backgroundColor:
                    selectedKey === item.key ? "#D8FCF7" : "transparent",
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.icon}
                      alt="menu item"
                      className="w-12 h-12 border rounded-full"
                    />
                    <div>
                      <h3 className="mb-[-16px] font-semibold text-black">
                        {item.name}
                      </h3>
                      <p className="text-gray-600">
                        {item.gender}, <span>{item.age}</span>
                      </p>
                    </div>
                  </div>
                  <div>{item.rightIcon}</div>
                </div>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>

        <Layout style={{ padding: "0 24px 24px" }}>
          <Content className="p-6 m-0 min-h-[280px] bg-white rounded-lg">
            content here
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
