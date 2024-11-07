import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import OrdersByOutlet from "./components/OrdersByOutlet/OrdersByOutlet";
import OrdersBySource from "./components/OrdersBySource/OrdersBySource";
import Summary from "./components/Summary/Summary";

function App() {
  return (
    <>
      <Dashboard />
      <Summary />
      <div className="p-6 grid gap-6 md:grid-cols-2 items-center justify-between">
        <OrdersBySource />
        <OrdersByOutlet />
      </div>
    </>
  );
}

export default App;
