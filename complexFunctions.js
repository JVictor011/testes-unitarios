const factorial = (n) => {
  if (n < 0) return undefined;
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const average = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  const sum = arr.reduce((acc, val) => acc + val, 0);
  return sum / arr.length;
};

const sortArray = (arr) => {
  if (!Array.isArray(arr)) return undefined;
  return arr.slice().sort((a, b) => a - b);
};

const binarySearch = (arr, target) => {
  if (!Array.isArray(arr)) return undefined;
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
};

module.exports = { factorial, isPrime, average, sortArray, binarySearch };
