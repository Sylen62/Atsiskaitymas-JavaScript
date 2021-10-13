console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
  const drinks = [
    { name: 'lemonade', price: 50 },
    { name: 'lime', price: 10 },
  ];

  function sortDrinkByPrice(first, second) {
    return first.price - second.price;
  }

  drinks.sort(sortDrinkByPrice);
  console.log(drinks);
}
console.groupEnd();

console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
  function addName(obj, name, value) {
    obj[name] = value;
    return obj;
  }
  console.log(addName({}, 'Brutus', 300));
  console.log(addName({ piano: 500 }, 'Brutus', 400));
  console.log(addName({ piano: 500, stereo: 300 }));
}
console.groupEnd();

console.groupCollapsed('3 - https://edabit.com/challenge/48EJWLhF224na8po3');
{
  const relation = {
    '-3': { m: 'great grandfather', f: 'great grandmother' },
    '-2': { m: 'grandfather', f: 'grandmother' },
    '-1': { m: 'father', f: 'mother' },
    0: { m: 'me!', f: 'me!' },
    1: { m: 'son', f: 'daughter' },
    2: { m: 'grandson', f: 'granddaughter' },
    3: { m: 'great grandson', f: 'great granddaughter' },
  };

  function generation(x, y) {
    return relation[x][y];
  }

  console.log(generation(2, 'f'));
  console.log(generation(-3, 'm'));
  console.log(generation(1, 'f'));
}
console.groupEnd();

console.groupCollapsed('4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');
{
  const titleScore = [
    { tile: 'N', score: 1 },
    { tile: 'K', score: 5 },
    { tile: 'Z', score: 10 },
    { tile: 'X', score: 8 },
    { tile: 'D', score: 2 },
    { tile: 'A', score: 1 },
    { tile: 'E', score: 1 },
  ];
  function maximumScore(tileHand) {
    return tileHand.reduce((sum, titleScore) => sum + titleScore.score, 0);
  }
  console.log(maximumScore(titleScore));
}
console.groupEnd();

console.groupCollapsed('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');
{
  function calculateDifference(obj, limit) {
    const valueArray = Object.values(obj);
    return valueArray.reduce((sum, value) => sum + value, 0) - limit;
  }
  console.log(calculateDifference({ 'baseball bat': 20 }, 5));
  console.log(calculateDifference({ skate: 10, painting: 20 }, 19));
  console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));
}
console.groupEnd();

console.groupCollapsed('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{
  function toArray(obj) {
    return Object.entries(obj);
  }
  console.log(toArray({ a: 1, b: 2 }));
  console.log(toArray({ shrimp: 15, tots: 12 }));
  console.log(toArray({}));
}
console.groupEnd();

console.groupCollapsed('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{
  function inkLevels(inks) {
    const inkValues = Object.values(inks);
    const maxPages = Math.min(...inkValues);
    return maxPages;
  }
  console.log(
    inkLevels({
      cyan: 23,
      magenta: 12,
      yellow: 10,
    })
  );
  console.log(
    inkLevels({
      cyan: 432,
      magenta: 543,
      yellow: 777,
    })
  );
  console.log(
    inkLevels({
      cyan: 700,
      magenta: 700,
      yellow: 0,
    })
  );
}
console.groupEnd();

console.groupCollapsed('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{
  const stolenItems = {
    tv: 30,
    skate: 20,
    stereo: 50,
  };

  // const stolenItems = {
  //   painting: 20000,
  // };

  // const stolenItems = {};

  function calculateLosses(obj) {
    const itemValues = Object.values(obj);
    if (itemValues.length == 0) {
      return 'Lucky you!';
    }
    return itemValues.reduce((sum, value) => sum + value, 0);
  }
  console.log(calculateLosses(stolenItems));
}
console.groupEnd();
