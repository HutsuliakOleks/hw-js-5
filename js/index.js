const drinkText = prompt("Введіть Напій:").toLowerCase();
let drink = "";
switch (drinkText) {
  case "кава":
    drink = "Мій напій це Кава";
    break;
  case "чай":
    drink = "Мій напій це Чай";
    break;
  case "сік":
    drink = "Мій напій це Сік";
    break;
  default:
    alert("Введіть конкретний Напій");
}
alert(drink);
const dayName = prompt("Введіть день:").toLowerCase();
let week;
switch (dayName) {
  case "понеділок":
  case "вівторок":
  case "середа":
  case "четвер":
  case "п'ятниця":
    week = "Робочий";
    alert("Це буде " + week + " день");
    break;
  case "субота":
  case "неділя":
    week = "Вихідний";
    alert("Це буде " + week + " день");
    break;
  default:
    alert("Такого дня не буде");
}
const monthName = prompt("Введіть місяць").toLowerCase();
let season;
switch (monthName) {
  case "січень":
  case "лютий":
  case "грудень":
    season = "Зима";
    alert(monthName + " це " + season);
    break;
  case "березень":
  case "квітень":
  case "мравень":
    season = "Весна";
    alert(monthName + " це " + season);
    break;
  case "червень":
  case "липень":
  case "серпень":
    season = "Літо";
    alert(monthName + " це " + season);
    break;
  case "вересень":
  case "жовтень":
  case "листопад":
    season = "Осінь";
    alert(monthName + " це " + season);
    break;
  default:
    alert("Це неконкретний місяць");
}
const walkingColor = prompt(
  "Введіть колір: червоний, жовтий, зелений.",
).toLowerCase();
let walkingName;
switch (walkingColor) {
  case "червоний":
    walkingName = "Стоп";
    alert(walkingName);
    break;
  case "жовтий":
    walkingName = "Чекати";
    alert(walkingName);
    break;
  case "зелений":
    walkingName = "Йти";
    alert(walkingName);
    break;
  default:
    alert("Це неправлиьний колір");
}
const operationSelection = prompt("Введіть оператор +, -, *, /");
const number1 = parseFloat(prompt("Введіть перше число:"));
const number2 = parseFloat(prompt("Введіть друге число:"));
let result;
switch (operationSelection) {
  case "+":
    result = number1 + number2;
    break;
  case "-":
    result = number1 - number2;
    break;
  case "*":
    result = number1 * number2;
    break;
  case "/":
    if (number1 / 0) {
      alert("На 0 ділити не можна");
    }
    result = Math.round(number1 / number2);
    break;
  default:
    alert("Введіть коректний оператор");
}
alert(result);
