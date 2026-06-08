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
switch (dayName) {
  case "Понеділок":
  case "Вівторок":
  case "Середа":
  case "Четвер":
  case "П'ятниця":
    week = "Робочий";
    alert("Це буде ", week, " день");
    break;
  case "Субота":
  case "Неділя":
    week = "Вихідний";
    alert("Це буде ", week, " день");
    break;
  default:
    alert("Такого дня не буде");
}
const monthName = "Січень";
let season;
switch (monthName) {
  case "Січень":
  case "Лютий":
  case "Грудень":
    season = "Зима";
    alert(monthName, " це ", season);
    break;
  case "Березень":
  case "Квітень":
  case "Травень":
    season = "Весна";
    alert(monthName, " це ", season);
    break;
  case "Червень":
  case "Липень":
  case "Серпень":
    season = "Літо";
    alert(monthName, " це ", season);
    break;
  case "Вересень":
  case "Жовтень":
  case "Листопад":
    season = "Осінь";
    alert(monthName, " це ", season);
    break;
  default:
    alert("Це неконкретний місяць");
}
const walkingColor = "червоний";
let walkingName;
switch (walkingColor) {
  case "червоний":
    walkingName = "Стоп";
    alert("Стоп");
  case "жовтий":
    walkingName = "Стоп";
    alert("Чекати");
  case "зелений":
    walkingName = "Стоп";
    alert("Йти");
  default:
    alert("Це неправлиьний колір");
}
const operationSelection = prompt("Введіть оператор +, -, *, /");
const number1 = prompt("Введіть перше число:");
const number2 = prompt("Введіть друге число:");
let result = "";
console.dir(Number.toString);
let convertedResult = parseFloat(result);
switch (operationSelection) {
  case "+":
    convertedResult = number1 + number2;
    break;
  case "-":
    convertedResult = number1 - number2;
    break;
  case "*":
    convertedResult = number1 * number2;
    break;
  case "/":
    if (number1 / 0) {
      alert("На 0 ділити не можна");
    }
    convertedResult = Math.round(number1 / number2);
    break;
  default:
    alert("Введіть коректний оператор");
}
alert(convertedResult);
