import type { NextPage } from "next";
import Link from "next/link";
import HeaderMain from "../components/HeaderMain/HeaderMain";
import MainFooter from "../components/MainFooter/MainFooter";
import { ApiRoute, AppRoute, backendUrl } from "../const";
import styles from "../styles/Home.module.scss";
import { getStatistics } from "../utils/api";

const Home: NextPage<any> = ({ stat }) => {
  return (
    <div>
      <HeaderMain />

      <section className={styles.hero}>
        <div className="container">
          <div className={styles.content}>
            <h1>Больше, чем просто 5 километров в парке</h1>
            <p>Бесплатно, для всех, каждую субботу</p>
            <div className={styles.hero_buttons}>
              <div className="primary_button">
                <Link href={AppRoute.Register}>
                  <a>Зарегистрироваться</a>
                </Link>
              </div>
              <div className="secondary_button">
                <Link href={AppRoute.Events}>
                  <a>Карта мероприятий</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.about}>
        <div className="container">
          <h2 className={styles.title}>
            Каждую субботу мы собираемся в парках по всей России и бежим или
            проходим дистанцию 5 километров.
          </h2>
          <div className={styles.about_row}>
            <div className={styles.about_col}>
              <div>
                <h2>Кто мы?</h2>
                <p>
                  Мы сообщество любителей здорового образа жизни, вдохновленные
                  идеей регулярных бесплатных мероприятий parkrun.{" "}
                </p>
              </div>
              <div className={styles.about_link}>
                {" "}
                <Link href={AppRoute.About}>
                  <a>Подробнее о проекте</a>
                </Link>
              </div>
            </div>
            <div className={styles.about_col}>
              <div>
                <h2>Как присоединиться?</h2>
                <p>
                  Все очень просто! Достаточно один раз зарегистрироваться на
                  нашем сайте, сохранить на телефон или распечатать свой QR код
                  и прийти на ближайшие к вам 5 вёрст.
                </p>
              </div>
              <div className={styles.about_link}>
                <Link href={AppRoute.Register}>
                  <a>Зарегистрироваться</a>
                </Link>
              </div>
            </div>
            <div className={styles.about_col}>
              <div>
                <h2>Где принять участие?</h2>
                <p>
                  В настоящее время доступно более 80 локаций, где каждую
                  субботу проходят наши мероприятия. Найди ближайшие 5 вёрст на
                  карте.
                </p>
              </div>
              <div className={styles.about_link}>
                <Link href={AppRoute.Events}>
                  <a>Карта мероприятий</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MainFooter stat={stat} />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const stat = await getStatistics();
  return { props: { stat } };
}
