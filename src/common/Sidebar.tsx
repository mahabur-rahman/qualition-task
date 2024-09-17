import { SearchOutlined } from "@ant-design/icons";
import { Menu, Layout } from "antd";
import { sideMenuItems } from "../data/data";
import { useState } from "react";
const { Sider } = Layout;

const Sidebar = () => {
  const [selectedKey, setSelectedKey] = useState("4");
  const colorBgContainer = "#fff";

  return (
    <>
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
    </>
  );
};

export default Sidebar;
