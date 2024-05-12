import React from "react";
import Sidebar from "../components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div className="d-flex">
      <div className="w-auto">
        <Sidebar />
      </div>
      <div className="col">
        <Navbar />
      </div>
    </div>
  );
}
