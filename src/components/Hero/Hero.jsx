import React from "react";

import styles from "./Hero.module.css";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import EmailIcon from '@mui/icons-material/Email';
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <img
        src={getImageUrl("hero/Suman.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Suman Saurav</h1>
        <p className={styles.description}>
          I'm a passionate Software Developer with over 3.5 years of experience building dynamic,
          user-focused web applications using React, JavaScript, TypeScript, HTML, and CSS.
          I enjoy crafting clean, efficient, and scalable front-end solutions that bring great design
          and functionality together. Always open to connecting and exploring exciting opportunities
          — feel free to reach out!
        </p>
        <div className={styles.contactContent}>

          <a
            href="/Suman_Saurav_SDE_3Yr.pdf"
            download="Suman_Saurav_SDE_3Yr.pdf"
            className={styles.contactBtn}
          >
            <FileDownloadIcon />Resume
          </a>
          <a href="mailto:sumansaurav1121@outlook.com" className={styles.contactBtn}>
            <EmailIcon />Contact Me
          </a>
        </div>
      </div>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
