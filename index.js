function hasTargetSum(array, target) {
  const complements = new Set();

  for (const num of array) {
    const complement = target - num;

    if (complements.has(num)) {
      return true;
    }

    complements.add(complement);
  }

  return false;
}

module.exports = hasTargetSum;
