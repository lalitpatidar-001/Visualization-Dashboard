import React from 'react';
import { Radar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

const RadarChart = ({ data, aboutParams, params }) => {
  const { isSidebarOpen } = useSelector(state => state.sidebar);
  // Extracting labels (categories) and corresponding values from the data
  const categories = data?.map(item => item.label);
  const values = data?.map(item => item.data);

  // Chart.js data object
  const chartData = {
    labels: categories, // Categories as labels
    datasets: [
      {
        label: params,
        data: values, // Values to be plotted
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Background color for the data
        borderColor: 'rgba(75, 192, 192, 1)', // Border color for the data
        borderWidth: 1, // Border width for the data
      },
    ],
  };

  // Chart.js options object
  const chartOptions = {
    maintainAspectRatio: false,
    scales: {
      r: {
        suggestedMin: 0, // Minimum value for the radar chart
        suggestedMax: 100, // Maximum value for the radar chart
      },
    },
  };

  return (
    <div className='w-full  h-[45vh] flex flex-col items-center ' >
      <h2 className='text-white capitalize '>{aboutParams} of top 10 {params}</h2>
      <Radar data={chartData} options={chartOptions} />
    </div>
  );
};

export default RadarChart;
