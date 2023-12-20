import styles from "../src/styles/Projects.module.css";
import { PROJECTS } from "./utils/projects";

export default function Projects() {
  return (
    <div id="projects" className={styles.projects_container}>
      <span className={styles.title}>My projects</span>
      <div className={styles.projects}>
        {PROJECTS.map((p) => (
          <div key={p.id} className={styles.project_container}>
            <div className={styles.project_img}>
              <img className={styles.project_photo} src={p.gif} alt="gif" />
            </div>

            <div className={styles.project_description_container}>
              <span className={styles.project_name}>{p.name}</span>
              <span className={styles.project_description}>
                {p.short_description}
              </span>
              <span className={styles.project_stack}>{p.stack}</span>
              <span>
                <a className={styles.git_link} href={p.link}>
                  {p.link}
                </a>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
