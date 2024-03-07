import React from 'react';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

const PieChart = ({ data, aboutParams, params }) => {
  const { isSidebarOpen } = useSelector(state => state.sidebar);
  // Extracting labels (countries) and corresponding values from the data
  const countries = data?.map(item => item.label);
  const values = data?.map(item => item.data);

  // Chart.js data object
  const chartData = {
    labels: countries, // Countries as labels
    datasets: [
      {
        data: values, // Values to be plotted
        backgroundColor: [ // Define background colors for each segment
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(0, 128, 0, 0.6)',    // Green
          'rgba(255, 0, 255, 0.6)',  // Purple
          'rgba(0, 255, 255, 0.6)',  // Cyan
          'rgba(128, 0, 128, 0.6)'   // Violet
          // Add more colors if needed
        ],
        borderWidth: 1, // Border width of segments
      },
    ],
  };

  // Chart.js options object
  const chartOptions = {
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: 'right', // Position of the legend
    },
  };

  return (
    <div className='w-full h-[45vh]    flex flex-col items-center ' >
      <h2 className='text-white capitalize '>{aboutParams} of top 10 {params}</h2>
      <Pie data={chartData} options={chartOptions} />
    </div>
  );
};

export default PieChart;
