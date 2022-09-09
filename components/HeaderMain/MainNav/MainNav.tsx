import Link from "next/link";
import React from "react";
import { AppRoute, ExtLinks } from "../../../const";
import styles from "./index.module.scss";

interface IProps {
  isActive: boolean;
}
const MainNav: React.FC<IProps> = ({ isActive }) => {
  const containerClass = isActive
    ? `${styles.mainNavContainer} ${styles.active}`
    : styles.mainNavContainer;
  return (
    <nav className={containerClass}>
      <ul className={styles.mainNav}>
        <li className={styles.mainNavLinkItem}>
          <Link href={AppRoute.About}>
            <a>О проекте</a>
          </Link>
        </li>

        <li className={styles.mainNavLinkItem}>
          <Link href={AppRoute.Events}>
            <a>Карта</a>
          </Link>
        </li>
        <li className={styles.mainNavLinkItem}>
          <Link href={AppRoute.Results}>
            <a>Результаты</a>
          </Link>
        </li>
        <li className={styles.mainNavLinkItem}>
          <Link href={AppRoute.Rules}>
            <a>Правила</a>
          </Link>
        </li>
        <li className={styles.mainNavLinkItem}>
          <Link href={ExtLinks.Zen}>
            <a>Дзен</a>
          </Link>
        </li>
        <li className={styles.mainNavLinkItem}>
          <Link href={ExtLinks.Forever}>
            <a>Поддержать проект</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
