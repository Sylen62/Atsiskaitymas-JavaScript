/*
1. Sukurkite klasę Car, kuri turėtų savybes ir priskirtų jas naudojant konstruktorių:
  brand,
  model,
  year,
  color,
  fuelTypes: [] 
  price // eurais

2. Sukurkite masyvą sudarytą iš 8 Car klasės mašinų

3. Klasėje Car sukurkite metodą getFuelType, kuris grąžintų mašinos kurų tipus (fuelTypes)
   kaip 'string'ą atskirtą '/'.

4. Atspausdinkite kiekvieno automobilio pavadinimą ir 3 punktu sukurto metodo rezultatą, pvz:
  Tayota Corola - dysel/electric
  Nisan Bajam - petrol/gas
  Kanagi BaBa - uranus
            ...

5. Atrinkite tik elektrinius automobilius

6. Atrinkite tik benzininius automobilius, naujesnius nei 2016 metai

7. Atrinkite audi tipo automobilius nuo 2012 iki 2016, kurie nėra dyzeliniai  

8. Suskaičiuokite 5 punkte gautų automobilių kainos vidurkį

9. Suskaičiuokite 6 punkte gautų automobilių bendrą vertę

10. Panaudokite pradinį Car objektų masyvą performuoti duomenis į tokių objektų masyvą:
  * brand,
  * model,
  * price, // kaina doleriais [Number]
  * fuelType // kuro tipas kaip string'as. galite naudoti 3 punktu sukurtą metodą
*/

class Car {
  constructor(brand, model, year, color, fuleTypes, price) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.fuleTypes = fuleTypes;
    this.price = price;
  }

  getfuleTypes() {
    return this.fuleTypes.join('/');
  }
}

// const c = new Car('brand', 'model', 1999, 'color', ['gass', 'electric'], 100);

const carsArray = [
  new Car('b1', 'm1', 1999, 'c1', ['gass', 'electric'], 10000),
  new Car('b2', 'm2', 2013, 'c2', ['diesel', 'electric'], 43500),
  new Car('audi', 'm3', 2015, 'c3', ['diesel', 'gass'], 1300),
  new Car('b4', 'm4', 1876, 'c4', ['electric'], 932000),
  new Car('b5', 'm5', 1998, 'c5', ['diesel'], 100),
  new Car('audi', 'm6', 2020, 'c6', ['gass'], 42370),
  new Car('b7', 'm7', 2021, 'c7', ['gass', 'electric'], 54400),
  new Car('b8', 'm8', 2003, 'c8', ['diesel', 'electric'], 6500),
];

carsArray.forEach((car) => console.log(`${car.brand} ${car.model} - ${car.getfuleTypes()}`));

// 5 Atrinkite tik elektrinius automobilius
const electricOnly = [];
carsArray.forEach((car, i, arr) => car.fuleTypes.filter((fuel) => (fuel == 'electric' ? electricOnly.push(arr[i]) : false)));
console.log('Tik elektriniai automobiliai:', electricOnly);

// 6 Atrinkite tik benzininius automobilius, naujesnius nei 2016 metai
// const gassOnlyNewerThen2016 = [];
// carsArray.forEach((car, i, arr) =>
//   car.fuleTypes.filter((fuel) => (fuel == 'gass' ? (arr[i].year > 2016 ? gassOnlyNewerThen2016.push(arr[i]) : false) : false))
// );
// console.log('Tik dujiniai automobiliai naujesni nei 2016: ', gassOnlyNewerThen2016);

const gassOnlyNewerThen2016 = [];
carsArray.forEach((car) => {
  let isGass = false;
  car.fuleTypes.filter((fuel) => {
    if (fuel == 'gass') {
      isGass = true;
    } else {
      isGass = false;
    }
  });

  if (!isGass) {
    return;
  } else {
    console.log(car);
    if (car.year > 2016) {
      gassOnlyNewerThen2016.push(car);
    }
  }
});
console.log('Tik benzininiai automobiliai naujesni nei 2016: ', gassOnlyNewerThen2016);

// 7 Atrinkite audi tipo automobilius nuo 2012 iki 2016, kurie nėra dyzeliniai
const audiFrom2012To2016NotDiesel = [];
carsArray.forEach((car) => {
  let isDiesel = false;
  car.fuleTypes.filter((fuel) => {
    if (fuel == 'diesel') isDiesel = true;
  });
  if (isDiesel) {
    return;
  } else {
    if (car.year > 2012 && car.year < 2016) {
      audiFrom2012To2016NotDiesel.push(car);
    }
  }
});
console.log('Tik audi automobiliai naujesni nei 2012 bet senesni nei 2016 ir ne dyzeliai: ', audiFrom2012To2016NotDiesel);

// 8
const electricOnlyTotalAvgPrice = electricOnly.reduce((total, { price }) => total + price, 0) / electricOnly.length;
console.log(`Elektrinių automobilių kainų vidurkis: ${electricOnlyTotalAvgPrice}`);

// 9 pakeist replace i find???
const gassOnlyTotalPrice = gassOnlyNewerThen2016.reduce((total, { price }) => total + price, 0);
console.log(`Visų tik benzininių automobilių vertė: ${gassOnlyTotalPrice}`);

// 10
const newCarsArray = carsArray.map((car) => {
  return {
    brand: car.brand,
    model: car.model,
    price: Math.floor(car.price * 1.16),
    fuelType: car.getfuleTypes(),
  };
});
console.log(newCarsArray);
