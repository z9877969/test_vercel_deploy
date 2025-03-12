import AdvantagesSection from "../../components/AdvantagesSection/AdvantagesSection.jsx";
import WelcomeSection from "../../components/WelcomeSection/WelcomeSection.jsx";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.HomePageWrapper}>
      <div className={styles.homePage}>
        <WelcomeSection />
        <AdvantagesSection />
      </div>
    </div>
  );
};

export default HomePage;
