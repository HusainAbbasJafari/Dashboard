import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChartType1 = () => {
  const chartRef = useRef(null);
  let pieChart = null;

  useEffect(() => {
    const data = [60, 25, 15]; // Example data values (percentages)

    if (chartRef.current) {
      if (pieChart) {
        pieChart.destroy(); // Destroy the previous chart instance
      }

      const ctx = chartRef.current.getContext('2d');

      const sortedData = [...data].sort((a, b) => b - a);

      const borderWidth = sortedData.map((dataValue, index) => {
        if (index === 0) return 6; // Thickest section
        if (index === 1) return 4; // Second thickest
        return 2; // Thinnest
      });

      pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Section 1', 'Section 2', 'Section 3'],
          datasets: [
            {
              data: data,
              backgroundColor: ['hotpink', 'violet', 'gray'],
              borderWidth: borderWidth,
              borderColor: 'white',
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }

    return () => {
      if (pieChart) {
        pieChart.destroy();
      }
    };
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <canvas ref={chartRef} />
    </div>
  );
};

export default PieChartType1 ;
