import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement);

function Chart() {
  const data = {
    labels: [9, 11, 12, 13, 15, 17, 1, 25, 27],
    datasets: [
      {
        labels: "money",
        data: ["5k", "10k", "15k", "20k", "25k"],
        backgroundColor: ["linear-gradient(180deg, #623CE7 0%, #9C3CE7 100%);"],
        borderWidth: 0.5,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    legend: {
      labels: {
        fontSize: 26,
      },
    },
  };

  return (
    <div>
      <Bar data={data} height={200} options={options} />
    </div>
  );
}

export default Chart;
