import {useEffect, useState} from "react";
import axios from "axios"
import s from  "./AdvantagesSection.module.css";

const AdvantagesSection = () => {
  const [totalUsers, setTotalUsers] = useState(null);

  useEffect(() => {
    const fetchTotalUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5173/users/count");
        setTotalUsers(response.data.count);
      } catch (error) {
        console.error("Error fetching total users:", error);
      }
    };
    fetchTotalUsers();
  }, []);

  return (
    <section className={s.advantagesSection}>
      <div className={s.advantagesContent}>
        <div className={s.infoBox}>
          <div className={s.userImages}>
            <img src="/img/cust1.png" alt="User 1" />
            <img src="/img/cust2.png" alt="User 2" />
            <img src="/img/cust3.png" alt="User 3" />
          </div>
          <p className={s.infoText}>
            Our <span className={s.highlight}>happy</span> customers: {totalUsers ?? "Loading..."}
          </p>
        </div>
        <div className={s.stats}>
          <button className={`${s.btn} ${s.habitDrive}`}><div className={s.circle}></div>Habit drive</button>
          <button className={`${s.btn} ${s.viewStats}`}>View statistics</button>
          <p className={s.personalRate}>Personal rate setting</p>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;