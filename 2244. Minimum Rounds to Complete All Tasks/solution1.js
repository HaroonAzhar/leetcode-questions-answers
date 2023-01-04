/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function (tasks) {
  const map = {};
  tasks.forEach((item) => {
    const accessor = item + "";
    map[accessor] ? (map[accessor] = map[accessor] + 1) : (map[accessor] = 1);
  });
  let rounds = 0;
  let counter = 0;
  const values = Object.values(map);

  while (counter < values.length) {
    if (values[counter] <= 1) return -1;

    rounds += computeMinimumRounds(values[counter]);
    counter++;
  }

  return rounds;
};
function computeMinimumRounds(value) {
  remainder = value % 3;
  qoutient = (value - remainder) / 3;
  return remainder === 0 ? qoutient : qoutient + 1;
}
