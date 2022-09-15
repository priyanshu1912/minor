import React from "react";
import ReactApexChart from "react-apexcharts";

function Portfolio() {
  const series = [
    {
      name: "STOCK ABC",
      data: [
        8107.85, 8128.0, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3,
        8481.85, 8487.7, 8506.9, 8626.2, 8668.95, 8602.3, 8607.55, 8512.9,
        8496.25, 8600.65, 8881.1, 9340.85,
      ],
    },
  ];
  const basicoptions = {
    chart: {
      toolbar: {
        show: false,
      },
      id: "Chart",
      type: "area",
      height: 350,
      zoom: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 1,
    },

    // title: {
    //   text: "Fundamental Analysis of Stocks",
    //   align: "left",
    // },
    // subtitle: {
    //   text: "Price Movements",
    //   align: "left",
    // },
    labels: [
      "13 Nov 2017",
      "14 Nov 2017",
      "15 Nov 2017",
      "16 Nov 2017",
      "17 Nov 2017",
      "20 Nov 2017",
      "21 Nov 2017",
      "22 Nov 2017",
      "23 Nov 2017",
      "24 Nov 2017",
      "27 Nov 2017",
      "28 Nov 2017",
      "29 Nov 2017",
      "30 Nov 2017",
      "01 Dec 2017",
      "04 Dec 2017",
      "05 Dec 2017",
      "06 Dec 2017",
      "07 Dec 2017",
      "08 Dec 2017",
    ],
    xaxis: {
      type: "datetime",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: true,
      },
    },
    yaxis: {
      show: false,
      opposite: true,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: true,
      },
    },
    legend: {
      horizontalAlign: "left",
    },
    grid: {
      show: false,
    },
  };

  return (
    <div
      id="chart"
      style={{
        color: "#696969",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          fontWeight: "700",
          fontSize: "2vh",
          position: "absolute",
          top: "1vh",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          Portfolio Value
          <div style={{ fontSize: "4vh", lineHeight: "1", color: "#C0C0C0" }}>
            $112,555
          </div>
          {/* <div style={{ fontWeight: "500", fontSize: "1.8vh" }}>
            <div>Invested - </div>
            <div>Balance - </div>
            <div>Loss - </div>
          </div> */}
        </div>
        <select
          style={{
            background: "transparent",
            fontFamily: "Poppins",
            border: "none",
            color: "#696969",
          }}
        >
          <option>All</option>
        </select>
      </div>
      <ReactApexChart
        options={basicoptions}
        series={series}
        type="area"
        height={250}
      />
    </div>
  );
}

export default Portfolio;
