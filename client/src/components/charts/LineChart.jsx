import React from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

const LineChart = ({ data, aboutParams, params }) => {
  const { isSidebarOpen } = useSelector(state => state.sidebar);
  const years = data?.map(item => {
    if (item.label === "") {
      return "others"
    }
    return item.label
  });
  const values = data?.map(item => item.data);

  // Chart.js data object
  const chartData = {
    labels: years, // Years as labels
    datasets: [
      {
        label: `${aboutParams} by ${params}`, // Customize label based on what you want to display
        data: values, // Values to be plotted
        fill: true, // Disable fill
        borderColor: 'rgba(75, 192, 192, 1)', // Line color
        tension: 0.4 // Adjust line tension for smooth curves
      }
    ]
  };

  // Chart.js options object
  const chartOptions = {
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: params // X-axis title
        }
      },
      y: {
        title: {
          display: true,
          text: aboutParams // Y-axis title
        }
      }
    }
  };



  return (
    <div className={`${isSidebarOpen ? "w-full" : "lg:w-[calc(100vw-172px)]"} h-[45vh] boder-white bg-[#052560] border`}>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default LineChart;
