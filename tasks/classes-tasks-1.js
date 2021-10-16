'use strict';
/*
1. Sukurti klasę Automobilis
  - sukurti konstruktorių, su 3 argumentais:
    - marke, modelis, kaina

  - konstruktoriuje aprašyti, jog perduotus argumentus išsaugotume formuojame objekte savybėmis:
    - this.brand
    - this.model
    - this.price

2. Sukurkite 3 skirtingus objektus pagal klasę Automobilis kintamuosiuose:
  - const car1 = new Automobilis(..., ..., ...);
  - const car2 = new Automobilis(..., ..., ...);
  - const car3 = new Automobilis(..., ..., ...);

3. Atsispausdinkite car1, car2 ir car3 kintamuosius. Peržiūrėkite juos konsolėje, panagrinėkite kas yra tie objektai

4. Atspausdinkite visų kintamųjų (kurie rodo į klasės objektus):
  modelius:
    - console.log(car1.model);
    - console.log(car2.model);
    - console.log(car3.model);
  markes:
    - console.log(car1.brand);
    - console.log(car2.???);
    - console.log(???);
  kainas:
    - console.log(???);
    - console.log(???);
    - console.log(???);

5. Padidinkite Automobilis objektų kainas šimtu.
  car1.price = car1.price + 100;
  car2.price = ??? + 100;
  ???

6. Po padidinimo, vėl atsispausdinkite objektus ir pažiūrėkite pakitusias Automobilis objektų savybes.

*/

console.group('1 - Sukurti klasę Automobilis');
class Automobilis {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}
console.groupEnd();

console.group('2 - Sukurkite 3 skirtingus objektus pagal klasę Automobilis kintamuosiuose');
const car1 = new Automobilis('Audi', 'TTT', 12500);
const car2 = new Automobilis('BMW', 'X6', 56600);
const car3 = new Automobilis('Volkswagen', 'Pasasat', 1000);
console.groupEnd();

console.groupCollapsed(
  '3 - Atsispausdinkite car1, car2 ir car3 kintamuosius. Peržiūrėkite juos konsolėje, panagrinėkite kas yra tie objektai'
);
{
  console.table({
    car1,
    car2,
    car3,
  });
}
console.groupEnd();

console.groupCollapsed('4 - Atspausdinkite visų kintamųjų (kurie rodo į klasės objektus):');
{
  console.groupCollapsed('modelius:');
  {
    console.log(car1.model, car2.model, car3.model);
  }
  console.groupEnd();
  console.groupCollapsed('markes:');
  {
    console.log(car1.brand, car2.brand, car3.brand);
  }
  console.groupEnd();
  console.groupCollapsed('kainas:');
  {
    console.log(car1.price, car2.price, car3.price);
  }
  console.groupEnd();
}
console.groupEnd();

console.group('5 - Padidinkite Automobilis objektų kainas šimtu.');
{
  const allCars = [car1, car2, car3];
  allCars.forEach((c) => (c.price += 100));
}
console.groupEnd();

console.groupCollapsed(
  '6 -  Po padidinimo, vėl atsispausdinkite objektus ir pažiūrėkite pakitusias Automobilis objektų savybes.'
);
{
  console.table({
    car1,
    car2,
    car3,
  });
}
console.groupEnd();
