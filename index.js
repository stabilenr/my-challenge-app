function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function displayCurrentDate() {
  let dateElement = document.querySelector("#current-date");
  if (dateElement) {
    dateElement.textContent = formatDate(new Date());
  }
}

function handleSearchSubmit(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-input");
  let cityElement = document.querySelector(".current-city");

  if (searchInput && cityElement) {
    cityElement.textContent = searchInput.value.trim();
  }
}

displayCurrentDate();

let searchForm = document.querySelector("#search-form");
if (searchForm) {
  searchForm.addEventListener("submit", handleSearchSubmit);
}
