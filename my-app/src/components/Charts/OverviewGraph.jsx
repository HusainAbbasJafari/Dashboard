import React, { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import Dropown from '../Dropown';

const OverviewGraph = () => {
  const chartRef = useRef(null);
  const [chart, setChart] = useState(null);

  const chartData = {
    labels: [
      'January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December',
    ],
    datasets: [
      {
        label: 'Earnings',
        data: [2500, 3200, 2800, 3500, 3800, 4200, 3800, 4100, 4600, 5000, 5400, 5800],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: [
          'rgba(211, 211, 211, 0.8)', // January
          'rgba(211, 211, 211, 0.8)', // February
          'rgba(211, 211, 211, 0.8)', // March
          'rgba(211, 211, 211, 0.8)', // April
          'rgba(211, 211, 211, 0.8)', // May
          'rgba(211, 211, 211, 0.8)', // June
          'rgba(211, 211, 211, 0.8)', // July
          'rgba(128, 0, 128, 0.8)', // August (Purple)
          'rgba(211, 211, 211, 0.8)', // September
          'rgba(211, 211, 211, 0.8)', // October
          'rgba(211, 211, 211, 0.8)', // November
          'rgba(211, 211, 211, 0.8)', // December
        ],
      },
    ],
  };

  useEffect(() => {
    if (chart) {
      chart.destroy();
    }

    const newChart = new Chart(chartRef.current, {
      type: 'bar',
      data: chartData,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltips: {
            enabled: true,
          },
        },
        radius: 20, // Control the curve of the bars
      },
    });

    setChart(newChart);

    return () => {
      newChart.destroy();
    };
  }, []);

  return (
    <div className="bg-white p-2 md:p-4 rounded h-full md:h-full mx-6 md:mx-3  md:w-3/4 mt-5 md:mt-0 shadow-md">
<div className="flex flex row items-center justify-between p-4">
<div class="flex flex-col items-start justify-center">
<p class=" text-1xl md:text-2xl lg:text-4xl font-bold text-left text-gray-700 dark:text-black-100">
                      Overview
                      
                    </p>
                    <p class=" text-black text-sm md:text-md dark:text-gray-400">
                      Monthly Earning
                    </p>
                    
                    </div>
                      <Dropown/>

</div>
       

      <canvas ref={chartRef} />
    </div>
  );
};

export default OverviewGraph;
