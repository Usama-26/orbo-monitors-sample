import dynamic from "next/dynamic";
import React, { useState } from "react";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function RelayChart() {
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
              colors: ["#71717a"],
              gradient: { opacityFrom: 0.5, opacityTo: 0, shade: "dark " },
            },
            grid: { show: false },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: "smooth",
              width: 1,
              colors: ["#71717a"],
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
              name: "Relay Speed",
              data: [5.2, 6, 5.2, 6, 5.5, 6, 5.5, 6, 5.2, 6],
            },
          ]}
          type="area"
          height={70}
        />
      </div>
    </div>
  );
}
