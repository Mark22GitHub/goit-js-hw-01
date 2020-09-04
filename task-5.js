const userCountry = prompt("Введите вашу страну").toLowerCase();

// userCountry === null || userCountry === "" {
//  console.log(" Отмена");
// }

const china = "китай";
const chile = "чили";
const australia = "австралия";
const india = "индия";
const jamaica = "ямайка";

switch (userCountry) {
  case china:
    console.log(`Доставка в ${china} будет стоить 100 кредитов`);
    break;

  case chile:
    console.log(`Доставка в ${chile} будет стоить 250 кредитов`);
    break;

  case australia:
    console.log(`Доставка в ${australia} будет стоить 170 кредитов`);
    break;

  case india:
    console.log(`Доставка в ${india} будет стоить 80 кредитов`);
    break;

  case jamaica:
    console.log(`Доставка в ${jamaica} будет стоить 120 кредитов`);
    break;

  default:
    alert("В вашей стране доставка не доступна");
}
