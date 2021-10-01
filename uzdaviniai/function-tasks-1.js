const myNumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
  function firstArrayElement(array) {
    return array[0];
  }
  console.log(firstArrayElement(myNumberArray));
}
console.groupEnd();

console.groupCollapsed(
  '2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.'
);
{
  function firstArrayElementRemoved(array) {
    return array.shift();
  }
  console.log(firstArrayElementRemoved(myNumberArray));
}
console.groupEnd();

console.groupCollapsed('3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  function lastArrayElement(array) {
    return array[array.length - 1];
  }
  console.log(lastArrayElement(myNumberArray));
}
console.groupEnd();

console.groupCollapsed(
  '4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.'
);
{
  function lastArrayElementRemoved(array) {
    return array.pop();
  }
  console.log(lastArrayElementRemoved(myNumberArray));
}
console.groupEnd();

console.groupCollapsed('5. Parašykite funkciją, kuri grąžina elementų kiekį masyve');
{
  function arrayElementCount(array) {
    return array.length;
  }
  console.log(arrayElementCount(myNumberArray));
}
console.groupEnd();

console.groupCollapsed(
  '6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą'
);
{
  function lastArrayElementIndex(array) {
    console.log(array.length - 1);
  }
  lastArrayElementIndex(myNumberArray);
}
console.groupEnd();

console.groupCollapsed(
  '7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis'
);
{
  function logArrayIndex(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(i);
    }
  }
  logArrayIndex(myNumberArray);
}
console.groupEnd();

console.groupCollapsed(
  '8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis'
);
{
  function logArrayValue(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }
  logArrayElements(myNumberArray);
}
console.groupEnd();

console.groupCollapsed(
  '9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  '
);
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  function logArrayIndexAndValue(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(`[${i}] => ${array[i]}`);
    }
  }
  logArray(myNumberArray);
}
console.groupEnd();

console.groupCollapsed(
  '10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.'
);
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed(
  '11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...'
);
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed(
  '12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48'
);
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed(
  '13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:'
);
//  [0]=>17 [1]=>8 [2]=>88 ..
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();
