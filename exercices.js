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
// O(n) UGLY!
const arrayHasSumON = (array, sum) => {
  // see whether there are duplicates
  let freqObj = {};
  for (i = 0; i < array.length; i++) {
    if (freqObj[array[i]] === undefined) {
      freqObj[array[i]] = 1;
    } else {
      freqObj[array[i]] += 1;
    }
  }
  // if duplicates, and if happens to be half of sum, bingo
  if (freqObj[sum / 2] >= 2) {
    return true;
  }
  // else
  let keys = Object.keys(freqObj).map((x) => +x);
  for (i = 0; i < array.length; i++) {
    if (keys.includes(sum - array[i]) && array[i] * 2 !== sum) {
      return true;
    }
  }
  return false;
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

// O(n) : solution kindly shared by Florian S
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

// one single iteration (you said one single loop but not O(n)!!)
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

console.log(arrayHasSumON2([1, 2, 3, 4, 5], 6));
console.log(arrayHasSumON([1, 2, 3, 4, 5], 6));
console.log(arrayHasSumSingleIte([1, 2, 3, 4, 5], 6));

console.log(arrayHasSumON2([1, 2, 3, 4, 5], 10));
console.log(arrayHasSumON([1, 2, 3, 4, 5], 10));
console.log(arrayHasSumSingleIte([1, 2, 3, 4, 5], 10));

console.log(arrayHasSumON2([10, 15, 3, 7], 17));
console.log(arrayHasSumON([10, 15, 3, 7], 17));
console.log(arrayHasSumSingleIte([10, 15, 3, 7], 17));

console.log(arrayHasSumON2([1, 8, 10, 21], 19));
console.log(arrayHasSumON([1, 8, 10, 21], 19));
console.log(arrayHasSumSingleIte([1, 8, 10, 21], 19));

console.log(arrayHasSumON2([1, 2, 3, 5, 5], 10));
console.log(arrayHasSumON([1, 2, 3, 5, 5], 10));
console.log(arrayHasSumSingleIte([1, 2, 3, 5, 5], 10));

//#################

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
