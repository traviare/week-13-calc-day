const findInput = document.querySelector("#date");
const findButton = document.querySelector(".button");
const findDiv = document.querySelector(".text");
const declination = new Intl.NumberFormat("ru", {
  style: "unit",
  unit: "day",
  unitDisplay: "long",
});

function calcDays() {
  let a = new Date(Date.parse(findInput.value));
  let b = new Date();
  let c = Math.floor((b - a) / (1000 * 60 * 60 * 24));
  if (findInput.value === "") {
    findDiv.textContent = "Пожалуйста введите дату";
  } else {
    findDiv.innerHTML = `До вашего дня рождения осталось ${declination.format(
      c
    )}`;
  }
}
