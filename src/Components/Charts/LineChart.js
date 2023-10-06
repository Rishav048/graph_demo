import React, { useRef, useEffect } from "react";
import {
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from "chart.js";
import { Chart } from "chart.js/auto";
Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale
);

function LineChart({ data }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Ensure that the previous chart instance is destroyed
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      // Create the double curved line chart
      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: data.labels,
          datasets: [
            {
              label: "Total Products",
              data: data.dataset1,
              borderColor: "rgba(70, 0, 255, 1)",
              borderColor: "#5A4898",
              tension: 0.5,
              borderWidth: 3,
              pointBorderColor: "#5A4898",
              pointBackgroundColor: "#5A4898",
              pointBorderWidth: 0,
              pointRadius: 0,
              pointHoverBackgroundColor: "rgba(0, 0, 0, 0)",
              pointHoverBorderColor: "#222",
              pointHoverBorderWidth: 3,
              pointHoverRadius: 7,
              fill: false,
            },
           
          ],
        },
        options: {
         
          maintainAspectRatio: false,
          scales: {
            x: {
              beginAtZero: true,
              grid: {
                color: "#eaeaea",
              },
              ticks: {
                callback: function (value, index, values) {
                  return this.getLabelForValue(value).split(" ")[0];
                },
                color: "#222222",
                padding: 5,
                font: {
                  
                  size: 12,
                },
              },
              border: {
                color: "#d6cfcc",
              },
            },

            y: {
              beginAtZero: true,
              grid: {
                color: "#eaeaea",
              },
              ticks: {
                callback: function (value, index, values) {
                  if (value >= 1000) {
                    return value / 1000 + "k";
                  } else {
                    return value;
                  }
                },
                minRotation: 20,
                padding: 10,
                color: "#222222",
                font: {
                 
                  size: 12,
                },
              },
              border: {
                color: "#d6cfcc",
              },
            },
          },
          interaction: {
            intersect: false,
            mode: "index",
          },
          plugins: {
            tooltip: {
              titleFont: {
                size: 12,
                style: "normal",
                weight: 400,
              },
              titlePaddingBottom: 5,
              padding: 10,
              boxPadding: 5,
              cornerRadius: 10,
              displayColors: true,
              bodyFont: {
                size: 16,
                weight: 400,
               
              },
            },
            legend: {
              display: false,
              labels: {
                // This more specific font property overrides the global property
                font: {
                  size: 12,
                },
              },
            },
          },
        },
      });
    }
  }, [data]);
  

  return <canvas ref={chartRef} />;
}

export default LineChart;
