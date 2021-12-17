- [Description](#description)
- [Recursive Heap's algorithm with callback in place](#recursive-heaps-algorithm-with-callback-in-place)
- [Recursive Heap's algorithm with returning value](#recursive-heaps-algorithm-with-returning-value)
- [Iterative Heap's algorithm with callback in place](#iterative-heaps-algorithm-with-callback-in-place)
- [Iterative Heap's algorithm with returning value](#iterative-heaps-algorithm-with-returning-value)

## Description
This project implements 4 different variations of the heap's algorithm for finding all the permutations of a certain 
array.

## Recursive Heap's algorithm with callback in place
The following uses a recursive variation of the heap's algorithm.  
In this implementation the function `calcRecursiveAllPermutationsInPlace` calculates every possible permutation of the
array parameter and execute the callback passing a **reference** of the active permutation.   
It is important to notice that if one want to use this permutation the array need to be spreadded because the array is 
changed **in place**.   
This is wanted because one could potentially use this fn for write the permutation to a file, in this way unnecessary 
spreads are avoided.  
If one want to have an array of all the possible permutations, another one of these methods could be used.

```javascript
const {calcRecursiveAllPermutationsInPlace} = require("./index");

const result = [];
calcRecursiveAllPermutationsInPlace([1, 2, 3], (permutation) => {
  // create optionally another arr was chosen for performance
  // one could optionally decide to not add the permutation to the array
  // because maybe one want just to write in a file
  result.push([...permutation]);
});
```
Then `result` will be:
```javascript
[ [1, 2, 3], [2, 1, 3], [3, 1, 2], [1, 3, 2], [2, 3, 1], [3, 2, 1] ]
```

## Recursive Heap's algorithm with returning value
The following uses a recursive variation of the heap's algorithm.  
In this implementation the function `calcRecursiveAllPermutations` calculates every possible permutation of the
array parameter and return an array containing all the possible permutations.     
In this case the array passed as a parameter won't change during the process, also the permutation that is equal to 
the passed parameter is a totally different array.  

```javascript
const {calcRecursiveAllPermutations} = require("./index");

const result = calcRecursiveAllPermutations([1, 2, 3]);
```
Then `result` will be:
```javascript
[ [1, 2, 3], [2, 1, 3], [3, 1, 2], [1, 3, 2], [2, 3, 1], [3, 2, 1] ]
```

## Iterative Heap's algorithm with callback in place
The following uses an iterative variation of the heap's algorithm.  
In this implementation the function `calcIterativeAllPermutationsInPlace` calculates every possible permutation of the
array parameter and execute the callback passing a **reference** of the active permutation.   
It is important to notice that if one want to use this permutation the array need to be spreadded because the array is
changed **in place**.   
This is wanted because one could potentially use this fn for write the permutation to a file, in this way unnecessary
spreads are avoided.  
If one want to have an array of all the possible permutations, another one of these methods could be used.

```javascript
const {calcIterativeAllPermutationsInPlace} = require("./index");

const result = [];
calcIterativeAllPermutationsInPlace([1, 2, 3], (permutation) => {
  // create optionally another arr was chosen for performance
  // one could optionally decide to not add the permutation to the array
  // because maybe one want just to write in a file
  result.push([...permutation]);
});
```
Then `result` will be:
```javascript
[ [1, 2, 3], [2, 1, 3], [3, 1, 2], [1, 3, 2], [2, 3, 1], [3, 2, 1] ]
```


## Iterative Heap's algorithm with returning value
The following uses an iterative variation of the heap's algorithm.  
In this implementation the function `calcIterativeAllPermutations` calculates every possible permutation of the
array parameter and return an array containing all the possible permutations.     
In this case the array passed as a parameter won't change during the process, also the permutation that is equal to
the passed parameter is a totally different array.

```javascript
const {calcIterativeAllPermutations} = require("./index");

const result = calcIterativeAllPermutations([1, 2, 3]);
```
Then `result` will be:
```javascript
[ [1, 2, 3], [2, 1, 3], [3, 1, 2], [1, 3, 2], [2, 3, 1], [3, 2, 1] ]
```