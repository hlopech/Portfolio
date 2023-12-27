import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import styles from "../src/styles/About.module.css";
import myPhoto from "../public/images/myPhoto.png";

import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export default function About() {
  return (
    <div className={styles.main}>
      <div id="about" className={styles.developer_info_container}>
        <div className={styles.photo_container}>
          <img id="img" className={styles.photo} src={myPhoto} />
        </div>
        <div className={styles.info_box1}>
          <span className={styles.name}>Nikita Starovoytov</span>
          <span className={styles.short_description}>
            Front-end developer
          </span>
          <div className={styles.contacts}>
            <span className={styles.contacts_field}>
              <EmailIcon fontSize="inhernit" />
              <a
                className={styles.info_link}
                href="mailto:nikitastarovojtov42@gmail.com"
              >
                {" "}
                nikitastarovojtov42@gmail.com
              </a>
            </span>
            <span className={styles.contacts_field}>
              <TelegramIcon fontSize="inhernit" />
              <a
                className={styles.info_link}
                href="https://web.telegram.org/k/"
              >
                {" "}
                @hl0pech
              </a>
            </span>
            <span className={styles.contacts_field}>
              <GitHubIcon fontSize="inhernit" />
              <a className={styles.info_link} href="https://github.com/hlopech">
                {" "}
                github.com/hlopech
              </a>
            </span>

            <span className={styles.contacts_field}>
              <LocationOnIcon fontSize="inhernit"/>
              <a
                className={styles.info_link}
                href="https://www.google.com/maps/place/%D0%9C%D0%B8%D0%BD%D1%81%D0%BA,+%D0%9C%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+%D0%91%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D1%8C/@53.8916752,27.5378813,12z/data=!4m6!3m5!1s0x46dbcfd35b1e6ad3:0xb61b853ddb570d9!8m2!3d53.9006011!4d27.558972!16zL20vMGRseGo?hl=ru&entry=ttu"
              >
                {" "}
                Republic of Belarus Minsk
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.info_box2}>
      <div className={styles.info_container}>
        <span className={styles.info_title}>Education</span>
        <span className={styles.info_description}>2nd year student</span>
        <span className={styles.info_description}>University: BSU MMF</span>
        <span className={styles.info_description}>
          Speciality : mathematics and information technology (mathematics and
          software for mobile devices)
        </span>
        <span className={styles.info_description}>English level: B1 Intermediate</span>

      </div>
      <div className={styles.info_container}>
        <span className={styles.info_title}>Work experience</span>
        <span className={styles.info_description}>Freelancing</span>
      </div>
      </div>
      <div className={styles.skills_container}>
        <span className={styles.info_title}>Skills</span>
        <div className={styles.box2}>
          <div className={styles.skils}>
            <div className={styles.skill}>
              <span className={styles.skil_name}> JavaScript(ES6)</span>
            </div>
            <div className={styles.skill}>
              <span className={styles.skil_name}>React</span>
            </div>
            <div className={styles.skill}>
              <span className={styles.skil_name}>Redux</span>
            </div>

            <div className={styles.skill}>
              <span className={styles.skil_name}> Html , css</span>
            </div>
            <div className={styles.skill}>
              <span className={styles.skil_name}>Figma</span>
            </div>
            <div className={styles.skill}>
              <span className={styles.skil_name}>Tailwind</span>
            </div>
            <div className={styles.skill}>
              <span className={styles.skil_name}>Json</span>
            </div>
            <div className={styles.skill}>
              <span className={styles.skil_name}>SQL</span>
            </div>
            <div className={styles.skill}>
              <span className={styles.skil_name}>Github</span>
            </div>
          </div>
          <div className={styles.animate_icons}>
            <div className={styles.container}>
              <img src="/images/icons/react.png" className={styles.circle} />
              <img src="/images/icons/tailwind.png" className={styles.circle} />
              <img src="/images/icons/redux.png" className={styles.circle} />
              <img src="/images/icons/js.png" className={styles.circle} />
              <img src="/images/icons/sql.png" className={styles.circle} />
              <img src="/images/icons/figma.png" className={styles.circle} />
              <img src="/images/icons/github.png" className={styles.circle} />
              <img src="/images/icons/json.png" className={styles.circle} />
              <img src="/images/icons/html.png" className={styles.circle} />



            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
