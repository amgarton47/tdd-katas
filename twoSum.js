const twoSum = (numbers, target) => {
  for (let i = 0; i < numbers.length; i++) {
    const diff = target - numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] === diff) {
        return [numbers[i], numbers[j]];
      }
    }
  }
  return [];
};

module.exports = twoSum;
