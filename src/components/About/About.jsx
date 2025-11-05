import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/Suman_Full.png")}
          alt="Suman Saurav"
          className={styles.aboutImage}
          onContextMenu={(e) => e.preventDefault()}  // disable right-click
          draggable="false"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Frontend icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I specialize in building scalable, responsive, and interactive web
                applications using React.js, TypeScript, and modern JavaScript frameworks.
                Focused on clean UI, performance optimization, and maintainable code.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Backend icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Experienced in building secure and efficient back-end systems with Python
                and Django, integrating RESTful APIs, and managing databases for seamless
                communication between client and server.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Cloud icon" />
            <div className={styles.aboutItemText}>
              <h3>Deployment & CI/CD</h3>
              <p>
                Skilled in deploying full-stack applications on AWS using CI/CD pipelines,
                handling version control with Git, and automating build and deployment
                workflows for faster delivery and reliability.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
