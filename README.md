## Project: Sorting strategy & Homemade Algo

2020/04/21 Julie Kwok

**I'll be at the doctor's til 10h. Will be available after that for correction.**

Many thanks to [@floriansr](https://github.com/floriansr) who kindly shared one of his light-weight solutions (you'll see which one) in Part II

This project has two parts.

### Part I: Sorting Strategies

The first uses JavaScript and ruby to compare between different array sorting strategies. In the project context, the notion of efficiency is simplified by 'number of times when element a is compared to element b', aka the frequency of `a < b` pattern.

The javascript comparison counters are...approximative. Ruby doesn't have this counter: it's a bit more tricky. And most of the times I don't know where to increment ......-\_-

---

In this project, an array is given in `param.txt`. Each file sorts the same array with the 4 following strategy in descending order, prints out the result and number of comparisons.

`node sorting.js param.txt` to see JavaScript sorting result

`rspec` to test ruby sorting strategies (cases in spec)

---

#### Strategies compared

**Bubble sort - O(n²)**

For a given array, starting from first element, if the element is smaller than next, swap, otherwise continue. Then do same thing starting from second element, and so on, til each element is larger than the next element. Illustration with dance [here](https://www.youtube.com/watch?v=lyZQPjUT5B4).

**Selection sort - O(n²)**

For a given array, starting from the first element, if the element A is smaller than its next element B, let A take the original B place, let B continue to compare with each of the following elements, starting from original B place. Illustration with dance [here](https://www.youtube.com/watch?v=Ns4TPTC8whw).

**Insertion sort - STILL DON'T UNDERSTAND**

For a given array, starting from the first element, if this element A is small than its next element B, swap A and B. A stays. B compares through the beginning. Then A carries on from B's previous spot. Illustration with dance [here](https://www.youtube.com/watch?v=ROalU379l3U).

**Quick sort - STILL DON'T UNDERSTAND**

For a given array, separate from the center. Then magically some recursivity happens. Illustration with dance [here](https://www.youtube.com/watch?v=ywWBy6J5gz8).

**For more dance illustration on sorting and searching strategies, visit [this YouTube channel](https://www.youtube.com/channel/UCIqiLefbVHsOAXDAxQJH7Xw)**

---

### Part II: Homemade algo

The second solves 2 specific problems using 3 alternatives each: one with `O(n²)`, a second with `O(n)` and the third with one single iteration. The proposition for this part is in the file `exercices.js`. Run `node exercices.js` to see comparative results of 3 methods.

Subject 1: Given an array of numbers `array` and a number `sum`. Return a boolean, showing whether it is possible that any two elements in `array` can sum up to `sum`. Should be solved with nested loops, then parallel loops, then one loop.

Subject 2: Given an array of numbers, return the number of element that is larger than all elements after itself.
