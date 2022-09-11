import Link from "next/link";
import Head from "next/head";
import HeaderMain from "../components/HeaderMain/HeaderMain";
import MainFooter from "../components/MainFooter/MainFooter";
import { getStatistics } from "../utils/api";
import styles from "../styles/Events.module.scss";
import { TEvent, TEventsResponse } from "../types/types";
import Script from "next/script";
import { useEffect } from "react";

interface IProps {
  events: TEvent[];
  stat: any;
}

const Events: React.FC<IProps> = ({ events, stat }) => {
  // console.log("WINDOW YMAPS ", window.ymaps);
  // useEffect(initMap, [window?.ymaps]);
  function initMap() {
    // if (!window.ymaps) return;
    const rootElement = document.getElementById("rootmap");
    if (rootElement?.innerHTML) return;
    // @eslint-disable-next-line
    let myMap = new window.ymaps.Map(
      "rootmap",
      {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [55.76, 37.64], // Москва
        zoom: 10,
      }
      // {
      //   searchControlProvider: "yandex#search",
      // }
    );
  }

  return (
    <>
      <Head>
        <title>Events</title>
        {/* <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=8539c825-fd7a-4501-a047-b534f491f00c"></script>
        <script src="map.js"></script> */}
      </Head>
      <Script
        src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=8539c825-fd7a-4501-a047-b534f491f00c"
        strategy="beforeInteractive"
        type="text/javascript"
        onReady={initMap}
      ></Script>
      {/* <Script src="map.js"></Script> */}
      <div>
        <HeaderMain />
        <h1 className="page_title">Карта мероприятий</h1>
        <div id="rootmap" className={styles.mapWindow}></div>
        <section className={styles.eventListSection}>
          <h2>Список мероприятий</h2>
          <div className={styles.eventList}>
            <ul>
              {events.map((event: TEvent, i: number) => {
                return (
                  <>
                    {(i === 0 ||
                      events[i - 1].city_name !== event.city_name) && (
                      <li className={styles.city_name} key={event.city_name}>
                        {event.city_name}
                      </li>
                    )}

                    <li className={styles.event_link} key={event.id}>
                      {event.status_id === 2 ? (
                        <Link href={`/${event.url}`}>
                          <a>{event.name}</a>
                        </Link>
                      ) : (
                        <p className={styles.event_link_pause}>
                          {event.name} (на паузе)
                        </p>
                      )}
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </section>

        <MainFooter stat={stat} />
      </div>

      {/* <Script
        src="map.js"
        type="text/javascript"
        strategy="afterInteractive"
      ></Script> */}
    </>
  );
};

export default Events;

export async function getStaticProps() {
  const eventsResponse = await fetch(
    "https://nrms.5verst.ru/api/v1/website/event/list",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sort_by_city: true }),
    }
  );

  const data: TEventsResponse = await eventsResponse.json();
  const events = data.result.data;
  // console.log(events);
  const stat = await getStatistics();

  return {
    props: { events, stat },
  };
}
