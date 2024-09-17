import { useState } from "react";
import { menuItems, userProfile } from "../data/data";
import companyLogo from "../assets/companyLogo.png";
import { SettingOutlined, EllipsisOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

const Header = () => {
  const [activeMenuId, setActiveMenuId] = useState(2);
  return (
    <>
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
    </>
  );
};

export default Header;
