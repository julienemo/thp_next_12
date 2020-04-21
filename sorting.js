const fs = require("fs");
const nonDigitalRegEx = /[^0-9-\+\s]+/g;
const fileName = process.argv[2];

// Sorting strategy counters
let bubbleCount = 0;
let insertCount = 0;
let selectCount = 0;
let quickCount = 0;

// Sorting strategies
const bubbleSort = (array) => {
  let copy = [...array];
  let s = copy.length;
  for (let i = 0; i < s; i++) {
    let shouldContinue = false;
    for (let m = i; m < s; m++) {
      bubbleCount += 1;
      if (copy[m] < copy[m + 1]) {
        shouldContinue = true;
        [copy[m], copy[m + 1]] = [copy[m + 1], copy[m]];
      }
    }
    if (!shouldContinue) {
      return copy;
    }
  }
};

const insertionSort = (array) => {
  let copy = [...array];
  let s = copy.length;
  for (let i = 0; i <= s - 1; i++) {
    let x = copy[i];
    let j = i;
    while (j > 0 && copy[j - 1] < x) {
      insertCount += 1;
      copy[j] = copy[j - 1];
      j = j - 1;
    }
    copy[j] = x;
  }
  return copy;
};

const selectionSort = (array) => {
  let copy = [...array];
  let s = copy.length;
  for (let i = 0; i < s - 2; i++) {
    let max = i;
    for (let j = i + 1; j <= s - 1; j++) {
      selectCount += 1;
      if (copy[j] > copy[max]) {
        max = j;
      }
    }
    if (max !== i) {
      [copy[i], copy[max]] = [copy[max], copy[i]];
    }
  }
  return copy;
};

const quickSort = (array, left = 0, right = array.length - 1) => {
  const partition = (array, left, right) => {
    let pivot = array[Math.floor((right + left) / 2)];
    while (left <= right) {
      while (array[left] < pivot) {
        left++;
      }
      while (array[right] > pivot) {
        right--;
      }
      if (left <= right) {
        quickCount += 1;
        [array[left], array[right]] = [array[right], array[left]];
        left++;
        right--;
      }
    }
    return left;
  };

  let copy = [...array];
  let s = copy.length;
  if (s > 1) {
    let index = partition(copy, left, right);
    // yes, it says left = 0, but I can't just replace left with 0
    // been there, it gets stuck in an infinity loop
    if (left > index - 1) {
      quickSort(copy, 0, index - 1);
    }
    if (index < right) {
      quickSort(copy, index, s - 1);
    }
  }
  return copy;
};

// general
const openFileWithCatch = (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(`${fileName} opened...`);
};

const parseArrayCatch = (data) => {
  if (nonDigitalRegEx.test(data)) {
    console.log("Non-digital character detected. Will be removed...");
  }
  let refArray = Array.from(data.replace(nonDigitalRegEx, "").split(" "));
  return refArray.map((x) => +x);
};
const printFinalArray = (array) => {
  console.log("Following array obtained...");
  console.log(array);
};

const displayResults = (array) => {
  const bubbleResult = bubbleSort(array);
  const insertResult = insertionSort(array);
  const selectResult = selectionSort(array);
  const quickResult = quickSort(array);

  const resultString = (strategy, result, count) => {
    return `${strategy} sort => [${result}] with ${count} comparisons`;
  };

  console.log("Here are the performances of different sorting strategies:");
  console.log(resultString("Bubble", bubbleResult, bubbleCount));
  console.log(resultString("Insertion", insertResult, insertCount));
  console.log(resultString("Selection", selectResult, selectCount));
  console.log(resultString("Quick", quickResult, quickCount));

  /*   console.log(`Bubble sort => ${bubbleResult} with ${bubbleCount} comparisons`);
  console.log(
    `Insertion sort => ${insertResult} with ${insertionCount} comparisons`
  );
  console.log(
    `Selection sort => ${selectResult} with ${selectionCount} comparisons `
  );
  console.log(`Quick sort => ${quickResult} with ${quickCount} comparisons `);
 */
};

// execution
fs.readFile(fileName, "utf8", (error, data) => {
  openFileWithCatch(error);
  const array = parseArrayCatch(data);
  printFinalArray(array);
  displayResults(array);
});
