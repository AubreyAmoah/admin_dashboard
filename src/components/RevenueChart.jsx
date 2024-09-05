// src/components/RevenueChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const RevenueChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Revenue',
        data: [3000, 2500, 4000, 3200, 2900, 4678, 5300, 5800, 6000, 6900, 6200, 7500],
        backgroundColor: '#7F9CF5',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Revenue Rate',
      },
    },
  };

  return (
    <div className="bg-purple-100 p-4 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">Revenue Rate</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default RevenueChart;
