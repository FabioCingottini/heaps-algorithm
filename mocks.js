const threeFactorial = 3 * 2;
const threeDimensionArr = [1, 2, 3];
const threeDimensionsPermutations = [
  [1, 2, 3],
  [2, 1, 3],
  [3, 1, 2],
  [1, 3, 2],
  [2, 3, 1],
  [3, 2, 1],
];

const fourFactorial = 4 * 3 * 2;
const fourDimensionArr = [1, 2, 3, 4]
const fourDimensionsPermutations = [
  [1, 2, 3, 4],
  [2, 1, 3, 4],
  [3, 1, 2, 4],
  [1, 3, 2, 4],
  [2, 3, 1, 4],
  [3, 2, 1, 4],
  [3, 2, 4, 1],
  [2, 3, 4, 1],
  [4, 3, 2, 1],
  [3, 4, 2, 1],
  [2, 4, 3, 1],
  [4, 2, 3, 1],
  [4, 1, 3, 2],
  [1, 4, 3, 2],
  [3, 4, 1, 2],
  [4, 3, 1, 2],
  [1, 3, 4, 2],
  [3, 1, 4, 2],
  [2, 1, 4, 3],
  [1, 2, 4, 3],
  [4, 2, 1, 3],
  [2, 4, 1, 3],
  [1, 4, 2, 3],
  [4, 1, 2, 3]
];

module.exports = {
  threeFactorial,
  threeDimensionArr,
  threeDimensionsPermutations,
  fourFactorial,
  fourDimensionArr,
  fourDimensionsPermutations,
}