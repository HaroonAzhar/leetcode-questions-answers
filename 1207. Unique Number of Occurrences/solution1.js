/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  counts = {};
  occurrences = {};
  arr.forEach((item, i) => {
    counts[`${item}`]
      ? (counts[`${item}`] = counts[`${item}`] + 1)
      : (counts[`${item}`] = 1);
    // console.log(`map${i}`, counts)
  });
  for (const property in counts) {
    if (occurrences[`${counts[property]}`]) return false;
    occurrences[`${counts[property]}`] = 1;
  }
  return true;
};
