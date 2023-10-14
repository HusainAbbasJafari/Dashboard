import React from 'react';
import './Overview.css';

const PieChartType2 = () => {
  const totalCustomers = 100;
  const newCustomers = 65;

  const newCustomersPercentage = (newCustomers / totalCustomers) * 100;
  const remainingPercentage = 100 - newCustomersPercentage;

  const snakeColors = ['hotpink', 'violet', 'gray'];
  const snakeWidths = [20, 10, 10]; // Adjust the widths as needed

  let offset = 0;

  return (
    <div className="bg-white flex flex-col justify-between items-center py-5 md:py-10 pb-22 md:pb-44 lg:pb-64 rounded md:w-1/2 lg:w-1/4 mr-6 ml-6 md:ml-2 md:mr-2 mt-2 md:mt-0 px-0 md:px-5 shadow-md">

        <div class="flex flex-col items-start justify-center">
<p class="text-4xl md:text-4xl font-bold text-left text-gray-700 dark:text-black-100">
                      Customers
                      
                    </p>
                    <p class=" text-black text-md dark:text-gray-400">
                      Customers that buy products
                    </p>
                    
        </div>
     <div>
      <svg width="200" height="200">
        {snakeColors.map((color, index) => {
          const arcLength = (remainingPercentage / 100) * 360;
          const path = (
            <path
              key={index}
              fill="transparent"
              stroke={color}
              strokeWidth={snakeWidths[index]}
              d={describeArc(100, 100, 90, offset, offset + arcLength)}
            />
          );
          offset += arcLength;
          return path;
        })}
        <text x="50%" y="50%" textAnchor="middle" fontSize="32" fontWeight="600" fill="black">
          {newCustomersPercentage.toFixed(2)}%
         

        </text>
        <text x="48%" y="60%" textAnchor="middle" fontSize="10" fill="black">
          Total New Customers
        </text>
        
      </svg>
      </div>
    </div>
  );
};

// Function to describe an arc
function describeArc(x, y, radius, startAngle, endAngle) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const arcSweep = endAngle - startAngle <= 180 ? '0' : '1';
  const d = [
    'M', start.x, start.y,
    'A', radius, radius, 0, arcSweep, 0, end.x, end.y,
  ].join(' ');
  return d;
}

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = (angleInDegrees - 90) * (Math.PI / 180);
  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians)),
  };
}

export default PieChartType2;
