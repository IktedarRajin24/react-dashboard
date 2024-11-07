// src/pages/Dashboard.js
import React, { useState } from "react";
// import BrandFilter from "../components/BrandFilter";
// import SummaryMetrics from "../components/SummaryMetrics";
// import OrdersBySourceChart from "../components/OrdersBySourceChart";
// import OrdersByOutletChart from "../components/OrdersByOutletChart";
// import CustomerTable from "../components/CustomerTable";

import Brands from "../Brands/Brands";

const Dashboard = () => {
  const [selectedBrand, setSelectedBrand] = useState(1);

  const metrics = [
    { title: "Total Orders", value: 1234 },
    { title: "Total Sales", value: "$12,340" },
    { title: "Dispatched Orders", value: 456 },
    { title: "Avg Basket Value", value: "$56.78" },
  ];

  const ordersBySourceData = [500, 300];
  const ordersByOutlet = { outlets: ["A", "B", "C"], orders: [100, 200, 150] };

  const customers = [
    {
      category: "New",
      orders: 300,
      numCustomers: 150,
      customerPercentage: 20,
      avgBasket: "$34.00",
      totalSales: "$10,200",
      totalOrders: 100,
      acv: "$102.00",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <Brands selectedBrand={selectedBrand} onSelectBrand={setSelectedBrand} />
      {/* <SummaryMetrics metrics={metrics} />
      <OrdersBySourceChart data={ordersBySourceData} month="August" outlet="All" />
      <OrdersByOutletChart outlets={ordersByOutlet.outlets} orders={ordersByOutlet.orders} />
      <CustomerTable customers={customers} /> */}
    </div>
  );
};

export default Dashboard;
