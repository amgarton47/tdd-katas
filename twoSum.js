const twoSum = (numArr, target) => {
  for (let i = 0; i < numArr.length; i++) {
    let diff = target - numArr[i];
    for (let j = i + 1; j < numArr.length; j++) {
      if (numArr[j] === diff) {
        return [numArr[i], numArr[j]];
      }
    }
  }
  return [];
};

module.exports = twoSum;
