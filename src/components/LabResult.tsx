import { FaDownload } from "react-icons/fa";
import { labResults } from "../data/data";
import Title from "./Title";

const LabResult = () => {
  return (
    <section className="px-5 py-8 shadow-lg rounded-xl max-h-[400px] overflow-y-auto scrollbar-custom">
      <Title label={"Lab Results"} />
      {labResults.map(({ id, label }) => (
        <div
          key={id}
          className="flex items-center justify-between p-4 mb-2 hover:bg-[#F6F7F8]"
        >
          <div className="flex-1">
            <div className="text-[13px]">{label}</div>
          </div>
          <FaDownload className="ml-4 text-lg text-gray-600 cursor-pointer" />
        </div>
      ))}
    </section>
  );
};

export default LabResult;
