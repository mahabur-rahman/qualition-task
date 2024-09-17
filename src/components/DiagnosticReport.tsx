import { FaCaretDown } from "react-icons/fa";
import heart from "../assets/heart.png";
import temp from "../assets/temperature.png";
import heartBP from "../assets/HeartBP.png";
import { DiagnosisItem } from "../interfaces/dashboard.interface";

interface UserInfo {
  [index: number]: {
    diagnosis_history: DiagnosisItem[];
  };
}

interface DiagnosticReportProps {
  userInfo: UserInfo;
}

const DiagnosticReport = ({ userInfo }: DiagnosticReportProps) => {
  const diagnosisHistory = userInfo[3]?.diagnosis_history || [];
  const firstItem = diagnosisHistory[0] || {};

  const heartRate = firstItem.heart_rate || {};
  const respiratoryRate = firstItem.respiratory_rate || {};
  const temperature = firstItem.temperature || {};

  const labReports = [
    {
      id: 1,
      title: "Respiratory Rate",
      value: `${respiratoryRate.value} bpm`,
      status: respiratoryRate.levels,
      bgColor: "#E0F3FA",
      image: heart,
    },
    {
      id: 2,
      title: "Temperature",
      value: `${temperature.value}°F`,
      status: temperature.levels,
      bgColor: "#FFE6E9",
      image: temp,
    },
    {
      id: 3,
      title: "Heart Rate",
      value: `${heartRate.value} bpm`,
      status: heartRate.levels,
      bgColor: "#FFE6F1",
      image: heartBP,
    },
  ];

  return (
    <section className="mt-5 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {labReports?.map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center p-4 rounded-lg shadow-md"
              style={{ backgroundColor: card.bgColor }}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-20 h-20 mb-4"
              />
              <h2 className="mb-1 font-semibold">{card.title}</h2>
              <p className="mb-1 text-2xl font-bold">{card.value}</p>
              <div className="flex items-center mt-2 text-[12px]">
                {card.id === 3 && (
                  <span>
                    <FaCaretDown />
                  </span>
                )}
                <p
                  className={`font-medium ${
                    card.id === 3 ? "text-[#072635]" : ""
                  }`}
                >
                  {card.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiagnosticReport;
