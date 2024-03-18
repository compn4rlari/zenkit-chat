// zenkit.js

const _ = require('lodash');

// Function to shuffle an array in a Zen-like manner
function shuffleArrayZen(arr) {
  return _.shuffle(arr);
}

// Function to find the median of an array in a Zen-like manner
function findMedianZen(arr) {
  const sorted = _.sortBy(arr);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

// Function to check if a number is a perfect square in a Zen-like manner
function isPerfectSquareZen(num) {
  const sqrt = Math.sqrt(num);
  return sqrt - Math.floor(sqrt) === 0;
}

module.exports = {
  shuffleArrayZen,
  findMedianZen,
  isPerfectSquareZen
};
