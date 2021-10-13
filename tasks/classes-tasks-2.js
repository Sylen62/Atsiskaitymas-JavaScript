console.groupCollapsed('1. - https://edabit.com/challenge/ZngT4zDckDugt2JGY');
{
  class Player {
    constructor(name, age, height, weight) {
      this.name = name;
      this.age = age;
      this.height = height;
      this.weight = weight;
    }

    getAge() {
      return `${this.name} is age ${this.age}`;
    }

    getHeight() {
      return `${this.name} is ${this.height}cm`;
    }

    getWeight() {
      return `${this.name} weighs ${this.weight}kg`;
    }
  }

  const p1 = new Player('David Jones', 25, 175, 75);

  console.log({
    'David Jones is age 25': p1.getAge(),
    'David Jones is 175cm': p1.getHeight(),
    'David Jones weighs 75kg': p1.getWeight(),
  });
}
console.groupEnd();

console.groupCollapsed('2. - https://edabit.com/challenge/yxKoCKemzacK6PECM');
{
  class Calculator {
    add(first, second) {
      return first + second;
    }

    subtract(first, second) {
      return first - second;
    }

    multiply(first, second) {
      return first * second;
    }

    divide(first, second) {
      return first / second;
    }
  }

  const calculator = new Calculator();

  console.log({
    15: calculator.add(10, 5),
    5: calculator.subtract(10, 5),
    50: calculator.multiply(10, 5),
    2: calculator.divide(10, 5),
  });
}
console.groupEnd();

console.groupCollapsed('3. - https://edabit.com/challenge/kGLhgwGaLJsCMS7wS');
{
  class Employee {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.fullname = `${this.firstname} ${this.lastname}`;
      this.email = `${this.firstname.toLowerCase()}.${this.lastname.toLowerCase()}@company.com`;
    }
  }

  const emp1 = new Employee('John', 'Smith');
  const emp2 = new Employee('Mary', 'Sue');
  const emp3 = new Employee('Antony', 'Walker');

  console.log({
    'John Smith': emp1.fullname,
    'mary.sue@company.com': emp2.email,
    Antony: emp3.firstname,
  });
}
console.groupEnd();

console.groupCollapsed('4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu');
{
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    compareAge(other) {
      return this.age === other.age
        ? `${other.name} is the same age as me.`
        : this.age < other.age
        ? `${other.name} is older than me.`
        : `${other.name} is younger than me.`;
    }
  }

  const p1 = new Person('Samuel', 24);
  const p2 = new Person('Joel', 36);
  const p3 = new Person('Lily', 24);

  console.log({
    'Joel is older than me.': p1.compareAge(p2),
    'Samuel is younger than me.': p2.compareAge(p1),
    'Lily is the same age as me.': p1.compareAge(p3),
  });
}
console.groupEnd();

console.groupCollapsed('5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ');
{
  class Circle {
    constructor(radius) {
      this.radius = radius;
    }
    getArea() {
      return Math.PI * this.radius ** 2;
    }
    getPerimeter() {
      return 2 * (Math.PI * this.radius);
    }
  }

  let circy1 = new Circle(11);
  console.log(circy1.getArea());
  // Should return 380.132711084365

  let circy2 = new Circle(4.44);
  console.log(circy2.getPerimeter());
  // Should return 27.897342763877365

  // unquote and use run to test these cases:

  let q = new Circle(4.44);
  console.log({
    getArea: q.getArea(),
    getPerimeter: q.getPerimeter(),
  });
}
console.groupEnd();

console.groupCollapsed('6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b');
{
  class Name {
    constructor(fname, lname) {
      this.fname = fname[0].toUpperCase() + fname.slice(1).toLowerCase();
      this.lname = lname[0].toUpperCase() + lname.slice(1).toLowerCase();
      this.fullname = `${this.fname} ${this.lname}`;
      this.initials = `${this.fname[0]}.${this.lname[0]}`;
    }
  }

  const a1 = new Name('john', 'SMITH');

  console.log({
    John: a1.fname,
    Smith: a1.lname,
    'John Smith': a1.fullname,
    'J.S': a1.initials,
  });
}
console.groupEnd();

console.groupCollapsed('7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke');
{
  class IceCream {
    constructor(flavor, numSprinkles) {
      this.flavor = flavor;
      this.numSprinkles = numSprinkles;
    }
  }

  // const flavors = {
  //   Plain: 0,
  //   Vanilla: 5,
  //   ChocolateChip: 5,
  //   Strawberry: 10,
  //   Chocolate: 10,
  // };

  // function sweetestIcecream(array) {
  //   let max = 0;
  //   let current = 0;
  //   for (let i = 0; i < array.length; i++) {
  //     current = flavors[array[i].flavor] + array[i].numSprinkles;
  //     if (current > max) {
  //       max = current;
  //     }
  //   }
  //   return max;
  // }

  function sweetestIcecream(array) {
    const flavors = {
      Plain: 0,
      Vanilla: 5,
      ChocolateChip: 5,
      Strawberry: 10,
      Chocolate: 10,
    };

    const max = Math.max(...array.map((x) => flavors[x.flavor] + x.numSprinkles));

    return max;
  }

  ice1 = new IceCream('Chocolate', 13); // value of 23
  ice2 = new IceCream('Vanilla', 0); // value of 5
  ice3 = new IceCream('Strawberry', 7); // value of 17
  ice4 = new IceCream('Plain', 18); // value of 18
  ice5 = new IceCream('ChocolateChip', 3); // value of 8

  console.log({
    23: sweetestIcecream([ice1, ice2, ice3, ice4, ice5]),
    17: sweetestIcecream([ice3, ice5]),
  });
}
console.groupEnd();

console.groupCollapsed('8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi');
{
  class OnesThreesNines {
    constructor(number) {
      this.number = number;
      this.nines = Math.floor(this.number / 9);
      this.threes = Math.floor(this.number / 3);
      this.ones = this.number / 1;
    }
  }

  const n1 = new OnesThreesNines(5);

  console.log({
    'Nines - 0': n1.nines,
    'Threes - 1': n1.threes,
    'Ones - 5': n1.ones,
  });
}
console.groupEnd();

console.groupCollapsed('9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp');
{
  class User {
    static userCount = 0;
    constructor(username) {
      this.username = username;
      User.userCount++;
    }
  }

  u1 = new User('johnsmith10');
  console.log(User.userCount);

  u2 = new User('marysue1989');
  console.log(User.userCount);

  u3 = new User('milan_rodrick');
  console.log(User.userCount);
}
console.groupEnd();

console.groupCollapsed('10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn');
{
  function Book(title, author) {
    this.title = title;
    this.author = author;
    this.getTitle = () => `Title: ${this.title}`;
    this.getAuthor = () => `Author: ${this.author}`;
  }

  // Instantiate your Book constructor here
  const HP = new Book('Harry Potter', 'J.K. Rowling');
  const PP = new Book('Pride and Prejudice', 'Jane Austen');
  const H = new Book('Hamlet', 'William Shakespeare');
  const WP = new Book('War and Peace', 'Leo Tolstoy');

  console.log({
    'Harry Potter': HP.title,
    'J.K. Rowling': HP.author,
    'Title: Harry Potter': HP.getTitle(),
    'Author: J.K. Rowling': HP.getAuthor(),
  });
}
console.groupEnd();
