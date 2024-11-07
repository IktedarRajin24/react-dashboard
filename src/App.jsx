import "./App.css";
import CustomerTable from "./components/CustomerTable/CustomerTable";
import Dashboard from "./components/Dashboard/Dashboard";
import OrdersByOutlet from "./components/OrdersByOutlet/OrdersByOutlet";
import OrdersBySource from "./components/OrdersBySource/OrdersBySource";
import Summary from "./components/Summary/Summary";

function App() {
  return (
    <>
      <Dashboard />
      <Summary />
      <div className="p-6 grid md:gap-6 md:grid-cols-2 items-center justify-between">
        <OrdersBySource />
        <OrdersByOutlet />
      </div>
      <CustomerTable />
    </>
  );
}

export default App;
