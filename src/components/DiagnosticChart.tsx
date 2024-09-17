import { useEffect, useRef } from "react";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from "chart.js";
import WidgetTitle from "./WidgetTitle";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { DiagnosticChartProps } from "../interfaces/dashboard.interface";
import DiagnosticReport from "./DiagnosticReport";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale
);

const DiagnosticChart = ({ userInfo }: DiagnosticChartProps) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  const actualUser = userInfo[3] || { diagnosis_history: [] };
  const diagnosisHistory = actualUser.diagnosis_history;

  const labels = diagnosisHistory.map(
    (entry) => `${entry.month}, ${entry.year}`
  );
  const systolicData = diagnosisHistory.map(
    (entry) => entry.blood_pressure.systolic.value
  );
  const diastolicData = diagnosisHistory.map(
    (entry) => entry.blood_pressure.diastolic.value
  );

  const latestReading = diagnosisHistory[0] || {
    blood_pressure: {
      systolic: { value: 0 },
      diastolic: { value: 0 },
    },
  };
  const latestSystolic = latestReading.blood_pressure.systolic.value;
  const latestDiastolic = latestReading.blood_pressure.diastolic.value;
  const systolicLevel = latestReading.blood_pressure.systolic.levels || "";
  const diastolicLevel = latestReading.blood_pressure.diastolic.levels || "";

  useEffect(() => {
    const ctx = chartRef.current?.getContext("2d");

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    if (ctx) {
      chartInstanceRef.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Systolic",
              data: systolicData,
              borderColor: "#E66FD2",
              backgroundColor: "rgba(230, 111, 210, 0.2)",
              fill: true,
              pointBackgroundColor: "#E66FD2",
              tension: 0.4,
            },
            {
              label: "Diastolic",
              data: diastolicData,
              borderColor: "#8C6FE6",
              backgroundColor: "rgba(140, 111, 230, 0.2)",
              fill: true,
              pointBackgroundColor: "#8C6FE6",
              tension: 0.4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              min: 60,
              max: 180,
              ticks: {
                stepSize: 20,
                color: "#6b7280",
              },
              grid: {
                color: "#e5e7eb",
              },
            },
            x: {
              ticks: {
                color: "#6b7280",
              },
              grid: {
                display: false,
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [labels, systolicData, diastolicData]);

  return (
    <>
      <section className="w-full p-6 mx-auto bg-[#F4F0FE] rounded-lg shadow-lg overflow-hidden">
        <WidgetTitle label="Lab Results" />
        <div className="flex justify-between">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <p className="text-lg font-medium">Blood Pressure</p>
              <select className="px-3 py-1 text-sm bg-transparent border border-gray-300 rounded">
                <option>Last 6 months</option>
                <option>Last Year</option>
              </select>
            </div>
            <div className="relative h-64">
              <canvas ref={chartRef}></canvas>
            </div>
          </div>
          <div className="p-4 ml-8 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <span className="inline-block w-4 h-4 mr-2 bg-[#E66FD2] rounded-full"></span>
                <span className="text-sm font-medium text-gray-700">
                  Systolic
                </span>
              </div>
            </div>
            <p className="text-[22px] font-semibold text-[#072635]">
              {latestSystolic}
            </p>
            <p className="flex items-center mb-4 text-sm font-medium text-gray-500">
              <span className="mr-1">
                <FaCaretUp />
              </span>
              {systolicLevel}
            </p>
            <hr className="mb-4 border-gray-300" />
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <span className="inline-block w-4 h-4 mr-2 bg-[#8C6FE6] rounded-full"></span>
                <span className="text-sm font-medium text-gray-700">
                  Diastolic
                </span>
              </div>
            </div>
            <p className="text-[22px] font-semibold text-[#072635]">
              {latestDiastolic}
            </p>
            <p className="flex items-center mb-4 text-sm font-medium text-gray-500">
              <span className="mr-1">
                <FaCaretDown />
              </span>
              {diastolicLevel}
            </p>
          </div>
        </div>
      </section>

      <DiagnosticReport  />
    </>
  );
};

export default DiagnosticChart;
