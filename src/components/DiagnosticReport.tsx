import { labReports } from "../data/data";
import { FaCaretDown } from "react-icons/fa";

const DiagnosticReport = () => {
  return (
    <>
      <section className="mt-5 overflow-hidden">
        <div className="container px-4 mx-auto">
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
    </>
  );
};

export default DiagnosticReport;
