import React from "react";

import styles from "./CertificateCard.module.css";
import { getImageUrl } from "../../utils";

export const CertificateCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.links}>
        <a href={source} target="_blank" rel="noopener noreferrer" className={styles.link}>
          Link
        </a>
      </div>
    </div>
  );
};
