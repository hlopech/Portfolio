import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-scroll";
import styles from "../src/styles/Header.module.css";

export default function Footer() {
  return (
    <header className={styles.header}>
      <div className={styles.nav}>
        <Link
          to="projects"
          smooth={true}
          duration={1000}
          offset={-100}
          className={styles.nav_item}
        >
          <a href="" className={styles.nav_item_link}>
            Projects
          </a>
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={1000}
          offset={-200}
          className={styles.nav_item}
        >
          <a href="" className={styles.nav_item_link}>
            About me
          </a>
        </Link>
        <div className={styles.info_container}>
          <span className={styles.nav_item}>
            <a
              href="mailto:nikitastarovojtov42@gmail.com"
              className={styles.info_link}
            >
              <EmailIcon fontSize="medium" />
            </a>
          </span>
          <span className={styles.nav_item}>
            <a href="https://web.telegram.org/k/" className={styles.info_link}>
              <TelegramIcon fontSize="medium" />
            </a>
          </span>
          <span className={styles.nav_item}>
            <a href="https://github.com/hlopech" className={styles.info_link}>
              <GitHubIcon fontSize="medium" />
            </a>
          </span>
        </div>
      </div>
    </header>
  );
}
