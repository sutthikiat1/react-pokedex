function getNumbers(inputString) {
  var regex = /\d+\.\d+|\.\d+|\d+/g,
    results = [],
    n;

  while ((n = regex.exec(inputString))) {
    results.push(parseFloat(n[0]));
  }

  return results;
}

export const CalculateHp = (hp) => {
  if (hp > 100) return 100;
  return hp;
};

export const CalculateStrength = (attacks) => {
  return attacks.length * 50;
};

export const CalculateWeakness = (weaknesses) => {
  let result = weaknesses.length * 50;
  if (result > 100) return 100;
  return result;
};

export const CalculateDamage = (attacks) => {
  let result_damage = 0;
  attacks.map((attack) => {
    let attack_damage = attack.damage;
    let damageCovertNumber = getNumbers(attack_damage);

    if (damageCovertNumber.length > 0) {
      result_damage += damageCovertNumber[0];
    }
    return result_damage;
  });

  if (result_damage) {
    return result_damage;
  } else {
    return 0;
  }
};

export const CalculateHappiness = (hp, damage, weakness, name) => {
  let weak_percen = weakness / 100;
  return (hp / 10 + damage / 10 + 10 - weak_percen) / 5;
};
