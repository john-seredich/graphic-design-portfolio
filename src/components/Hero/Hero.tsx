import styles from "./Hero.module.scss";
import svgImage from "../../assets/hero-main.svg";
const resumeLink =
  "https://docs.google.com/document/d/e/2PACX-1vT9pcz7A0CZed_idLFMJYZg61o5lu04YIPSPZZTzbkcA5BYvhn_fJZGHCaI-20YYQ/pub";

function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <p className={styles.hero__intro}>Hello 👋, I am</p>
        <h2>John Seredich</h2>
        <p className={styles.hero__desc}>
          I'm a Web Developer with experience in planning, developing,
          responsive, and accessible websites. Passionate about developing and
          testing web applications.
        </p>
        <div className={styles.hero__button_container}>
          <a href={resumeLink} target="_blank" rel="noreferrer">
            Resumé
          </a>
          <a href="#Contact">Contact</a>
        </div>
      </div>
      <img className={styles.hero__svg} src={svgImage} alt="" />
    </div>
  );
}

export default Hero;
