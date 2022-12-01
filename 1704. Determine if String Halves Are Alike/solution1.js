/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  g = s.toLowerCase();
  let c1 = 0;
  let c2 = 0;
  let c = 0;
  let vowel = ["a", "e", "i", "o", "u"];
  while (c < g.length) {
    isVowel = vowel.includes(g[c]);
    if (isVowel) {
      c < g.length / 2 ? (c1 += 1) : (c2 += 1);
    }
    c++;
  }
  return c1 === c2;
};
