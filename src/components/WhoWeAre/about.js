import React, { Component } from "react";
import styles from "./about.module.css";

class About extends Component {
  render() {
    return (
      <div id={styles.who}>
        <div className={styles.whoImg}></div>
        <div className={`${styles.whoText} ${styles.bgDark} ${styles.p2}`}>
          <h2 className={styles.mHeading}>
            <span className={styles.textPrimary}>Who</span> We Are
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            minima vel maxime quos? Nostrum beatae exercitationem omnis, vitae
            explicabo autem facere ullam cupiditate eos. Vel id distinctio
            deserunt debitis doloribus.
          </p>
          <h3>Our Mission</h3>
          <ul className={styles.list}>
            <li>Give back supplies to those in need</li>
            <li>Fast delivery guarantee</li>
            <li>Educate your world</li>
            <li>Bring you the freshest school supplies in the world</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default About;
