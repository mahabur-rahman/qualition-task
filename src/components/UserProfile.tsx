import {
  CalendarOutlined,
  WomanOutlined,
  PhoneOutlined,
  AlertOutlined,
  SafetyOutlined,
} from "@ant-design/icons";
import { UserProfileData } from "../interfaces/dashboard.interface";

interface UserProfileProps {
  userInfo: UserProfileData[];
}

const UserProfile = ({ userInfo }: UserProfileProps) => {
  const actualUser = userInfo[3];

  return (
    <>
      {actualUser ? (
        <section className="mx-auto mt-0 overflow-hidden bg-white rounded-lg shadow-sm">
          <div className="relative">
            <img
              src={actualUser.profile_picture}
              alt="actualUser Taylor"
              className="w-[150px] h-[150px] mx-auto border-4 border-white rounded-full mt-4"
            />
          </div>
          <div className="my-3 text-center">
            <h2 className="text-2xl font-semibold">{actualUser.name}</h2>
          </div>

          <div className="px-6 my-6 text-[14px]">
            <div className="flex items-center mb-2">
              <CalendarOutlined className="mr-2 text-gray-600" />
              <span>
                Date of Birth <br />
                <span className="font-semibold">{actualUser.date_of_birth}</span>
              </span>
            </div>
            <div className="flex items-center mb-2">
              <WomanOutlined className="mr-2 text-gray-600" />
              <span>
                Gender <br />
                <span className="font-semibold">{actualUser.gender}</span>
              </span>
            </div>
            <div className="flex items-center mb-2">
              <PhoneOutlined className="mr-2 text-gray-600" />
              <span>
                Contact Info <br />
                <span className="font-semibold">{actualUser.phone_number}</span>
              </span>
            </div>
            <div className="flex items-center mb-2">
              <AlertOutlined className="mr-2 text-gray-600" />
              <span>
                Emergency Contacts <br />
                <span className="font-semibold">
                  {actualUser.emergency_contact}
                </span>
              </span>
            </div>
            <div className="flex items-center mb-2">
              <SafetyOutlined className="mr-2 text-gray-600" />
              <span>
                Insurance Provider <br />
                <span className="font-semibold">{actualUser.insurance_type}</span>
              </span>
            </div>
          </div>

          <div className="mb-5 text-center">
            <button className="bg-[#01F0D0] text-black text-[12px] py-1 px-3 rounded-full font-semibold hover:bg-[#01d0b9] focus:outline-none focus:ring-2 focus:ring-[#01F0D0] focus:ring-opacity-50">
              Show All Information
            </button>
          </div>
        </section>
      ) : (
        <p>User not found</p>
      )}
    </>
  );
};

export default UserProfile;
