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
  const jessica = userInfo[3];

  return (
    <>
      {jessica ? (
        <section className="mx-auto mt-0 overflow-hidden bg-white rounded-lg shadow-sm">
          <div className="relative">
            <img
              src={jessica.profile_picture}
              alt="Jessica Taylor"
              className="w-[150px] h-[150px] mx-auto border-4 border-white rounded-full mt-4"
            />
          </div>
          <div className="my-3 text-center">
            <h2 className="text-2xl font-semibold">{jessica.name}</h2>
          </div>

          <div className="px-6 my-6">
            <div className="flex items-center mb-2">
              <CalendarOutlined className="mr-2 text-gray-600" />
              <span>
                Date of Birth <br />
                <span className="font-semibold">{jessica.date_of_birth}</span>
              </span>
            </div>
            <div className="flex items-center mb-2">
              <WomanOutlined className="mr-2 text-gray-600" />
              <span>
                Gender <br />
                <span className="font-semibold">{jessica.gender}</span>
              </span>
            </div>
            <div className="flex items-center mb-2">
              <PhoneOutlined className="mr-2 text-gray-600" />
              <span>
                Contact Info <br />
                <span className="font-semibold">{jessica.phone_number}</span>
              </span>
            </div>
            <div className="flex items-center mb-2">
              <AlertOutlined className="mr-2 text-gray-600" />
              <span>
                Emergency Contacts <br />
                <span className="font-semibold">
                  {jessica.emergency_contact}
                </span>
              </span>
            </div>
            <div className="flex items-center mb-2">
              <SafetyOutlined className="mr-2 text-gray-600" />
              <span>
                Insurance Provider <br />
                <span className="font-semibold">{jessica.insurance_type}</span>
              </span>
            </div>
          </div>

          <div className="mb-5 text-center">
            <button className="bg-[#01F0D0] text-black py-2 px-6 rounded-full font-semibold hover:bg-[#01d0b9] focus:outline-none focus:ring-2 focus:ring-[#01F0D0] focus:ring-opacity-50">
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
