import React from "react";

const metrics = [
  { title: "Total Orders", value: "136", unit: "" },
  { title: "Total Sales", value: "32652", unit: "৳" },
  { title: "Dispatched Order", value: "32652", unit: "৳" },
  { title: "Avg. Basket Value", value: "370", unit: "৳" },
];
const Summary = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {metrics.map((metric) => (
        <div
          key={metric.title}
          className="w-3/4 mx-auto bg-gray-50 p-4 rounded-lg text-center flex flex-col items-start justify-center"
        >
          <h2 className="text-text_color text-2xl">{metric.title}</h2>
          <p className="text-[42px] font-bold text-primary_orange">
            {metric.value}
            {metric.unit}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Summary;
