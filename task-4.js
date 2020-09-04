let credits = 23580;
const pricePerDroid = 3000;
let quantity = +prompt("Сколько дроидов, вы хотите приобрести?");

if (!quantity) {
  console.log("Отменено пользователем!");
} else {
  let totalPrice = pricePerDroid * quantity;
  if (totalPrice > credits) {
    console.log("Недостаточно средств на счету!");
  } else {
    console.log(
      `Вы купили ${quantity} дроидов, на счету осталось ${
        credits - totalPrice
      } кредитов.`
    );
  }
}
