import Dasboard from "./dashboard/Dashboard";
import { Sidebar } from "./dashboard/Sidebar";
import Page from "./page/page";
import AppRouter from "./routes/AppRouter";
import { Routes, Route } from "react-router-dom";

function App() {
  return <AppRouter />;
}

export default App;
