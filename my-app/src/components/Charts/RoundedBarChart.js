import React from 'react';
import { Bar } from 'react-chartjs-2';

const RoundedBarChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Monthly Earnings',
        data: [12, 19, 3, 5, 2, 24, 16, 30, 14, 5, 20, 18],
        backgroundColor: [
          'lightgray', 'lightgray', 'lightgray', 'lightgray', 'lightgray', 'lightgray', 'lightgray',
          'purple', // Purple for August
          'lightgray', 'lightgray', 'lightgray', 'lightgray',
        ],
        borderColor: 'transparent',
        borderWidth: 0,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div style={{ width: '400px', height: '400px' }}>
      <Bar
        data={data}
        options={options}
      />
    </div>
  );
};

export default RoundedBarChart;
