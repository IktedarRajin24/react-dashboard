import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const OrdersByOutlet = () => {
  const data = {
    labels: [
      "Mirpur",
      "Moghbazar",
      "Banani",
      "Badda",
      "Muhammadpur",
      "Gulshan",
      "Wari",
      "Khilgao",
      "Uttara",
    ],
    datasets: [
      {
        label: "Total Orders",
        data: [120000, 95000, 70000, 65000, 60000, 55000, 120000, 32000, 25000],
        backgroundColor: "#F15B25",
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: { display: false },
      datalabels: {
        color: "white",
        anchor: "center",
        align: "center",
        formatter: function (value, context) {
          return context.chart.data.labels[context.dataIndex];
        },
        font: {
          size: 14,
          weight: "bold",
        },
      },
    },
    scales: {
      x: {
        title: { display: true, text: "Total Orders (৳)" },
        beginAtZero: true,
        grid: {
          display: false,
        },
        border: {
          display: true,
          width: 5,
        },
      },
      y: {
        title: { display: false },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="h-[650px] p-4 bg-gray-50 rounded-lg">
      <h2 className="text-black font-bold mb-2 text-2xl">
        Total orders by outlet
      </h2>
      <div className="overflow-y-auto">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default OrdersByOutlet;
