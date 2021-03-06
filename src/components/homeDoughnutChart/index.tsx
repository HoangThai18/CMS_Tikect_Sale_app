import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import styles from "./index.module.css";
import { AiOutlineCalendar } from "react-icons/ai";

ChartJS.register(ArcElement, Tooltip, Legend);

const dataFamilyPackage = {
  datasets: [
    {
      label: "Ticket Usage",
      data: [13568,56024 ],
      borderColor: ["rgba(79, 117, 255, 0.2)", "rgba(255, 138, 72, 0.2)"],
      backgroundColor: ["rgba(255, 138, 72, 1)","rgba(79, 117, 255, 1)" ],
      borderWidth: 1,
    },
  ],
};

const dataEventPackage = {
  datasets: [
    {
      label: "Ticket Usage",
      data: [28320, 30256],
      borderColor: ["rgba(255, 138, 72, 0.2)", "rgba(79, 117, 255, 0.2) "],
      backgroundColor: ["rgba(255, 138, 72, 1)","rgba(79, 117, 255, 1)" ],
      borderWidth: 1,
    },
  ],
};

export function HomeDoughnutChart() {
  const [profitDate, setProfitDate] = useState(new Date());
  const [showProfitDate, setShowProfitDate] = useState(false);
  return (
    <div className={styles.row}>
      <div>
        <div className={styles.date}>
          <div className={styles.dateOutput}>
            <div>
              {profitDate.toDateString()}
            </div>
            <button onClick={() => setShowProfitDate(prevState => !prevState)}>
              <AiOutlineCalendar size={24} />
            </button>
          </div>
         
        </div>
      </div>
      <div className={styles.col}>
        <h3 className={styles.colTitle}>Gói gia đình</h3>
        <Doughnut data={dataFamilyPackage} />
      </div>
      <div className={styles.col}>
        <h3 className={styles.colTitle}>Gói sự kiện</h3>
        <Doughnut data={dataEventPackage} />
      </div>
      <div className={styles.col}>
        <div className={styles.specs}>
          <span className={styles.badge}></span>
          <span className={styles.badgeText}>Vé đã sử dụng</span>
        </div>
        <div className={styles.specs}>
          <span className={styles.badge} style={{ backgroundColor: 'rgba(255, 138, 72, 1)' }}></span>
          <span className={styles.badgeText}>Vé chưa sử dụng</span>
        </div>
      </div>
    </div>
  );
}
