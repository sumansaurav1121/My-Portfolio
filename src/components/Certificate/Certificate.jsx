import React from "react";

import styles from "./Certificate.module.css";

import projects from "../../data/certificates.json";
import { CertificateCard } from "./CertificateCard";

export const Certification = () => {
  return (
    <section className={styles.container} id="certificate">
      <h2 className={styles.title}>Certificate</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <CertificateCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
