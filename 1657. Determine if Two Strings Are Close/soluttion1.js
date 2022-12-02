/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false;
  const set1 = new Array(26).fill(0);
  const set2 = new Array(26).fill(0);

  for (let i = 0; i < word1.length; i++) {
    set1[word1[i].charCodeAt() - "a".charCodeAt()]++;
    set2[word2[i].charCodeAt() - "a".charCodeAt()]++;
  }
  for (let i = 0; i < set1.length; i++) {
    if ((set1[i] && !set2[i]) || (!set1[i] && set2[i])) return false;
  }

  set1.sort((a, b) => b - a);
  set2.sort((a, b) => b - a);
  let j = 0;
  while (j < set1.length) {
    if (set1[j] !== set2[j]) return false;
    if (set1[j] <= 0 && set2[j] <= 0) break;
    j++;
  }
  return true;
};
