var myMap;
console.log("MAPBASICS ACTIVATED");

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(initMap);

function initMap() {
  const rootElement = document.getElementById("rootmap");
  if (rootElement?.innerHTML) return;
  // Создание экземпляра карты и его привязка к контейнеру с
  // заданным id ("map").
  (myMap = new ymaps.Map(
    "rootmap",
    {
      // При инициализации карты обязательно нужно указать
      // её центр и коэффициент масштабирования.
      center: [55.76, 37.64], // Москва
      zoom: 10,
    },
    {
      searchControlProvider: "yandex#search",
    }
  )),
    (yellowCollection = new ymaps.GeoObjectCollection(null, {
      preset: "islands#yellowIcon",
    })),
    (blueCollection = new ymaps.GeoObjectCollection(null, {
      preset: "islands#blueIcon",
    })),
    (yellowCoords = [
      [55.73, 37.75],
      [55.81, 37.75],
    ]),
    (blueCoords = [
      [55.73, 37.65],
      [55.81, 37.65],
    ]);

  for (var i = 0, l = yellowCoords.length; i < l; i++) {
    yellowCollection.add(new ymaps.Placemark(yellowCoords[i]));
  }
  for (var i = 0, l = blueCoords.length; i < l; i++) {
    blueCollection.add(new ymaps.Placemark(blueCoords[i]));
  }

  myMap.geoObjects.add(yellowCollection).add(blueCollection);

  // Через коллекции можно подписываться на события дочерних элементов.
  yellowCollection.events.add("click", function () {
    alert("Кликнули по желтой метке");
  });
  blueCollection.events.add("click", function () {
    alert("Кликнули по синей метке");
  });

  // Через коллекции можно задавать опции дочерним элементам.
  blueCollection.options.set("preset", "islands#blueDotIcon");
  // document.getElementById("destroyButton").onclick = function () {
  //   // Для уничтожения используется метод destroy.
  //   myMap.destroy();
  // };
}
