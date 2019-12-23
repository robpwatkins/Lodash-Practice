var _ = require('lodash');
const assert = require('assert');

const strNums = [
  "1","4","1","5","9","2","6","5","3",
  "5","8","9","7","9","3","2","3","8",
  "4","6","2","6","4","3","3","8","3",
  "2","7","9","5","0","2","8","8","4"
];

const aFewNums = [4, 1, 2, 3];
const numsInOrder = [1, 2, 3, 4];
const aFewLetters = ['a', 'b', 'c'];




// _.chunk()

function chunk(arr, num) {
  return _.chunk(arr, num);
}

console.log(chunk(strNums, 5));

// _.reverse()

function reverse(arr) {
  return _.reverse(arr)
}

console.log(reverse(aFewNums));

// _.without()

function without(arr, num) {
  return _.without(arr, num)
}

console.log(without(aFewNums, 1));

// _.shuffle()

function shuffle(arr) {
  return _.shuffle(arr);
}

console.log(shuffle(numsInOrder));

// _.drop()

function drop(arr, num) {
  return _.drop(arr, num);
}

console.log(drop(numsInOrder, 1));



// tests

if (typeof describe === 'function') {
  describe('chunk', () => {
    it('should return an array of arrays the size of the chunk number', () => {
      const array = chunk(strNums, 5);
      assert.equal(
        array[0].length, 5
      );
    });
  });
} else {
  console.log(chunk(strNums, 5));
}

if (typeof describe === 'function') {
  describe('reverse', () => {
    it('should return an array in reverse order of its original', () => {
      const array = reverse(aFewLetters);
      assert.deepEqual(
        array, ['c', 'b', 'a'] 
      );
    });
  });
} else {
  console.log(reverse(numsInOrder));
}

if (typeof describe === 'function') {
  describe('without', () => {
    it('should return an array with specified number(s) eliminated', () => {
      const array = without(aFewNums, 1);
      assert.deepEqual(
        array, [3, 2, 4] 
      );
    });
  });
} else {
  console.log(without(aFewNums, 1));
}

if (typeof describe === 'function') {
  describe('shuffle', () => {
    it('should return an array with elements in a different order', () => {
      const array = shuffle(numsInOrder);
      assert.notEqual(
        array, [4, 1, 2, 3]
      );
    });
  });
} else {
  console.log(shuffle(aFewNums));
}

if (typeof describe === 'function') {
  describe('drop', () => {
    it('should return an array with specified amount of elements removed from front', () => {
      const array = drop(numsInOrder, 1);
      assert.deepEqual(
        array, [2, 3, 4]
      );
    });
  });
} else {
  console.log(drop(numsInOrder));
}