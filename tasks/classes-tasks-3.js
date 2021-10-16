console.groupCollapsed('https://edabit.com/challenge/2FF7RKw9RLwc3EBY9');
{
  class Challenge {
    // Build class Challenge: constructor + getter
    static #levels = {
      VE: 5,
      EA: 10,
      ME: 20,
      HA: 40,
      VH: 80,
      EX: 120,
    };

    constructor(id, level) {
      this.id = id;
      this.level = level;
    }

    get points() {
      return Challenge.#levels[this.level];
    }
  }

  class User {
    // Build class User: constructor + setter
    constructor(name, xp, log) {
      this.name = name;
      this.xp = xp;
      this.log = log;
    }

    /** Nezinau kodel, VS Code taise
     * @param {{ points: any; id: any; }} challenge
     */
    set newSolvedChallenge({ id, points }) {
      this.xp += points;
      this.log.push(id);
    }
  }

  // 1. Declare the class instances (two users and six challenges)
  const user1 = new User('Madam', 0, []);
  const user2 = new User('Steve', 0, []);
  // 2. Set the challenges solved by the users
  const challenge1 = new Challenge(1, 'VE');
  const challenge2 = new Challenge(2, 'EA');
  const challenge3 = new Challenge(3, 'ME');
  const challenge4 = new Challenge(4, 'HA');
  const challenge5 = new Challenge(5, 'VH');
  const challenge6 = new Challenge(6, 'EX');

  user1.newSolvedChallenge = challenge1;
  user1.newSolvedChallenge = challenge4;
  user1.newSolvedChallenge = challenge6;
  user2.newSolvedChallenge = challenge5;
  user2.newSolvedChallenge = challenge3;
  user2.newSolvedChallenge = challenge2;

  console.log({
    Madam: user1.name,
    110: user2.xp,
    '[1, 4, 6]': user1.log,
    HA: challenge4.level,
    3: challenge3.id,
    5: challenge1.points,
  });
}
console.groupEnd();

console.groupCollapsed('https://edabit.com/challenge/ifDM26p25bqS8EsFu');
{
  class Player {
    #hp = 0;
    #en = 0;
    #maxHp = 0;
    #maxEn = 0;

    constructor(name, hp, en, armor) {
      this.name = name;
      this.#hp = hp;
      this.#maxHp = hp;
      this.#en = en;
      this.#maxEn = en;
      this.armor = armor;
    }

    set hp(health) {
      health < 0 ? (this.#hp = 0) : health > this.#maxHp ? (this.#hp = this.#maxHp) : (this.#hp = health);
    }

    get hp() {
      return this.#hp;
    }

    set en(energy) {
      energy < 0 ? (this.#en = 0) : energy > this.#maxEn ? (this.#en = this.#maxEn) : (this.#en = energy);
    }

    get en() {
      return this.#en;
    }

    get hpPerc() {
      return ((this.#hp / this.#maxHp) * 100).toFixed(2);
    }

    skills = {};
    learnSkill(skillName, { damage, desc, penetration, cost, heal }) {
      let battleResult = '';
      this[skillName] = function (target) {
        // Patikrinti ar užtenka energijos puolimui
        if (this.en < cost) return `${this.name} attempted to use ${skillName}, but didn't have enough energy!`;

        // Jei užtenka atimti panaudota energiją iš esamos
        this.en -= cost;

        // Nustatoma kiek sumažės taikinio šarvai prieš puolant.
        let effectiveArmor = target.armor - penetration;
        // Patikrinama ar like šarvai ne mažiau už 0 ir ne daugiau už 100
        effectiveArmor < 0 ? (effectiveArmor = 0) : effectiveArmor > 100 && (effectiveArmor = 100);

        // Apskaičiuojama kiek žalos padarys ataka atskaičiavus šarvus
        let damageToTarget = (damage * ((100 - effectiveArmor) / 100)).toFixed(2);

        // Iš taikinio gyvybių atemama žalos reikšmė
        target.hp -= damageToTarget;

        // Pradinis kovos rezultatas
        battleResult = `${this.name} used ${skillName}, ${desc}, against ${target.name}, doing ${damageToTarget} damage!`;

        // Jeigu puolėjui pridedama gyvybių. Papildomas kovos rezultatas pridėtomis gyvybėmis
        heal > 0 && (this.hp += heal) && (battleResult += ` ${this.name} healed for ${heal} health!`);

        // Papildomas kovos rezultatas pagal likusias taikinio gyvybes
        target.hp === 0
          ? (battleResult += ` ${target.name} died. `)
          : (battleResult += ` ${target.name} is at ${target.hpPerc}% health.`);

        return battleResult;
      };
    }
  }

  const alice = new Player('Alice', 110, 50, 10);
  const bob = new Player('Bob', 100, 60, 20);

  console.log({ alice, bob });

  alice.learnSkill('fireball', {
    damage: 23,
    penetration: 1.2,
    heal: 5,
    cost: 15,
    desc: 'a firey magical attack',
  });

  console.log(alice.fireball(bob));
  // Alice used fireball, a firey magical attack, against Bob, doing
  // 18.68 damage! Alice healed for 5 health! Bob is at 81.32% health.

  bob.learnSkill('superbeam', {
    damage: 200,
    penetration: 50,
    heal: 50,
    cost: 75,
    desc: 'an overpowered attack, pls nerf',
  });

  console.log(bob.superbeam(alice));
  // Bob attempted to use superbeam, but didn't have enough energy!

  bob.learnSkill('Meteor Strike', {
    damage: 118,
    penetration: 4,
    heal: 5,
    cost: 20,
    desc: 'an attack that basically ends the game (gg)',
  });

  console.log(bob['Meteor Strike'](alice));
}
console.groupEnd();
