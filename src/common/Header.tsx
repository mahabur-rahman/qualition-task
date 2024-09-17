import { useState } from "react";
import { menuItems, userProfile } from "../data/data";
import companyLogo from "../assets/companyLogo.png";
import { SettingOutlined, EllipsisOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

const Header = () => {
  const [activeMenuId, setActiveMenuId] = useState(2);

  return (
    <>
      <header className="fixed top-0 z-10 flex items-center justify-between w-full px-4 py-2 bg-white shadow-sm lg:px-8 xl:px-10">
        <div className="flex items-center">
          <img
            src={companyLogo}
            alt="Tech.Care Logo"
            className="h-8 mr-2 sm:h-10 sm:mr-3"
          />
        </div>

        <div className="items-center justify-center flex-grow hidden space-x-4 md:flex">
          {menuItems.map((menu) => (
            <div
              key={menu.id}
              onClick={() => setActiveMenuId(menu.id)}
              className={`py-1 sm:py-2 px-3 sm:px-4 text-xs sm:text-sm font-semibold cursor-pointer no-underline hover:no-underline rounded-full ${
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

        <div className="flex items-center space-x-2 sm:space-x-4">
          <Avatar src={userProfile.avatar} size="large" />
          <div className="hidden px-2 ml-2 border-r border-gray-300 sm:block sm:px-3 sm:ml-3">
            <span className="block text-sm font-semibold text-gray-900 sm:text-base">
              {userProfile.name}
            </span>
            <span className="block text-xs text-gray-500 sm:text-sm">
              {userProfile.role}
            </span>
          </div>

          <div className="flex space-x-1 sm:space-x-2">
            <button className="p-1 text-gray-600 bg-transparent border-none sm:p-2 hover:text-green-600">
              <SettingOutlined className="font-extrabold" />
            </button>
            <button className="p-1 text-gray-600 bg-transparent border-none sm:p-2 hover:text-green-600">
              <EllipsisOutlined className="font-extrabold transform rotate-90" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex justify-center w-full py-2 space-x-2 bg-white shadow-sm md:hidden sm:space-x-4">
        {menuItems.map((menu) => (
          <div
            key={menu.id}
            onClick={() => setActiveMenuId(menu.id)}
            className={`py-1 px-2 text-xs font-semibold cursor-pointer rounded-full ${
              menu.id === activeMenuId ? "bg-[#01F0D0]" : ""
            }`}
          >
            {menu.icon && <span>{menu.icon}</span>}
          </div>
        ))}
      </div>
    </>
  );
};

export default Header;
