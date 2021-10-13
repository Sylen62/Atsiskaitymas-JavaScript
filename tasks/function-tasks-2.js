//* ----------------------Užduotys--------------------------
const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];

console.group('1. Padauginti masyvo narius iš 2');
console.log('---');
{
  function mulArrBy2(array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(array[i] * 2);
    }
    return result;
  }
  console.log({
    numbers,
    result: mulArrBy2(numbers),
    result2: numbers.map((x) => x * 2),
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('2. Pakelti masyvo narius kvadratu');
console.log('---');
{
  function powerArrBy2(array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(array[i] ** 2);
    }
    return result;
  }
  console.log({
    numbers,
    result: powerArrBy2(numbers),
    result2: numbers.map((x) => x ** 2),
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group("3. Padauginti masyvo narius iš jų index'o (vietos masyve)");
console.log('---');
{
  function mulArrElementsByIndex(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i] * i);
    }
    return result;
  }
  console.log({
    numbers,
    result: mulArrElementsByIndex(numbers),
    result2: numbers.map((x, i) => x * i),
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('4. Atrinkti tiktai teigimų elementų masyvą');
console.log('---');
{
  function filterPositives(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  console.log({
    numbers,
    result: filterPositives(numbers),
    result2: numbers.filter((x) => x > 0),
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('5. Atrinkti tiktai neigiamų elementų masyvą');
console.log('---');
{
  function filterNegatives(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  console.log({
    numbers,
    result: filterNegatives(numbers),
    result2: numbers.filter((x) => x < 0),
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('6. Atrinkti tiktai lyginių skaičių masyvą');
console.log('---');
{
  function filterEquals(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  console.log({
    numbers,
    result: filterEquals(numbers),
    result2: numbers.filter((x) => x % 2 === 0),
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('7. Atrinkti tiktai nelyginių skaičių masyvą');
console.log('---');
{
  function filterOdds(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  console.log({
    numbers,
    result: filterOdds(numbers),
    result2: numbers.filter((x) => x % 2 !== 0),
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('8. Visas neigiamas vertes masyve padaryti teigiamomis');
{
  function arrAbsoluteValues(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        result.push(-1 * arr[i]);
      }
    }
    return result;
  }

  console.log('---');
  console.log({
    numbers,
    result: arrAbsoluteValues(numbers),
    // result2: numbers.map((x) => (x < 0 ? -1 * x : x)),
    result3: numbers.filter((x) => x < 0).map((x) => x * -1),
  });
  console.log('---');
}
console.groupEnd();
console.log();

console.group("9. Pakelti visas masyvo reikšmes laipsniu 'index'");
console.log('---');
{
  function powArrElementsByIndex(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i] ** i);
    }
    return result;
  }
  console.log({
    numbers,
    result: powArrElementsByIndex(numbers),
    result2: numbers.map((x, i) => x ** i),
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('10. Atrinkti tik natūralių skaičių masyvą');
console.log('---');
{
  function filterNaturals(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0 && arr[i] % 1 === 0) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  console.log({
    numbers,
    result: filterNaturals(numbers),
    result2: numbers.filter((x) => x > 0 && x % 1 === 0 && x),
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('11. Suapvalinti visas masyvo reikšmes iki sveikų skaičių');
console.log('---');
{
  function absArrElements(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(Math.floor(arr[i]));
    }
    return result;
  }
  console.log({
    numbers,
    result: absArrElements(numbers),
    result2: numbers.map((x) => Math.floor(x)),
  });
}
console.log('---');
console.groupEnd();

console.group('12. Atrinkti kas antrą elementą');
console.log('---');
{
  function filterEverySecond(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i += 2) {
      result.push(arr[i]);
    }
    return result;
  }
  console.log({
    numbers,
    result: filterEverySecond(numbers),
    result2: numbers.filter((x, i) => i % 2 === 0),
  });
}
console.log('---');
console.groupEnd();

console.group('13. Atrinkti kas penktą elementą');
console.log('---');
{
  function filterEveryFifth(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i += 5) {
      result.push(arr[i]);
    }
    return result;
  }
  console.log({
    numbers,
    result: filterEveryFifth(numbers),
    result2: numbers.filter((_, i) => i % 5 === 0),
  });
}
console.log('---');
console.groupEnd();

console.group(
  '14. Sukurti funkciją, kuri ima masyvą ir atspausdina kiekvieną jo reikšmę atskirai: [0] => 64. (nieko negrąžina)'
);
console.log('---');
{
  function printArr(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(`[${i}] => ${arr[i]}`);
    }
  }
  printArr(numbers);
  console.log('-------------');
  numbers.forEach((x, i) => console.log(`[${i}] => ${x}`));
}
console.log('---');
console.groupEnd();

console.group('15. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų sumą');
console.log('---');
{
  function sumArr(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
    }
    return result;
  }

  console.log({
    numbers,
    result: sumArr(numbers),
    result2: numbers.reduce((base, x) => base + x, 0),
  });
}
console.log('---');
console.groupEnd();

console.group('16. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų vidurkį');
console.log('---');
{
  function avgArr(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
    }
    return result / arr.length;
  }

  console.log({
    numbers,
    result: avgArr(numbers),
    result2: numbers.reduce((base, x) => base + x / 2, 0),
  });
}
console.log('---');
console.groupEnd();

console.group('17. Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve.');
console.log('---');
{
  function arrMax(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
      if (max < arr[i]) {
        max = arr[i];
      }
    }
    return max;
  }

  console.log({
    numbers,
    result: arrMax(numbers),
    result2: numbers.reduce((base, x) => (base < x ? x : base)),
  });
}
console.log('---');
console.groupEnd();

console.group('18. Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve.');
console.log('---');
{
  function arrMin(arr) {
    let min = 0;
    for (let i = 0; i < arr.length; i++) {
      if (min > arr[i]) {
        min = arr[i];
      }
    }
    return min;
  }

  console.log({
    numbers,
    result: arrMin(numbers),
    result2: numbers.reduce((base, x) => (base > x ? x : base)),
  });
}
console.log('---');
console.groupEnd();
