import Link from "next/link";
import React from "react";
import { ExtLinks } from "../../../const";
import styles from "./index.module.scss";

const SocialLinks = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.vkLinkContainer}>
        <Link href={ExtLinks.Vk}>
          <a>
            <svg
              className={styles.svgIcon}
              width="30"
              height="20"
              viewBox="0 0 32 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.005 1.527c-.219-1.336 6.241-.509 6.241-.509s3.75 9.417 5.228 9.417c1.478 0 .766-7.985.766-7.985s-1.833-.478-1.833-1.21C10.407.51 12.24 0 12.24 0h5.393c.646 0 .903 1.05.903 1.75v8.558h1.478s1.316-2.115 2.354-4.263c1.038-2.149 2.3-5.027 2.3-5.027h6.267s1.15.032 1.013.986c-.186 1.299-4.356 7.466-5.228 9.576-.657 1.59 2.76 3.744 4.215 6.045.945 1.493 1.013 3.245 1.013 3.245h-7.445l-3.723-4.327s-.766-.318-1.368.127c-.603.446-.63 1.337-.63 1.337v2.863h-5.83s-4.461-1.527-8.239-8.208C.936 5.982.224 2.863.005 1.527z"></path>
            </svg>
          </a>
        </Link>
      </div>
      <div className={styles.telegramLinkContainer}>
        <Link href={ExtLinks.Telegram}>
          <a>
            <svg
              className={styles.svgIcon}
              width="32"
              height="20"
              viewBox="0 0 32 27"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M29.84.177L1.494 11.11c-1.935.777-1.923 1.856-.353 2.337l7.07 2.206 2.705 8.294c.329.907.166 1.267 1.12 1.267.735 0 1.061-.335 1.471-.735.26-.255 1.808-1.76 3.535-3.438l7.353 5.433c1.353.746 2.33.36 2.667-1.257L31.89 2.47c.494-1.981-.756-2.88-2.05-2.293zM9.32 15.147L25.255 5.092c.795-.482 1.525-.223.926.309l-13.644 12.31-.532 5.667-2.685-8.233z"></path>
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SocialLinks;
