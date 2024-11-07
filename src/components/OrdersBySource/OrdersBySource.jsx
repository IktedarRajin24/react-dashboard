import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const OrdersBySource = () => {
  const data = {
    labels: [1, 5, 10, 15, 20, 25],
    datasets: [
      {
        label: "Web",
        data: [50, 100, 200, 150, 300, 250],
        borderColor: "#00A6FF",
        backgroundColor: "#00A6FF",
        tension: 0.4,
        pointRadius: 0,
      },
      {
        label: "Mobile",
        data: [30, 90, 180, 130, 290, 220],
        borderColor: "#FF6B6B",
        backgroundColor: "#FF6B6B",
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          usePointStyle: true,
          pointStyle: "rectRounded",
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="w-1/2 p-4 bg-gray-50 rounded-lg">
      <h2 className="text-black font-bold mb-2 text-2xl">
        Total orders by source
      </h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default OrdersBySource;
