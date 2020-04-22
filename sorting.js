const fs = require("fs");
const nonDigitalRegEx = /[^0-9-\+\s]+/g;
const fileName = process.argv[2];

// Sorting strategy counters
let bubbleCount = 0;
let insertCount = 0;
let selectCount = 0;
let quickCount = 0;
let mergeCount = 0;

// Sorting strategies
const bubbleSort = (array) => {
  let copy = [...array];
  let s = copy.length - 1;
  for (let i = 0; i < s; i++) {
    let shouldContinue = false;
    for (let m = 0; m < s; m++) {
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
  let s = array.length;
  for (let i = s - 2; i >= 0; i--) {
    let x = array[i];
    let j = i;
    while (j < s - 1 && array[j + 1] > x) {
      insertCount += 1;
      array[j] = array[j + 1];
      j += 1;
    }
    array[j] = x;
  }
  return array;
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
      while (array[left] > pivot) {
        quickCount += 1;
        left++;
      }
      while (array[right] < pivot) {
        quickCount += 1;
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

  let s = array.length;
  // normally I make a copy and alter the copy
  // doesn't work here coz the function is recursive.
  if (s > 1) {
    let index = partition(array, left, right);
    // yes, it says left = 0, but I can't just replace left with 0
    // been there, it gets stuck in an infinity loop
    if (left < index - 1) {
      quickSort(array, left, index - 1);
    }
    if (index < right) {
      quickSort(array, index, right);
    }
  }
  return array;
};

const mergeSort = (array) => {
  if (array.length > 1) {
    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid + 1);
    mergeSort(left);
    mergeSort(right);
    let i = 0;
    let k = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
      mergeCount++;
      if (left[i] > right[j]) {
        array[k] = left[i];
        i++;
      } else {
        array[k] = right[j];
        j++;
      }
      k++;
    }
    while (i < left.length) {
      mergeCount++;
      array[k] = left[i];
      i++;
      k++;
    }
    while (j < right.length) {
      mergeCount++;
      array[k] = right[j];
      j++;
      k++;
    }
  }
  return array;
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
  const bubbleResult = bubbleSort([...array]);
  const insertResult = insertionSort([...array]);
  const selectResult = selectionSort([...array]);
  const quickResult = quickSort([...array]);
  const mergeResult = mergeSort([...array]);

  const resultString = (strategy, result, count) => {
    return `${strategy} sort => [${result}] with ${count} comparisons`;
  };

  console.log("Here are the performances of different sorting strategies:");
  console.log(resultString("Bubble", bubbleResult, bubbleCount));
  console.log(resultString("Insertion", insertResult, insertCount));
  console.log(resultString("Selection", selectResult, selectCount));
  console.log(resultString("Quick", quickResult, quickCount));
  console.log(resultString("Merge", mergeResult, mergeCount));
};

// execution
fs.readFile(fileName, "utf8", (error, data) => {
  openFileWithCatch(error);
  array = parseArrayCatch(data);
  printFinalArray(array);
  displayResults(array);
});
