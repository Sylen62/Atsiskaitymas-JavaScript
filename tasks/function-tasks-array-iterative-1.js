const people = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false,
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true,
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false,
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true,
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true,
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
  },
];
console.groupCollapsed('1. Atspausdinkite visus žmones eilutėmis');
{
  people.forEach((preson) => console.log(preson));
}
console.groupEnd();

console.groupCollapsed('2. Atpausdinkite visus žmonių varus ir pavardes, atskirtus brūkšneliu');
{
  people.forEach((person) => console.log(`${person.name} - ${person.surname}`));
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinkite visų žmonių vardus ir pavardes bei santuokos statusą');
{
  people.forEach((person) => console.log(`${person.name} ${person.surname} ${person.married ? 'married' : 'not married'}`));
}
console.groupEnd();

console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
  const sexIncomeArray = people.map((person) => ({
    sex: person.sex,
    income: person.income,
  }));
  console.table(sexIncomeArray);
}
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
  const nameSurnameSexArray = people.map((person) => ({
    name: person.name,
    surname: person.surname,
    sex: person.sex,
  }));
  console.table(nameSurnameSexArray);
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
  const menArray = people.filter((person) => person.sex === 'male');
  console.table(menArray);
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visas moteris');
{
  const womenArray = people.filter((person) => person.sex === 'female');
  console.table(womenArray);
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
  people.filter((person) => person.hasCar).forEach((person) => console.log(`${person.name} ${person.surname}`));
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
  const married = people.filter((person) => person.married);
  console.table(married);
}
console.groupEnd();

console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
  const driverCountBySex = people.reduce(
    (totalBySex, { sex }) => {
      sex === 'male' && (totalBySex.male += 1);
      sex === 'female' && (totalBySex.female += 1);
      return totalBySex;
    },
    (totalBySex = {
      male: 0,
      female: 0,
    })
  );

  console.table(driverCountBySex);
}
console.groupEnd();

console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
  const newPeopleArray = people.map(({ income, ...person }) => ({
    ...person,
    salary: income,
  }));
  console.table(newPeopleArray);
}
console.groupEnd();

console.groupCollapsed('12. Suformuokite žmonių masyvą iš objektų, kuriuose nebūtų lyties, vardo ir pavardės');
{
  const newPeopleArray = people.map(({ name, surname, sex, ...person }) => ({
    ...person,
  }));
  console.table(newPeopleArray);
}
console.groupEnd();

console.groupCollapsed(
  '13. Suformuokite žmonių masyvą  iš objektų, kuriuose "name" ir "surname" savybės, būtų pakeistos "fullname" savybe'
);
{
  const newPeopleArray = people.map(({ name, surname, ...person }) => ({
    ...person,
    fullname: `${name} ${surname}`,
  }));
  console.table(newPeopleArray);
}
console.groupEnd();
