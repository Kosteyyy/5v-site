import Link from "next/link";
import React from "react";
import { AppRoute, ExtLinks } from "../../../const";
import TelegramIcon from "../TelegramIcon/TelegramIcon";
import VkIcon from "../VkIcon/VkIcon";
import styles from "./index.module.scss";

const MainHeaderButtons = () => {
  return (
    <div className={`${styles.buttons} col`}>
      <div className={styles.vkLinkContainer}>
        <Link href={ExtLinks.Vk}>
          <a>
            <VkIcon />
          </a>
        </Link>
      </div>
      <div className={styles.telegramLinkContainer}>
        <Link href={ExtLinks.Telegram}>
          <a>
            <TelegramIcon />
          </a>
        </Link>
      </div>
      <div className={styles.lkLinkContainer}>
        <Link href={ExtLinks.Lk}>
          <a className={styles.lkLink}>Личный кабинет</a>
        </Link>
      </div>
      <div className={styles.registerButton}>
        <Link href={AppRoute.Register}>
          <a className={styles.registerLink}>Регистрация</a>
        </Link>
      </div>
    </div>
  );
};

export default MainHeaderButtons;
