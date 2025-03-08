import {useEffect, useState} from "react";
import axios from "axios"
import styles from  "./AdvantagesSection.module.css";

const AdvantagesSection = () => {
  const [totalUsers, setTotalUsers] = useState(null);

  useEffect(() => {
    const fetchTotalUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5174/users/count");
        setTotalUsers(response.data.count);
      } catch (error) {
      }
    };
    fetchTotalUsers();
  }, []);

  return (
    <section className={styles.advantagesSection}>
      <div className={styles.advantagesContent}>
        <div className={styles.infoBox}>
          <div className={styles.userImages}>
            <img src="/public/img/cust1.png" alt="User 1" />
            <img src="/public/img/cust2.png" alt="User 2" />
            <img src="/public/img/cust3.png" alt="User 3" />
          </div>
          <p className={styles.infoText}>
            Our <span className={styles.highlight}>happy</span> customers: {totalUsers ?? "Loading..."}
          </p>
        </div>
        <div className={styles.stats}>
          <button className={`${styles.btn} ${styles.habitDrive}`}>Habit drive</button>
          <button className={`${styles.btn} ${styles.viewStats}`}>View statistics</button>
          <p className={styles.personalRate}>Personal rate setting</p>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;