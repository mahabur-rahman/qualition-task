import { FaFileMedical } from "react-icons/fa"; 
import { labResults } from "../data/data";


const LabResult = () => {
  return (
    <>
      <section className="px-5 py-8 shadow-lg rounded-xl max-h-[400px] overflow-y-auto scrollbar-custom">
        <h2 className="mb-4 text-xl font-semibold">Lab Results</h2>
        {labResults.map(({ id, test, result, date }) => (
          <div
            key={id}
            className="flex items-center justify-between p-4 mb-2 border-b border-gray-200"
          >
            <div className="flex-1">
              <div className="text-lg font-medium">{test}</div>
              <div className="text-gray-600">{result}</div>
              <div className="text-sm text-gray-400">{date}</div>
            </div>
            <FaFileMedical className="ml-4 text-2xl text-blue-500" />
          </div>
        ))}
      </section>
    </>
  );
};

export default LabResult;
