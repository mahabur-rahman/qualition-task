import React, { useEffect, useRef } from "react";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from "chart.js";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale
);

const DiagnosticChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Create a new chart instance
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
            borderColor: "#ec4899",
            backgroundColor: "rgba(236, 72, 153, 0.2)",
            fill: true,
            pointBackgroundColor: "#ec4899",
            tension: 0.4,
          },
          {
            label: "Diastolic",
            data: [80, 85, 75, 70, 76, 78],
            borderColor: "#6366f1",
            backgroundColor: "rgba(99, 102, 241, 0.2)",
            fill: true,
            pointBackgroundColor: "#6366f1",
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

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-lg shadow-lg">
        <h3 className="mb-4 text-2xl font-semibold">Diagnosis History</h3>
        <div className="flex justify-between">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <p className="text-lg font-medium">Blood Pressure</p>
              <select className="px-3 py-1 text-sm bg-white border border-gray-300 rounded">
                <option>Last 6 months</option>
                <option>Last Year</option>
              </select>
            </div>
            <div className="relative h-64">
              <canvas ref={chartRef}></canvas>
            </div>
          </div>
          <div className="p-4 ml-8 rounded-lg bg-purple-50 w-72">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <span className="inline-block w-4 h-4 mr-2 bg-pink-500 rounded-full"></span>
                <span className="text-sm font-medium text-gray-700">
                  Systolic
                </span>
              </div>
              <p className="text-3xl font-semibold text-pink-500">160</p>
            </div>
            <p className="mb-4 text-sm font-medium text-gray-500">
              Higher than Average
            </p>

            <hr className="mb-4 border-gray-300" />

            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <span className="inline-block w-4 h-4 mr-2 bg-indigo-500 rounded-full"></span>
                <span className="text-sm font-medium text-gray-700">
                  Diastolic
                </span>
              </div>
              <p className="text-3xl font-semibold text-indigo-500">78</p>
            </div>
            <p className="text-sm font-medium text-gray-500">
              Lower than Average
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default DiagnosticChart;
