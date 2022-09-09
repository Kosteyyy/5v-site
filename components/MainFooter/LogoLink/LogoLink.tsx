import Link from "next/link";
import React from "react";
import { AppRoute } from "../../../const";
import styles from "./index.module.scss";

const LogoLink = () => {
  return (
    <div className={`${styles.homeLink} col`}>
      <div className={styles.logo}>
        <Link href={AppRoute.Home}>
          <a>
            <img
              src="img/B_logo_dark_blue_big.png"
              alt=""
              width={66}
              height={66}
            />
          </a>
        </Link>
      </div>

      <div className={styles.slogan}>
        <div className={styles.sloganPrimary}>
          <Link href={AppRoute.Home}>
            <a>5 вёрст</a>
          </Link>
        </div>
        <div className={styles.sloganSecondary}>
          <Link href={AppRoute.Home}>
            <a>Суббота. Утро. Парк. 5км</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogoLink;
