import { useState } from "react";
import { menuItems, userProfile } from "../data/data";
import companyLogo from "../assets/companyLogo.png";
import { SettingOutlined, EllipsisOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

const Header = () => {
  const [activeMenuId, setActiveMenuId] = useState(2);

  return (
    <>

      <header className="fixed top-0 z-10 flex items-center justify-between w-full px-4 py-3 bg-white shadow-sm md:px-6 lg:px-8">
        <div className="flex items-center">
          <img
            src={companyLogo}
            alt="Tech.Care Logo"
            className="h-8 mr-2 cursor-pointer sm:h-10"
          />
              <h1 className="text-2xl">sdfdsfdsfdsfdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsds</h1>
        </div>

        <div className="items-center justify-center flex-grow hidden space-x-4 md:flex">
          {menuItems.map((menu) => (
            <div
              key={menu.id}
              onClick={() => setActiveMenuId(menu.id)}
              className={`py-2 px-3 text-sm font-semibold cursor-pointer rounded-full ${
                menu.id === activeMenuId ? "bg-[#01F0D0]" : ""
              } ${menu.id === 2 ? menu.style : ""}`}
            >
              <div className="flex items-center space-x-2">
                {menu.icon && <span>{menu.icon}</span>}
                <span>{menu.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <Avatar src={userProfile.avatar} size="large" />
          <div className="hidden sm:block sm:ml-2">
            <span className="block text-sm font-semibold text-gray-900">
              {userProfile.name}
            </span>
            <span className="block text-xs text-gray-500">
              {userProfile.role}
            </span>
          </div>

          <div className="flex space-x-1 sm:space-x-2">
            <button className="p-2 text-gray-600 hover:text-green-600">
              <SettingOutlined />
            </button>
            <button className="p-2 text-gray-600 hover:text-green-600">
              <EllipsisOutlined className="rotate-90" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex justify-center w-full py-2 bg-white shadow-sm md:hidden">
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
