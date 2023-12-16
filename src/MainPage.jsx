import styles from "../src/styles/MainPage.module.css";

import Header from "./Header";
import About from "./About";
import Footer from "./Footer";
import Projects from "./Projects";
export default function MainPage() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main_container}>
        <About />
      <Projects/>
      </main>



     <Footer/>
    </div>
  );
}
