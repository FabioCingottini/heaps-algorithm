/**
 * @template T
 * @callback onPermutation<T>
 * @param {T[]} permutation - The actual permutation
 */
/**
 * Calculate every possible permutation of the passed arr parameter and call
 * onPermutation(actualPermutation) every time a permutation has been discovered.
 * !!IMPORTANT!! the onPermutation parameter is a pointer to the passed array, so
 * if one want to copy store its status somewhere (like in an allPermutations array),
 * one need to copy it.
 *
 * @template T
 * @param {Array<T>} arr - The array for which to calculate all the permutations in place
 * @param {onPermutation<Array<T>>} onPermutation - A callback called every time a new permutation has been discovered
 * @param {number} [k] - The k parameter of the recursive heap's algorithm
 */
function calcRecursiveAllPermutationsInPlace(arr, onPermutation, k) {
  if (!arr.length) {
    return [];
  }

  if (k === undefined) {
    k = arr.length;
  }

  if (k === 1) {
    onPermutation(arr);
  } else {
    calcRecursiveAllPermutationsInPlace(arr, onPermutation, k - 1);

    for (let i = 0; i < k - 1; i++) {
      if (k % 2 === 0) {
        swap(arr, i, k - 1);
      } else {
        swap(arr, 0, k - 1);
      }

      calcRecursiveAllPermutationsInPlace(arr, onPermutation, k - 1);
    }
  }
}

/**
 * Calculate every possible permutation of the passed arr parameter and return them in an
 * array of permutations, permutations are not in place but copies of the original array.
 *
 * @template T
 * @param {Array<T>} arr - The array for which to calculate all the permutations
 * @param {number} [k] - The k parameter of the recursive heap's algorithm
 * @param {Array} [permutations=[] - An array supposed to store all the permutations
 *
 * @return {Array<Array<T>>} [k] - An array of arrays representing all the possible permutations
 */
function calcRecursiveAllPermutations(arr, k, permutations = []) {
  if (!arr.length) {
    return [];
  }

  let arrToUse = arr;
  if (k === undefined) {
    k = arr.length;
    arrToUse = [...arr];
  }

  if (k === 1) {
    permutations.push([...arrToUse]);
  } else {
    calcRecursiveAllPermutations(arrToUse, k - 1, permutations);

    for (let i = 0; i < k - 1; i++) {
      if (k % 2 === 0) {
        swap(arrToUse, i, k - 1);
      } else {
        swap(arrToUse, 0, k - 1);
      }

      calcRecursiveAllPermutations(arrToUse, k - 1, permutations);
    }
  }

  return permutations;
}

/**
 * Calculate every possible permutation of the passed arr parameter and call
 * onPermutation(actualPermutation) every time a permutation has been discovered.
 * !!IMPORTANT!! the onPermutation parameter is a pointer to the passed array, so
 * if one want to copy store its status somewhere (like in an allPermutations array),
 * one need to copy it.
 *
 * @template T
 * @param {Array<T>} arr - The array for which to calculate all the permutations in place
 * @param {onPermutation<Array<T>>} onPermutation - A callback called every time a new permutation has been discovered
 */
function calcIterativeAllPermutationsInPlace(arr, onPermutation) {
  if (!arr.length) {
    return;
  }

  const c = new Array(arr.length).fill(0);

  onPermutation(arr);

  let i = 0;
  while (i < arr.length) {
    if (c[i] < i) {
      if (i % 2 === 0) {
        swap(arr, 0, i);
      } else {
        swap(arr, c[i], i);
      }

      onPermutation(arr)

      c[i]++;
      i = 0;
    } else {
      c[i] = 0
      i++;
    }
  }
}

/**
 * Calculate every possible permutation of the passed arr parameter and return them in an
 * array of permutations, permutations are not in place but copies of the original array.
 *
 * @template T
 * @param {Array<T>} arr - The array for which to calculate all the permutations in place
 *
 * @return {Array<Array<T>>} permutations - An array of arrays representing all the possible permutations
 */
function calcIterativeAllPermutations(arr) {
  if (!arr.length) {
    return [];
  }

  const c = new Array(arr.length).fill(0);
  const permutations = [[...arr]];

  let i = 0;
  while (i < arr.length) {
    const arrToUse = [...permutations[permutations.length - 1]];
    if (c[i] < i) {
      if (i % 2 === 0) {
        swap(arrToUse, 0, i);
      } else {
        swap(arrToUse, c[i], i)
      }

      permutations.push([...arrToUse]);

      c[i]++;
      i = 0;
    } else {
       c[i] = 0;
       i++;
    }
  }

  return permutations;
}

/**
 * Swap ith jth elements of the given arr
 *
 * @param {Array} arr - The array containing the elements to swap
 * @param {number} i - The index of the first element to swap
 * @param {number} j - The index of the second element to swap
 */
const swap = (arr, i, j) => {
  arr[i] = arr[i] ^ arr[j];
  arr[j] = arr[i] ^ arr[j];
  arr[i] = arr[i] ^ arr[j];
}

module.exports = {
  calcRecursiveAllPermutationsInPlace,
  calcRecursiveAllPermutations,
  calcIterativeAllPermutationsInPlace,
  calcIterativeAllPermutations,
}
