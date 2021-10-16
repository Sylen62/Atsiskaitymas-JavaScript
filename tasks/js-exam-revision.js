console.log('------------------------------------ 1 Dalis ------------------------------------');
/*
1. Sukurti objektų(žmonių) masyvą su 8 elementais, kuriame būtų:
  - name
  - surname
  - age
  - height
  - weight
  - sex
*/

const people = [
  {
    name: 'Vardauskas',
    surname: 'Pavardauskas',
    age: 69,
    height: 199,
    weight: 59,
    sex: 'male',
  },
  {
    name: 'Jėzus',
    surname: 'Batonas',
    age: 34,
    height: 153,
    weight: 234,
    sex: 'male',
  },
  {
    name: 'Danguolė',
    surname: 'Vargauskaitė',
    age: 31,
    height: 212,
    weight: 55,
    sex: 'female',
  },
  {
    name: 'Serbentautas',
    surname: 'Bordiūras',
    age: 23,
    height: 178,
    weight: 83,
    sex: 'male',
  },
  {
    name: 'Taiklius',
    surname: 'Aklūnas',
    age: 69,
    height: 140,
    weight: 96,
    sex: 'male',
  },
  {
    name: 'Božėna',
    surname: 'Dundauskaitė',
    age: 17,
    height: 199,
    weight: 77,
    sex: 'female',
  },
  {
    name: 'Mažius',
    surname: 'Vaikauskas',
    age: 16,
    height: 157,
    weight: 96,
    sex: 'male',
  },
  {
    name: 'Stalius',
    surname: 'Kėdauskas',
    age: 17,
    height: 172,
    weight: 130,
    sex: 'male',
  },
];

/*
2. Panaudojant array.foreach:
  - Atspausdinti kiekvieną elementą
  - Atspausdinti kiekvieno elemento pilną vardą
  - Atspausdinti kiekvieno elemento kūno masės indeksą
*/
console.groupCollapsed('2 užduotis - Atspausdinti kiekvieną elementą');
{
  people.forEach((person) => console.log(person));
}
console.groupEnd();
console.groupCollapsed('2 užduotis - Atspausdinti kiekvieno elemento pilną vardą');
{
  people.forEach(({ name, surname }) => console.log(`${name} ${surname}`));
}
console.groupEnd();
console.groupCollapsed('2 užduotis - Atspausdinti kiekvieno elemento kūno masės indeksą');
{
  people.forEach(({ weight, height }) => console.log(Math.round(weight / Math.pow(height / 100, 2))));
}
console.groupEnd();

/*
3. Panaudojant array.filter atrinkti į naują masyvą ir po to atspausdinti žmones:
  - kurių vardas ilgesnis nei 6 simboliai
  - kurių svoris didesnis nei 80kg
  - kurie aukštesni nei 185cm
*/
console.groupCollapsed('3 užduotis - kurių vardas ilgesnis nei 6 simboliai');
{
  const filteredPeople = people.filter(({ name }) => name.length > 6);
  console.log(filteredPeople);
}
console.groupEnd();
console.groupCollapsed('3 užduotis - kurių svoris didesnis nei 80kg');
{
  const filteredPeople = people.filter(({ weight }) => weight > 80);
  console.log(filteredPeople);
}
console.groupEnd();
console.groupCollapsed('3 užduotis - kurie aukštesni nei 185cm');
{
  const filteredPeople = people.filter(({ height }) => height > 185);
  console.log(filteredPeople);
}
console.groupEnd();

/*
4. Panaudojant array.map atrinkti į naują masyvą ir po to atspausdinti
  - ūgius
  - svorius
  - ūgius, svorius ir amžius : [{height, weight, age}, ...]
  - KMI indeksus
  - KMI indeksus ir amžius
*/
console.groupCollapsed('4 užduotis - atrinkti į naują masyvą ir po to atspausdinti - ūgius');
{
  const newPeople = people.map(({ height }) => height);
  console.log(newPeople);
}
console.groupEnd();
console.groupCollapsed('4 užduotis - atrinkti į naują masyvą ir po to atspausdinti - svorius');
{
  const newPeople = people.map(({ weight }) => weight);
  console.log(newPeople);
}
console.groupEnd();
console.groupCollapsed('4 užduotis - atrinkti į naują masyvą ir po to atspausdinti - ūgius, svorius ir amžius');
{
  const newPeople = people.map(({ height, weight, age }) => {
    return {
      height: height,
      weight: weight,
      age: age,
    };
  });
  console.log(newPeople);
}
console.groupEnd();
console.groupCollapsed('4 užduotis - atrinkti į naują masyvą ir po to atspausdinti - KMI indeksus');
{
  const newPeople = people.map(({ height, weight }) => Math.round(weight / Math.pow(height / 100, 2)));
  console.log(newPeople);
}
console.groupEnd();
console.groupCollapsed('4 užduotis - atrinkti į naują masyvą ir po to atspausdinti - KMI indeksus ir amžius');
{
  const newPeople = people.map(({ height, weight, age }) => {
    return {
      age: age,
      kmiIndex: Math.round(weight / Math.pow(height / 100, 2)),
    };
  });
  console.log(newPeople);
}
console.groupEnd();

/*
5. Panaudojant array.reduce suskaičiuoti ir po to atspausdinti
  - svorių vidurkį
  - ūgio vidurkį
*/
console.groupCollapsed('5 užduotis - Panaudojant array.reduce suskaičiuoti ir po to atspausdinti - svorių vidurkį');
{
  const totalWeightAvg = people.reduce((total, { weight }) => total + weight, 0) / people.length;
  console.log(totalWeightAvg);
}
console.groupEnd();
console.groupCollapsed('5 užduotis - Panaudojant array.reduce suskaičiuoti ir po to atspausdinti - ūgio vidurkį');
{
  const totalHeightAvg = people.reduce((total, { height }) => total + height, 0) / people.length;
  console.log(totalHeightAvg);
}
console.groupEnd();

console.log('------------------------------------ 2 Dalis ------------------------------------');
/*
0. Pasinaudojant 1 dalies elementų masyvu, sukurti Person prototipų(Class) masyvą:
    Person klasėje:    
    - sukurti vidinį metodą: getBMI();     // suskaičiuoja kūno masės indeksą
    - sukurti vidinį metodą: toString();   // atspausdina žmogų su esamom savybėm
1. Atrinkti moteris, kuriuos jaunesnės nei 20 metų ir svoris didesnis nei 70kg 
2. Atrinkti vyrus, kurie vyresni nei 25 metai ir KMI mažesnis nei 18,5
3. Atrinkti vaikus, su antsvoriu (KMI > 30)
4. Atrinkti pensininkus, su antsvoriu (KMI > 30)
5. Atrinkti visus, kieno KMI nepatenka į rėžius [18.5; 25]
*/
console.groupCollapsed('0 užduotis - Pasinaudojant 1 dalies elementų masyvu, sukurti Person prototipų(Class) masyvą...');
{
  class Person {
    constructor({ name, surname, age, height, weight, sex }) {
      this.name = name;
      this.surname = surname;
      this.age = age;
      this.height = height;
      this.weight = weight;
      this.sex = sex;
    }

    get BMI() {
      return Math.round(weight / Math.pow(height / 100, 2));
    }

    toString() {
      console.log(
        `${this.name} ${this.surname}\n\tAmžius: ${this.age} Ūgis: ${this.height} Svoris: ${this.weight} Lytis: ${this.sex}`
      );
    }
  }

  const peopleArray = [];
  people.forEach((person) => peopleArray.push(new Person(person))); // Panaudoti map
  // console.log(peopleArray);
  // peopleArray[0].toString();

  console.group('1. Atrinkti moteris, kuriuos jaunesnės nei 20 metų ir svoris didesnis nei 70kg ');
  {
    console.log(peopleArray.filter(({ sex, age, weight }) => sex === 'female' && age < 20 && weight > 70));
  }
  console.groupEnd();
  console.group('2. Atrinkti vyrus, kurie vyresni nei 25 metai ir KMI mažesnis nei 18,5');
  {
    console.log(peopleArray.filter(({ sex, age, BMI }) => sex === 'male' && age > 25 && BMI < 18.5));
  }
  console.groupEnd();
  console.group('3. Atrinkti vaikus, su antsvoriu (KMI > 30)');
  {
    console.log(peopleArray.filter(({ age, BMI }) => age < 18 && BMI > 30));
  }
  console.groupEnd();
  console.group('4. Atrinkti pensininkus, su antsvoriu (KMI > 30)');
  {
    console.log(peopleArray.filter(({ age, BMI }) => age > 65 && BMI > 30));
  }
  console.groupEnd();
  console.group('5. Atrinkti visus, kieno KMI nepatenka į rėžius [18.5; 25]');
  {
    console.log(peopleArray.filter(({ BMI }) => BMI > 18.5 && BMI < 25));
  }
  console.groupEnd();
}
console.groupEnd();
