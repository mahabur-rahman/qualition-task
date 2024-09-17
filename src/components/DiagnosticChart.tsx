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

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale
);

const DiagnosticChart = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    const ctx = chartRef.current?.getContext("2d");

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    if (ctx) {
      chartInstanceRef.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            "Oct, 2023",
            "Nov, 2023",
            "Dec, 2023",
            "Jan, 2024",
            "Feb, 2024",
            "Mar, 2024",
          ],
          datasets: [
            {
              label: "Systolic",
              data: [120, 140, 110, 135, 145, 160],
              borderColor: "#E66FD2", 
              backgroundColor: "rgba(230, 111, 210, 0.2)", 
              fill: true,
              pointBackgroundColor: "#E66FD2", 
              tension: 0.4,
            },
            {
              label: "Diastolic",
              data: [100, 60, 100, 85, 65, 80],
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
  }, []);

  return (
    <>
      <section className="w-full p-6 mx-auto bg-[#F4F0FE] rounded-lg shadow-lg">
        <WidgetTitle label={"Lab Results"} />
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
          <div className="p-4 ml-8 rounded-lg w-72">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <span className="inline-block w-4 h-4 mr-2 bg-[#E66FD2] rounded-full"></span>
                <span className="text-sm font-medium text-gray-700">
                  Systolic
                </span>
              </div>
            </div>
            <p className="text-[22px]  font-semibold text-[#072635]">160</p>
            <p className="flex items-center mb-4 text-sm font-medium text-gray-500">
              <span className="mr-1">
                <FaCaretUp />
              </span>
              Higher than Average
            </p>
            <hr className="mb-4 border-gray-300" />
            <div className="flex items-center justify-between mb-2 bg-[#F4F0FE]">
              <div className="flex items-center">
                <span className="inline-block w-4 h-4 mr-2 bg-[#8C6FE6] rounded-full"></span>
                <span className="text-sm font-medium text-gray-700">
                  Diastolic
                </span>
              </div>
            </div>
            <p className="text-[22px] font-semibold text-[#072635]">78</p>
            <p className="flex items-center text-sm font-medium text-gray-500">
              <span className="mr-1">
                <FaCaretDown />
              </span>
              Lower than Average
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default DiagnosticChart;
