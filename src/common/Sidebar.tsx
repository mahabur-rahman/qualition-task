import { SearchOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Menu, Layout, Drawer, Button } from "antd";
import { useState } from "react";
import { User } from "../interfaces/dashboard.interface";
const { Sider } = Layout;

interface SidebarProps {
  userInfo: User[];
}

const Sidebar = ({ userInfo }: SidebarProps) => {
  const [selectedKey, setSelectedKey] = useState<string>("4");
  const [isDrawerVisible, setIsDrawerVisible] = useState<boolean>(false);
  const colorBgContainer = "#fff";

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const closeDrawer = () => {
    setIsDrawerVisible(false);
  };

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
        className="hidden py-3 overflow-hidden lg:block sider-custom-scrollbar"
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
          {userInfo.map((user, index) => (
            <Menu.Item
              className={`py-8 ${
                selectedKey === `${index + 1}` ? "bg-[#D8FCF7]" : ""
              }`}
              key={`${index + 1}`}
              onClick={() => setSelectedKey(`${index + 1}`)}
              style={{
                backgroundColor:
                  selectedKey === `${index + 1}` ? "#D8FCF7" : "transparent",
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={user.profile_picture}
                    alt="profile"
                    className="w-12 h-12 border rounded-full"
                  />
                  <div>
                    <h3 className="mb-[-16px] font-semibold text-black">
                      {user.name}
                    </h3>
                    <p className="text-gray-600">
                      {user.gender}, <span>{user.age}</span>
                    </p>
                  </div>
                </div>
              </div>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>

      <div className="fixed z-20 lg:hidden top-4 left-4">
        <Button
          icon={<MenuOutlined />}
          onClick={showDrawer}
          className="p-2 text-gray-600 bg-white rounded-full shadow-lg"
        />
      </div>

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
        bodyStyle={{ padding: 0 }}
        width={300}
        closeIcon={null}
      >
        <Menu
          mode="inline"
          style={{ height: "100%", borderRight: 0 }}
          selectedKeys={[selectedKey]}
        >
          {userInfo.map((user, index) => (
            <Menu.Item
              className={`py-8 ${
                selectedKey === `${index + 1}` ? "bg-[#D8FCF7]" : ""
              }`}
              key={`${index + 1}`}
              onClick={() => {
                setSelectedKey(`${index + 1}`);
                closeDrawer();
              }}
              style={{
                backgroundColor:
                  selectedKey === `${index + 1}` ? "#D8FCF7" : "transparent",
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={user.profile_picture}
                    alt="profile"
                    className="w-12 h-12 border rounded-full"
                  />
                  <div>
                    <h3 className="mb-[-16px] font-semibold text-black">
                      {user.name}
                    </h3>
                    <p className="text-gray-600">
                      {user.gender}, <span>{user.age}</span>
                    </p>
                  </div>
                </div>
              </div>
            </Menu.Item>
          ))}
        </Menu>
      </Drawer>
    </>
  );
};

export default Sidebar;
