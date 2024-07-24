import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const data = {
  labels: labels,
  datasets: [
    {
      label: "User Activity",
      backgroundColor: "rgb(255, 99)",
      borderColor: "rgb(255, 99, 132)",
      borderWidth: 2,
      data: [0, 10, 5, 7, 8, 15, 76, 30, 12, 89, 76, 34],
    },
  ],
};

const LineChart = () => {
  return (
    <div className="bg-white border border-secondary">
      <Line data={data}></Line>
    </div>
  );
};

export default LineChart;
