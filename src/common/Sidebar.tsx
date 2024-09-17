import { SearchOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Menu, Layout, Drawer, Button } from "antd";
import { sideMenuItems } from "../data/data";
import { useState } from "react";
const { Sider } = Layout;

const Sidebar = () => {
  const [selectedKey, setSelectedKey] = useState("4");
  const [isDrawerVisible, setIsDrawerVisible] = useState(false); // Drawer visibility state
  const colorBgContainer = "#fff";

  // Handle opening and closing of drawer
  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const closeDrawer = () => {
    setIsDrawerVisible(false);
  };

  return (
    <>
      {/* Sidebar for screens >= 768px */}
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
        className="hidden py-3 md:block sider-custom-scrollbar"
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

      {/* Hamburger button for mobile screens */}
      <div className="fixed z-20 md:hidden top-4 left-4">
        <Button
          icon={<MenuOutlined />}
          onClick={showDrawer}
          className="p-2 text-gray-600 bg-white rounded-full shadow-lg"
        />
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title={
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Patients</h2>
            <Button
              icon={<CloseOutlined />}
              onClick={closeDrawer}
              className="text-lg text-gray-600 bg-transparent border-none"
            />
          </div>
        }
        placement="left"
        onClose={closeDrawer}
        visible={isDrawerVisible}
        bodyStyle={{ padding: 0 }} // Remove padding for body content
        width={300}
        closeIcon={null}
      >
        <Menu
          mode="inline"
          style={{ height: "100%", borderRight: 0 }}
          selectedKeys={[selectedKey]}
        >
          {sideMenuItems.map((item) => (
            <Menu.Item
              className={`py-8 ${item.key === "4" ? "bg-[#D8FCF7]" : ""}`}
              key={item.key}
              onClick={() => {
                setSelectedKey(item.key);
                closeDrawer(); // Close drawer on item click
              }}
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
      </Drawer>
    </>
  );
};

export default Sidebar;
