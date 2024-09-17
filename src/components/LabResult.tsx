import { FaDownload } from "react-icons/fa";
import WidgetTitle from "./WidgetTitle";
import { UserProfileData } from "../interfaces/dashboard.interface";

interface LabResultProps {
  userInfo: UserProfileData[];
}

const LabResult = ({ userInfo }: LabResultProps) => {
  const actualUser = userInfo[3];

  return (
    <section className="px-5 pt-6 mt-5 bg-white rounded-lg shadow-sm overflow-y-auto max-h-[500px] scrollbar-custom overflow-hidden">
      <div>
        <WidgetTitle label={"Lab Results"} />
      </div>
      {actualUser.lab_results && actualUser.lab_results.length > 0 ? (
        actualUser.lab_results.map((result, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 hover:bg-[#F6F7F8]"
          >
            <div className="flex-1">
              <div className="text-[13px]">{result}</div>
            </div>
            <FaDownload className="ml-4 text-gray-600 cursor-pointer text-md" />
          </div>
        ))
      ) : (
        <div className="p-4 text-gray-600">No lab results available.</div>
      )}
    </section>
  );
};

export default LabResult;
