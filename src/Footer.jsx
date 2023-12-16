import CopyrightIcon from "@mui/icons-material/Copyright";
import styles from "../src/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <span className={styles.footer_copy}>
          <CopyrightIcon fontSize="inhernit"/>
          {new Date().getFullYear()}
        </span>
        <span className={styles.footerText}> Nikita Starovoytov </span>
      </div>
    </footer>
  );
}
