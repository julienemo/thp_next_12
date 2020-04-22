// #############################################################
// subject 1
// O(n²)
const arrayHasSumON2 = (array, sum) => {
  let result = false;
  let s = array.length - 1;
  for (let i = 0; i < s; i++) {
    for (let m = i + 1; m <= s; m++) {
      if (array[m] + array[i] === sum) {
        return true;
      }
    }
  }
  return result;
};

// one single iteration
const arrayHasSumSingleIte = (array, sum) => {
  let result = false;
  let s = array.length - 1;
  for (let i = 0; i <= s; i++) {
    if (array.slice(i + 1).includes(sum - array[i])) {
      return true;
    }
  }
  return result;
};

// #############################################################
// subject 2
// O(n²)
const numberWithViewON2 = (array) => {
  let result = array.length;
  let s = array.length - 1;
  for (let i = 0; i < s; i++) {
    for (let m = i + 1; m <= s; m++) {
      if (array[i] < array[m]) {
        result -= 1;
        break;
      }
    }
  }
  return result;
};
// one single iteration
const numberWithViewSingleIte = (array) => {
  let s = array.length - 1;
  let result = 1;
  for (let i = 0; i < s; i++) {
    if (
      array[i] >
      array
        .slice(i + 1)
        .sort()
        .reverse()[0]
    ) {
      result += 1;
    }
  }
  return result;
};

// #############################################################
// results

/* console.log(arrayHasSumON2([1, 2, 3, 4, 5], 6));
console.log(arrayHasSumSingleIte([1, 2, 3, 4, 5], 6));

console.log(arrayHasSumON2([1, 2, 3, 4, 5], 10));
console.log(arrayHasSumSingleIte([1, 2, 3, 4, 5], 10));

console.log(arrayHasSumON2([10, 15, 3, 7], 17));
console.log(arrayHasSumSingleIte([10, 15, 3, 7], 17));

console.log(arrayHasSumON2([1, 8, 10, 21], 19));
console.log(arrayHasSumSingleIte([1, 8, 10, 21], 19)); */

//#################
const buildingWithViewFlo = (array) => {
  let count = 1;
  let s = array.length - 1;
  let pseudo_min = array[s];
  for (let i = s; i > 0; i--) {
    if (array[i - 1] > pseudo_min) {
      count += 1;
      pseudo_min = array[i - 1];
    }
  }
  return count;
};

console.log(numberWithViewON2([1, 2, 3, 4, 5]));
console.log(numberWithViewSingleIte([1, 2, 3, 4, 5]));
console.log(buildingWithViewFlo([1, 2, 3, 4, 5]));

console.log(numberWithViewON2([5, 4, 3, 2, 1]));
console.log(numberWithViewSingleIte([5, 4, 3, 2, 1]));
console.log(buildingWithViewFlo([5, 4, 3, 2, 1]));

console.log(numberWithViewON2([1, 3, 5, 2, 4]));
console.log(numberWithViewSingleIte([1, 3, 5, 2, 4]));
console.log(buildingWithViewFlo([1, 3, 5, 2, 4]));

console.log(numberWithViewON2([4, 1, 5, 3, 2]));
console.log(numberWithViewSingleIte([4, 1, 5, 3, 2]));
console.log(buildingWithViewFlo([4, 1, 5, 3, 2]));

console.log(numberWithViewON2([3, 7, 8, 3, 6, 1]));
console.log(numberWithViewSingleIte([3, 7, 8, 3, 6, 1]));
console.log(buildingWithViewFlo([3, 7, 8, 3, 6, 1]));
