import dynamic from "next/dynamic";
import React, { useState } from "react";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function TokensChart() {
  return (
    <div>
      <div id="chart" className="-mt-10 translate-y-8">
        <ApexChart
          options={{
            chart: {
              toolbar: { show: false },
              type: "area",

              zoom: {
                enabled: false,
              },
            },
            fill: {
              colors: ["#2dd4bf"],
              gradient: { opacityFrom: 0.5, opacityTo: 0, shade: "dark" },
            },
            grid: { show: false },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: "smooth",
              width: 1,
              colors: ["#2dd4bf"],
            },
            labels: [0, 1, 2, 3, 4, 6, 7, 8, 9],
            xaxis: {
              labels: { show: false },
              axisBorder: { show: false },
              axisTicks: { show: false },
            },

            yaxis: {
              show: false,
              max: 6,
            },

            legend: {
              horizontalAlign: "left",
            },
          }}
          series={[
            {
              name: "Token Test",
              data: [5.6, 6, 5.6, 6, 5.8, 6, 5.9, 6, 5.6, 6],
            },
          ]}
          type="area"
          height={70}
        />
      </div>
    </div>
  );
}
