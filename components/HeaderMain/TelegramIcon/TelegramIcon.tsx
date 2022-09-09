import React from "react";
import styles from "./index.module.scss";

const TelegramIcon = () => {
  return (
    <div className={styles.iconContainer}>
      <svg
        className={styles.svgIcon}
        width="32"
        height="20"
        viewBox="0 0 32 27"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M29.84.177L1.494 11.11c-1.935.777-1.923 1.856-.353 2.337l7.07 2.206 2.705 8.294c.329.907.166 1.267 1.12 1.267.735 0 1.061-.335 1.471-.735.26-.255 1.808-1.76 3.535-3.438l7.353 5.433c1.353.746 2.33.36 2.667-1.257L31.89 2.47c.494-1.981-.756-2.88-2.05-2.293zM9.32 15.147L25.255 5.092c.795-.482 1.525-.223.926.309l-13.644 12.31-.532 5.667-2.685-8.233z"></path>
      </svg>
    </div>
  );
};

export default TelegramIcon;
