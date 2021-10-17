const data = [
  { brand: 'Toyota', model: 'Yaris', year: 2002, color: 'red', fuelTypes: ['diesel'], price: 800 },
  { brand: 'Tesla', model: 'Model 3', year: 2016, color: 'black', fuelTypes: ['electric'], price: 22000 },
  { brand: 'Toyota', model: 'Avensis', year: 2015, color: 'blue', fuelTypes: ['petrol'], price: 13000 },
  { brand: 'Audi', model: 'A6', year: 2015, color: 'black', fuelTypes: ['diesel', 'electric'], price: 14000 },
  { brand: 'Audi', model: 'A5', year: 2015, color: 'red', fuelTypes: ['petrol'], price: 17000 },
  { brand: 'Audi', model: 'R8', year: 2019, color: 'black', fuelTypes: ['petrol'], price: 17000 },
  { brand: 'Audi', model: 'R8', year: 2017, color: 'black', fuelTypes: ['petrol'], price: 15000 },
  { brand: 'Tesla', model: 'Model S', year: 2020, color: 'blue', fuelTypes: ['electric'], price: 38000 },
  { brand: 'Subaru', model: 'Impreza', year: 2010, color: 'green', fuelTypes: ['diesel', 'electric'], price: 6000 },
];
const usd_eur = 1.16;

class Car {
  static #constructorParams = ['brand', 'model', 'year', 'color', 'fuelTypes', 'price'];

  constructor(...args) {
    Car.#constructorParams.forEach((name) => (this[name] = args[0][name]));
  }

  get fuelType() {
    return this.fuelTypes.join('/');
  }
}

// Bendrai naudojami kintamieji
let cars;
let electricCars;
let petrolCars;
let audiCarsFrom2012To2016;
let electricCarsAvg;
let petrolCarsTotalPrice;
let reformattedCars;

console.groupCollapsed('1. Sukurkite klasę Car, kuri turėtų savybes ir priskirtų jas naudojant konstruktorių');
{
  const car = new Car({ brand: 'Toyota', model: 'Yaris', year: 2002, color: 'red', fuelTypes: ['diesel'], price: 800 });
  console.log(car);
}
console.groupEnd();

console.groupCollapsed('2. Sukurkite masyvą sudarytą iš 8 Car klasės mašinų, naudodami duomenis <data>');
{
  cars = data.map((carData) => new Car(carData));
  console.table(cars);
}
console.groupEnd();

console.groupCollapsed(
  "3. Klasėje Car sukurkite metodą getFuelType, kuris grąžintų mašinos kurų tipus (fuelTypes) kaip 'string'ą atskirtą '/'."
);
{
  cars.forEach(({ fuelType }) => console.log(fuelType));
}
console.groupEnd();

console.groupCollapsed('4. Atspausdinkite kiekvieno automobilio pavadinimą ir 3 punktu sukurto metodo rezultatą');
{
  cars.forEach(({ brand, model, fuelType }) => console.log(`${brand} ${model} - ${fuelType}`));
}
console.groupEnd();

console.groupCollapsed('5. Atrinkite tik elektrinius automobilius');
{
  electricCars = cars.filter(({ fuelType }) => fuelType === 'electric');
  console.log(electricCars);
}
console.groupEnd();

console.groupCollapsed('6. Atrinkite tik benzininius automobilius, naujesnius nei 2016 metai');
{
  petrolCars = cars.filter(({ year, fuelType }) => fuelType === 'petrol' && year > 2016);
  console.log(petrolCars);
}
console.groupEnd();

console.groupCollapsed("7. Atrinkite 'audi' markės automobilius nuo 2012 iki 2016, kurie nėra dyzeliniai");
{
  audiCarsFrom2012To2016 = cars.filter(
    ({ brand, year, fuelTypes }) =>
      brand.toLowerCase() === 'audi' && year >= 2012 && year <= 2016 && !fuelTypes.includes('diesel')
  );
  console.log(audiCarsFrom2012To2016);
}
console.groupEnd();

console.groupCollapsed('8. Suskaičiuokite 5 punkte gautų automobilių kainos vidurkį');
{
  electricCarsAvg = electricCars.reduce((total, { price }) => total + price, 0) / electricCars.length;
  console.log(electricCarsAvg);
}
console.groupEnd();

console.groupCollapsed('9. Suskaičiuokite 6 punkte gautų automobilių bendrą vertę');
{
  petrolCarsTotalPrice = petrolCars.reduce((total, { price }) => total + price, 0);
  console.log(petrolCarsTotalPrice);
}
console.groupEnd();

console.groupCollapsed('10. Panaudokite pradinį Car objektų masyvą performuoti duomenis į tokių objektų masyvą');
/*
 * brand,
 * model,
 * price, // kaina doleriais [Number]
 * fuelType // kuro tipas kaip string'as. galite naudoti 3 punktu sukurtą metodą
 */
{
  reformattedCars = cars.map(({ brand, model, price, fuelType }) => ({
    brand,
    model,
    price: Math.floor(price * usd_eur),
    fuelType,
  }));
  console.table(reformattedCars);
}
console.groupEnd();
