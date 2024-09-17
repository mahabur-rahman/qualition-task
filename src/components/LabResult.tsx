import { FaDownload } from "react-icons/fa";
import { labResults } from "../data/data";
import WidgetTitle from "./WidgetTitle";

const LabResult = () => {
  return (
    <>
      <section className="px-5 pt-8 mt-8 bg-white rounded-lg shadow-sm overflow-y-auto max-h-[500px] scrollbar-custom">
        <div>
          <WidgetTitle label={"Lab Results"} />
        </div>
        {labResults.map(({ id, label }) => (
          <div
            key={id}
            className="flex items-center justify-between p-4 sm:mb-[2px] hover:bg-[#F6F7F8]"
          >
            <div className="flex-1">
              <div className="text-[13px]">{label}</div>
            </div>
            <FaDownload className="ml-4 text-lg text-gray-600 cursor-pointer" />
          </div>
        ))}
      </section>
    </>
  );
};

export default LabResult;
