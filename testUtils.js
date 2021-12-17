/**
 * An util function that returns true if all the possible
 * permutations of a certain array are calculated.
 *
 * @template T
 * @param {Array<Array<T>>} possiblePermutations - An array containing all the possible permutations of a certain array
 * @param {Array<Array<T>>} calculatedPermutations - An array containing all the calculated permutations of a certain array
 * @return {boolean}
 */
function checkIfIsEveryPossiblePermutationCalculated(possiblePermutations, calculatedPermutations) {
  return possiblePermutations.every(pp => {
    return calculatedPermutations.some(cp => {
      for (let i = 0; i < cp.length; i++) {
        if (pp[i] !== cp[i]) {
          return false;
        }
      }
      return true;
    });
  })
}

module.exports = {checkIfIsEveryPossiblePermutationCalculated}
