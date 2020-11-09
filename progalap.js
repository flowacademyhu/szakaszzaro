const nyolcadikFeladat = require('./modul');

// 1. adattípusok
// egyszerű adattípusok:
// string
const name = 'Feri';
// szám
const age = 23;
// logikai v boolean
const isFemale = false;

// összetett adattípusok
// tömb
const array = [1, 2, 3, 5];

// objects: kulcsértékpárok
const human = {
  name: 'Feri',
  age: 23
};

console.log(human);

// 2
// let: az értéke később változtatható
// const: nem változik az értéke

// 3.Referencia szerint: ha valamit változtatunk rajta, akkor az eredeti érték is változni fog
// pl tömböknél

array.push(4);
console.log(array);
// Érték szerint: nem változik az eredeti értéke, az egyszerű adattípusoknál
console.log(age + 2);

// 4.
console.log('contains');
const contains = (src, element) => {
  for (let i = 0; i < src.length; i++) {
    if (element === src[i]) {
      return true;
    }
  } return false;
};
const contains5 = contains(array, 5);
console.log(contains5);

// 5.
const findOldest = (humanArray) => {
  let oldest = humanArray[0];
  for (let i = 0; i < humanArray.length; i++) {
    for (let j = 0; j < humanArray[i].length; j++) {
      if (humanArray[i].age > humanArray[0].age) { oldest = humanArray[i]; }
    }
  }
  return oldest.name;
};
console.log(findOldest());

// 6.poz, kétjegyű

const div2 = () => {
  const nums = [];
  for (let i = 10; i < 100; i++) {
    if (i % 2 === 0) {
      nums.push(i);
    }
  } return nums;
};

console.log(div2());

// 7. Metszet
const metszet = (array1, array2) => {
  const arrayközös = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        arrayközös.push(array1[i]);
      }
    }
  }
  return arrayközös;
};
console.log(metszet([1, 2, 3, 4, 5, 6], [4, 5, 6]));

// 9. 2D array

const gen2D = (sor, oszlop) => {
  const kulsoTomb = [];
  for (let i = 0; i < oszlop; i++) {
    kulsoTomb.push([]);
    for (let j = 0; j < sor; j++) {
      kulsoTomb[i].push(i * j);
    }
  }
  return kulsoTomb;
};
console.log(gen2D(3, 3))
;
