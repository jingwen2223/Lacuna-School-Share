import React from "react";
import styles from "./contact.module.css";

class Contact extends React.Component {
  render() {
    return (
      <footer id={styles.mainFooter}>
        <div className={styles.contact}>
          Contact: <span className={styles.email}>lorem@Lacuna.co</span>
        </div>
        <div className={styles.contact}>
          Location: <span className={styles.email}>250 Bedford Park</span>
        </div>
        <div className={styles.contact}>
          Number: <span className={styles.email}>(555)555-5555</span>
        </div>

        <p className={styles.copyright}>
          Lucuna &copy; 2020, All Rights Reserved
        </p>
      </footer>
    );
  }
}

export default Contact;
