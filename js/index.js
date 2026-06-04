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
const dayName = "Субота";
let week;
if (
  dayName == "Понеділок" ||
  dayName == "Вівторок" ||
  dayName == "Середа" ||
  dayName == "Четвер" ||
  dayName == "П'ятниця"
) {
  alert("Це буде робочий день");
} else if (dayName == "Субота" || dayName == "Неділя") {
  alert("Це буде вихідний день");
} else {
  alert("Такого дня не буде");
}
const monthName = "Січень";
let season;
if (monthName == "Січень" || monthName == "Лютий" || monthName == "Грудень") {
  season = "";
  alert("Місяць Пори року Зими - це " + monthName);
} else if (
  monthName == "Березень" ||
  monthName == "Квітень" ||
  monthName == "Травень"
) {
  alert("Місяць Пора року Весни - це " + monthName);
} else if (
  monthName == "Червень" ||
  monthName == "Липень" ||
  monthName == "Серпень"
) {
  alert("Місяць Пора року Літа - це " + monthName);
} else if (
  monthName == "Вересень" ||
  monthName == "Жовтень" ||
  monthName == "Листопад"
) {
  alert("Місяць Пора року Осені - це " + monthName);
} else {
  alert("Це неконкретний місяць");
}
const operationSelection = prompt("Введіть оператор +, -, *, /");
const number1 = prompt("Введіть перше число:");
const number2 = prompt("Введіть друге число:");
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
