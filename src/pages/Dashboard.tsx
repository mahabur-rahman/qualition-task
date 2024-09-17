import {
  SettingOutlined,
  EllipsisOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Avatar } from "antd";
import companyLogo from "../assets/companyLogo.png";
import { menuItems, sideMenuItems, userProfile } from "../data/data";
import { useState } from "react";
import DiagnosticChart from "../components/DiagnosticChart";
import UserProfile from "../components/UserProfile";
import DiagnosticReport from "../components/DiagnosticReport";
import DiagnosticListWidget from "../components/DiagnosticListWidget";
import LabResult from "../components/LabResult";

const { Sider } = Layout;

const Dashboard = () => {
  const [selectedKey, setSelectedKey] = useState("4");
  const [activeMenuId, setActiveMenuId] = useState(2);

  const colorBgContainer = "#fff";

  return (
    <>
      <Layout className="min-h-screen">
        <header className="fixed top-0 z-10 flex items-center justify-between w-full px-4 py-2 bg-white shadow-sm">
          <div className="flex items-center">
            <img src={companyLogo} alt="Tech.Care Logo" className="h-10 mr-3" />
          </div>

          <div className="flex items-center justify-center flex-grow space-x-4">
            {menuItems.map((menu) => (
              <div
                key={menu.id}
                onClick={() => setActiveMenuId(menu.id)}
                className={`py-2 px-4 text-sm font-semibold cursor-pointer no-underline hover:no-underline rounded-full ${
                  menu.id === activeMenuId ? "bg-[#01F0D0]" : ""
                } ${menu.id === 2 ? menu.style : ""}`}
                style={{
                  backgroundColor:
                    activeMenuId === menu.id ? "#01F0D0" : "transparent",
                }}
              >
                <div className="flex items-center space-x-2">
                  {menu.icon && <span>{menu.icon}</span>}
                  <span>{menu.label}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Avatar src={userProfile.avatar} size="large" />
            <div className="px-3 ml-3 border-r">
              <span className="block text-base font-semibold text-gray-900">
                {userProfile.name}
              </span>
              <span className="block text-sm text-gray-500">
                {userProfile.role}
              </span>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 text-gray-600 bg-transparent border-none hover:text-green-600">
                <SettingOutlined className="font-extrabold" />
              </button>
              <button className="p-2 text-gray-600 bg-transparent border-none hover:text-green-600">
                <EllipsisOutlined className="font-extrabold transform rotate-90" />
              </button>
            </div>
          </div>
        </header>

        <Layout style={{ paddingTop: 64 }} className="min-h-screen">
          <Sider
            width={300}
            style={{
              background: colorBgContainer,
              height: "calc(100vh - 64px)",
              position: "fixed",
              top: 64,
              left: 0,
              overflowY: "auto",
              zIndex: 1,
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

          <Layout
            style={{ marginLeft: 300, padding: "25px 24px 24px" }}
            className="grid grid-cols-10 gap-4"
          >
            <div className="col-span-7 rounded-lg">
              <div className="p-5 bg-white shadow-sm rounded-xl">
                <DiagnosticChart />
                <DiagnosticReport />
              </div>
              <DiagnosticListWidget />
            </div>

            <div className="col-span-3 bg-[#F6F7F8] rounded-lg">
              <UserProfile />
              <LabResult />
            </div>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default Dashboard;
