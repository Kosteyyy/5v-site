import Link from "next/link";
import React, { useState } from "react";
import { AppRoute } from "../../const";
import styles from "./index.module.scss";
import LogoLink from "./LogoLink/LogoLink";
import MainHeaderButtons from "./MainHeaderButtons/MainHeaderButtons";
import MainNav from "./MainNav/MainNav";

const HeaderMain = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <header className={styles.header}>
      <LogoLink />
      <MainNav isActive={isActive} />
      <MainHeaderButtons />
      <div
        className={
          isActive
            ? `${styles.header__burger} ${styles.active}`
            : styles.header__burger
        }
        onClick={() => setIsActive(!isActive)}
      >
        <span></span>
      </div>
    </header>
  );
};

export default HeaderMain;
