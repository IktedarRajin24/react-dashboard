import React from "react";

const tableData = {
  newCustomers: {
    category: "New",
    orders: 143,
    customers: 125,
    percentCustomers: 10,
    avgBasket: 89863,
    totalSales: 370556,
    percentOrders: 100,
    ACV: 370,
  },
  returningCustomers: {
    category: "Returning",
    orders: 23,
    customers: 20,
    percentCustomers: 5,
    avgBasket: 5663,
    totalSales: 34870,
    percentOrders: 93,
    ACV: 370,
  },
  total: {
    orders: 166,
    customers: 155,
    percentCustomers: 15,
    avgBasket: 15660,
    percentSales: 56970,
    totalSales: 134870,
    percentOrders: 100,
    ACV: 370,
  },
};

const CustomerTable = () => {
  const tableRows = Object.values(tableData).map((customerType, index) => (
    <tr key={index} className="hover:bg-orange-200">
      <td className="border-b px-4 py-2 text-primary_orange font-semibold">
        {customerType.category || "Total"}
      </td>
      <td className="border-b px-4 py-2 text-left font-semibold">
        {customerType.orders}
      </td>
      <td className="border-b px-4 py-2 text-left font-semibold">
        {customerType.customers}
      </td>
      <td className="border-b px-4 py-2 text-left font-semibold">
        {customerType.percentCustomers}%
      </td>
      <td className="border-b px-4 py-2 text-left font-semibold">
        {customerType.avgBasket}৳
      </td>
      <td className="border-b px-4 py-2 text-left font-semibold">
        {customerType.totalSales}৳
      </td>
      <td className="border-b px-4 py-2 text-left font-semibold">
        {customerType.percentOrders}%
      </td>
      <td className="border-b px-4 py-2 text-left font-semibold">
        {customerType.ACV}৳
      </td>
    </tr>
  ));

  return (
    <div className="bg-white shadow-md rounded px-4 py-6">
      <h2 className="text-black font-bold mb-2 text-2xl">
        New Customers X Returning Customers
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-table_header">
              <th className="border-b px-4 py-2 text-left font-semibold">
                Category
              </th>
              <th className="border-b px-4 py-2 text-left font-semibold">
                # of Orders
              </th>
              <th className="border-b px-4 py-2 text-left font-semibold">
                # of Customers
              </th>
              <th className="border-b px-4 py-2 text-left font-semibold">
                % of Customers
              </th>
              <th className="border-b px-4 py-2 text-left font-semibold">
                Avg. Basket
              </th>
              <th className="border-b px-4 py-2 text-left font-semibold">
                Total Sales
              </th>
              <th className="border-b px-4 py-2 text-left font-semibold">
                % Total Orders
              </th>
              <th className="border-b px-4 py-2 text-left font-semibold">
                ACV
              </th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerTable;
