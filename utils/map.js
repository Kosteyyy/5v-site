export function initMap() {
  // Создание экземпляра карты и его привязка к контейнеру с
  // заданным id ("map").
  let myMap = new ymaps.Map(
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
  );

  // document.getElementById("destroyButton").onclick = function () {
  //   // Для уничтожения используется метод destroy.
  //   myMap.destroy();
  // };
}
