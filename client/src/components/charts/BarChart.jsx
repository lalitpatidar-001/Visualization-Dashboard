import { Chart, registerables } from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
Chart.register(...registerables);

const BarChart = ({ data, label }) => {
  const {isSidebarOpen} = useSelector(state=>state.sidebar);
   
  return (
    <div  className={` h-[40vh] w-  bg-[#052560]  rounded ${isSidebarOpen?"w-full":"lg:w-[calc(100vw-172px)]"}`}>
      <Bar
        data={{
          labels: data?.map(item => {
            if (item.label === "") {
              return "Others";
            }
            return item.label;
          }),
          datasets: [
            {
              label: label,
              data: data?.map(item => item.data),
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1
            }
          ]
        }}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                title:{
             
                },
                ticks: {
                  beginAtZero: true,
                  

                }
              }
            ],
            xAxes: [
              {
                ticks: {
                color: 'red',
                }
              }
            ]
          }
        }}
      />
    </div>
  );
};

export default BarChart;
