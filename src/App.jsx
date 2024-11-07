import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import OrdersBySource from "./components/OrdersBySource/OrdersBySource";
import Summary from "./components/Summary/Summary";

function App() {
  return (
    <>
      <Dashboard />
      <Summary />
      <div>
        <OrdersBySource />
      </div>
    </>
  );
}

export default App;
