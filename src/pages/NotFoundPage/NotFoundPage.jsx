import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaWater } from "react-icons/fa";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={styles.content}
      >
        <FaWater className={styles.icon} />
        <h1 className={styles.heading}>404</h1>
        <p className={styles.textLarge}>
          Oops! You’re lost in the deep waters.
        </p>
        <p className={styles.textMedium}>Let’s get you back to shore.</p>
        <Link to="/">
          <button className={styles.button}>Return Home</button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
