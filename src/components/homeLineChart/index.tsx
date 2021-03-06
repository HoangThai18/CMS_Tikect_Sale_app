import { useState } from "react";
import ReactApexCharts from "react-apexcharts";
import styles from './index.module.css';

import { AiOutlineCalendar } from "react-icons/ai";

const HomeLineChart = () => {
  const [profitDate, setProfitDate] = useState(new Date());
  const [showProfitDate, setShowProfitDate] = useState(false);
  const [chartData] = useState({
    series: [
      {
        name: "Doanh Thu ",
        data: [150, 178, 158, 240, 42, 210, 190],
      },
    ],
    options: {
      chart: {

      },
      dataLabels: {

      },
      stroke: {
      },
      xaxis: {
        labels: {
          show: true,
        }
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      yaxis: {
        labels: {
          formatter: function (val: number) {
            return val + ' tr';
          }
        }
      },
      colors: ['#FD9B45', '#546E7A', '#E91E63', '#FF9800']
    },

  });

  return (
    <div className={styles.lineChart}>
      <div className={styles.header}>
        <h3>Doanh thu</h3>
        <div className={styles.date}>
          <div className={styles.dateOutput}>
            <div>
              {profitDate.toDateString()}
            </div>
            <button onClick={() => setShowProfitDate(prevState => !prevState)}>
              <AiOutlineCalendar size={24} />
            </button>
          </div>
          <div className={styles.calendar}>
           
          </div>
        </div>
      </div>
      <ReactApexCharts
        options={chartData.options}
        series={chartData.series}
        type="area"
        height={350}
      />
      <div className={styles.total}>
        <p>
          Tổng doanh thu theo tuần
        </p>
        <div>
          <strong>525.145.000 </strong> <span>đồng</span>
        </div>
      </div>
    </div>
  );
};

export default HomeLineChart;
