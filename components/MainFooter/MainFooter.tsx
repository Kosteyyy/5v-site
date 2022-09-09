import Link from "next/link";
import React from "react";
import { AppRoute, websiteUrl } from "../../const";
import styles from "./index.module.scss";
import LogoLink from "./LogoLink/LogoLink";
import SocialLinks from "./SocialLinks/SocialLink";

interface IProps {
  showStat?: boolean;
  stat?: any;
}

const MainFooter: React.FC<IProps> = ({ showStat = false, stat = null }) => {
  return (
    <div className={styles.footerWrapper}>
      <div className="container">
        {/* Статистика */}
        {stat !== null ? (
          <section className={`${styles.stat} row`}>
            <div className="col two-col">
              <h2>Общая статистика</h2>
              <p>
                {stat?.result.event_count} - общее количество проведенных
                мероприятий
              </p>
              <p>
                {stat?.result.participants_count} - общее число уникальных
                участников
              </p>
              <p>{stat?.result.finishes} - общее число финишей</p>
            </div>
            <div className="col two-col">
              <p>
                {stat?.result.average_finishes_per_participant} - среднее число
                финишей на участника
              </p>
              <p>{stat?.result.volunteer_count} - общее число волонтерств</p>
              <p>
                {stat?.result.average_finish_time} - среднее время на финише
              </p>
            </div>
          </section>
        ) : null}

        {/* Ссылки */}
        <section className={styles.links}>
          <LogoLink />
          <SocialLinks />
        </section>

        {/* Контакты условия */}
        <section className={styles.rules}>
          <div className={styles.rules_col}>
            <h2>Контакты</h2>
            <p>
              АНО "Паpкpан". ОГРН 1137799012438, ИНН/КПП 7729451893/774301001,
              дата регистрации 20.06.2013
            </p>
            <p>
              Москва, 3й-Балтийский пер. д.6к2, кв. 42{" "}
              <a href="mailto:info@5verst.ru">info@5verst.ru</a>
            </p>
          </div>
          <div className={styles.rules_col}>
            <h2>Правила участия</h2>
            <p>
              Бег и ходьба – это физически активные виды деятельности.
              Необходимо проконсультироваться с врачом, прежде чем начинать
              заниматься физкультурой или спортом. Участвуя в наших мероприятиях
              вы принимаете:
            </p>
            <p>
              <Link href={AppRoute.TermsConditions}>
                <a>Условия и положения</a>
              </Link>
            </p>
            <p>
              <Link href={AppRoute.PrivacyPolicy}>
                <a>Политику конфиденциальности</a>
              </Link>
            </p>
          </div>
        </section>
        <section className={styles.copyright}>
          <p>
            © АНО «Паpкpан», 2022. Все материалы сайта {websiteUrl} защищены
            авторским правом.
          </p>
        </section>
      </div>
    </div>
  );
};

export default MainFooter;
