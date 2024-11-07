import React from "react";

const metrics = [
  { title: "Total Orders", value: "136", unit: "" },
  { title: "Total Sales", value: "32652", unit: "৳" },
  { title: "Dispatched Order", value: "32652", unit: "৳" },
  { title: "Avg. Basket Value", value: "370", unit: "৳" },
];
const Summary = () => {
  return (
    <div className="md:w-3/4 w-full grid md:grid-cols-4 grid-cols-2 gap-4 p-4  mx-auto">
      {metrics.map((metric) => (
        <div
          key={metric.title}
          className="w-full bg-gray-50 p-4 rounded-lg text-center flex flex-col items-start justify-center"
        >
          <h2 className="text-text_color md:text-2xl text-md">
            {metric.title}
          </h2>
          <p className="md:text-[42px] text-[30px] font-bold text-primary_orange">
            {metric.value}
            {metric.unit}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Summary;
