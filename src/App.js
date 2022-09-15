import logo from "./logo.svg";
import "./App.css";
import Chart from "./Chart";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "black",
        padding: "1vh 1vw",
        boxSizing: "border-box",
        display: "flex",
        gap: "1vw",
      }}
    >
      <div
        style={{
          width: "75%",
          height: "90vh",
        }}
      >
        <Navbar />
        <Chart />
      </div>
      <Sidebar />
    </div>
  );
}

export default App;
