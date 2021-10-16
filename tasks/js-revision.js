/*
------------------------------------ 1 Dalis ------------------------------------ 
1. Sukurti objektų(žmonių) masyvą su 8 elementais, kuriame būtų:
  - name
  - surname
  - age
  - height
  - weight
  - sex
2. Panaudojant array.foreach:
  - Atspausdinti kiekvieną elementą
  - Atspausdinti kiekvieno elemento pilną vardą
  - Atspausdinti kiekvieno elemento kūno masės indeksą
3. Panaudojant array.filter atrinkti į naują masyvą ir po to atspausdinti žmones:
  - kurių vardas ilgesnis nei 6 simboliai
  - kurių svoris didesnis nei 80kg
  - kurie aukštesni nei 185cm
4. Panaudojant array.map atrinkti į naują masyvą ir po to atspausdinti
  - ūgius
  - svorius
  - ūgius, svorius ir amžius : [{height, weight, age}, ...]
  - KMI indeksus
  - KMI indeksus ir amžius
5. Panaudojant array.reduce suskaičiuoti ir po to atspausdinti
  - svorių vidurkį
  - ūgio vidurkį
------------------------------------ 2 Dalis ------------------------------------ 
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

const calcBMI = (weight, height) => Math.round(weight / Math.pow(height / 100, 2));

console.groupCollapsed('------------------------------------ 1 Dalis ------------------------------------');
{
  console.groupCollapsed('1. Sukurti objektų(žmonių) masyvą su 8 elementais');
  {
    console.table(people);
  }
  console.groupEnd();
  //-------------------------
  console.groupCollapsed('2. Panaudojant Array.prototype.forEach:');
  {
    console.group('Atspausdinti kiekvieną elementą');
    {
      people.forEach((person) => console.log(person));
    }
    console.groupEnd();

    console.group('Atspausdinti kiekvieno elemento pilną vardą');
    {
      people.forEach(({ name, surname }) => console.log(`${name} ${surname}`));
    }
    console.groupEnd();

    console.group('Atspausdinti kiekvieno elemento kūno masės indeksą');
    {
      people.forEach(({ weight, height }) => console.log(calcBMI(weight, height)));
    }
    console.groupEnd();
  }
  console.groupEnd();
  //-------------------------
  console.groupCollapsed('3. Panaudojant Array.filter atrinkti į naują masyvą ir po to atspausdinti žmones:');
  {
    console.group('kurių vardas ilgesnis nei 6 simboliai');
    {
      const filteredPeople = people.filter(({ name }) => name.length > 6);
      console.table(filteredPeople);
    }
    console.groupEnd();
    console.group('kurių svoris didesnis nei 80kg');
    {
      const filteredPeople = people.filter(({ weight }) => weight > 80);
      console.table(filteredPeople);
    }
    console.groupEnd();
    console.group('kurie aukštesni nei 185cm');
    {
      const filteredPeople = people.filter(({ height }) => height > 185);
      console.table(filteredPeople);
    }
    console.groupEnd();
  }
  console.groupEnd();
  //-------------------------
  console.groupCollapsed('4. Panaudojant Array.prototype.map atrinkti į naują masyvą ir po to atspausdinti');
  {
    console.group('ūgius');
    {
      console.table(people.map(({ height }) => height));
    }
    console.groupEnd();
    console.group('svorius');
    {
      console.table(people.map(({ weight }) => weight));
    }
    console.groupEnd();
    console.group('ūgius, svorius ir amžius');
    {
      console.table(people.map(({ weight, height, age }) => ({ weight, height, age })));
    }
    console.groupEnd();
    console.group('KMI indeksus');
    {
      console.table(people.map(({ weight, height }) => calcBMI(weight, height)));
    }
    console.groupEnd();
    console.group('KMI indeksus ir amžius');
    {
      console.table(
        people.map(({ weight, height, age }) => ({
          age,
          bmi: calcBMI(weight, height),
        }))
      );
    }
    console.groupEnd();
  }
  console.groupEnd();
  //-------------------------
  console.groupCollapsed('5. Panaudojant Array.reduce suskaičiuoti ir po to atspausdinti');
  {
    console.group('svorių vidurkį');
    {
      console.log(people.reduce((total, { weight }) => total + weight, 0) / people.length);
    }
    console.groupEnd();
    console.group('ūgių vidurkį');
    {
      console.log(people.reduce((total, { height }) => total + height, 0) / people.length);
    }
    console.groupEnd();
  }
  console.groupEnd();
}
console.groupEnd();
console.groupCollapsed('------------------------------------ 2 Dalis ------------------------------------');
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
      return Math.round(this.weight / Math.pow(this.height / 100, 2));
    }

    toString() {
      return `${this.name} ${this.surname}\n\tAmžius: ${this.age} Ūgis: ${this.height} Svoris: ${this.weight} Lytis: ${this.sex}`;
    }
  }

  const peopleArray = people.map((person) => new Person(person));

  console.groupCollapsed(
    '0. Pasinaudojant 1 dalies asmens apibūdinimu, sukurti Person klasę, kuri apipavidalina tokio tipo objektą'
  );
  {
    console.table(peopleArray);
    peopleArray.forEach(({ BMI }) => console.log(BMI));
    peopleArray.forEach((person) => console.log(person.toString()));
  }
  console.groupEnd();

  console.groupCollapsed('1. Atrinkti moteris, kuriuos jaunesnės nei 20 metų ir svoris didesnis nei 70kg ');
  {
    const newPeopleArray = peopleArray.filter(({ sex, age, weight }) => sex === 'female' && age < 20 && weight > 70);
    console.table(newPeopleArray);
  }
  console.groupEnd();

  console.groupCollapsed('2. Atrinkti vyrus, kurie vyresni nei 25 metai ir KMI mažesnis nei 18,5');
  {
    const newPeopleArray = peopleArray.filter(({ sex, age, BMI }) => sex === 'male' && age > 25 && BMI < 18.5);
    console.table(newPeopleArray);
  }
  console.groupEnd();

  console.groupCollapsed('3. Atrinkti vaikus, su antsvoriu (KMI > 30)');
  {
    const newPeopleArray = peopleArray.filter(({ age, BMI }) => age < 18 && BMI > 30);
    console.table(newPeopleArray);
  }
  console.groupEnd();

  console.groupCollapsed('4. Atrinkti pensininkus, su antsvoriu (KMI > 30)');
  {
    const newPeopleArray = peopleArray.filter(({ age, BMI }) => age > 65 && BMI > 30);
    console.table(newPeopleArray);
  }
  console.groupEnd();

  console.groupCollapsed('5. Atrinkti visus, kieno KMI nepatenka į rėžius [18.5; 25]');
  {
    const newPeopleArray = peopleArray.filter(({ BMI }) => BMI > 18.5 && BMI < 25);
    console.table(newPeopleArray);
  }
  console.groupEnd();
}
console.groupEnd();
