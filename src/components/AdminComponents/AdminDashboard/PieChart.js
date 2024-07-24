import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";

const labels = ["Male", "Female"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Palmfit Gender Distribution",
      backgroundColor: ["rgba(54, 162, 235, 0.6)", "rgba(255, 99, 132, 0.6)"],
      borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
      borderWidth: 2,
      data: [98, 10],
    },
  ],
};

const PieChart = () => {
  return (
    <div className="bg-white border border-secondary">
      <Pie data={data}></Pie>
    </div>
  );
};

export default PieChart;
