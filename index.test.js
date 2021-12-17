const mocks = require("./mocks");
const {checkIfIsEveryPossiblePermutationCalculated} = require("./testUtils");
const {
  calcRecursiveAllPermutationsInPlace,
  calcRecursiveAllPermutations,
  calcIterativeAllPermutationsInPlace,
  calcIterativeAllPermutations
} = require("./index");


describe("Test calcRecursiveAllPermutationsInPlace", () => {
  it("Should never call onPermutation in case of empty arr", () => {
    // arrange
    const mockedOnPermutation = jest.fn();

    // act
    calcRecursiveAllPermutationsInPlace([], mockedOnPermutation);

    // assert
    expect(mockedOnPermutation).not.toHaveBeenCalled();

  });

  it("Should call the onPermutation callback n! times for an n length arr", () => {
    // arrange
    const mockedOnPermutation3d = jest.fn();
    const mockedOnPermutation4d = jest.fn();

    // act
    calcRecursiveAllPermutationsInPlace([...mocks.threeDimensionArr], mockedOnPermutation3d)
    calcRecursiveAllPermutationsInPlace([...mocks.fourDimensionArr], mockedOnPermutation4d)

    // assert
    expect(mockedOnPermutation3d).toHaveBeenCalledTimes(mocks.threeFactorial);
    expect(mockedOnPermutation4d).toHaveBeenCalledTimes(mocks.fourFactorial);
  });

  it("Should call the onPermutation callback with specific elements but not necessarily in a specific order", () => {
    // act
    const calculated3DPermutations = [];
    calcRecursiveAllPermutationsInPlace(
      [...mocks.threeDimensionArr],
      (permutation) => calculated3DPermutations.push([...permutation])
    );
    const calculated4DPermutations = [];
    calcRecursiveAllPermutationsInPlace(
      [...mocks.fourDimensionArr],
      (permutation) => calculated4DPermutations.push([...permutation])
    );

    // assert
    const is3dOk = checkIfIsEveryPossiblePermutationCalculated(
      mocks.threeDimensionsPermutations,
      calculated3DPermutations
    );
    const is4dOk = checkIfIsEveryPossiblePermutationCalculated(
      mocks.fourDimensionsPermutations,
      calculated4DPermutations
    );
    expect(is3dOk).toBeTruthy();
    expect(is4dOk).toBeTruthy();
  });
});

describe("Test calcRecursiveAllPermutations", () => {
  it("Should return empty arr in case of empty arr parameter", () => {
    // act
    const result = calcRecursiveAllPermutations([]);

    // assert
    expect(result).toHaveLength(0);
  });

  it("Should not change the original array", () => {
    // arrange
    const original3dArrayBackUp = mocks.threeDimensionArr.join(",");
    const original4dArrayBackUp = mocks.fourDimensionArr.join(",");

    // act
    calcRecursiveAllPermutations(mocks.threeDimensionArr);
    calcRecursiveAllPermutations(mocks.fourDimensionArr);

    // assert
    expect(original3dArrayBackUp).toEqual(mocks.threeDimensionArr.join(","));
    expect(original4dArrayBackUp).toEqual(mocks.fourDimensionArr.join(","));
  });

  it("Should return a n! length permutations array for an n length arr", () => {
    // act
    const calculated3DPermutations = calcRecursiveAllPermutations(mocks.threeDimensionArr);
    const calculated4DPermutations = calcRecursiveAllPermutations(mocks.fourDimensionArr);

    // assert
    expect(calculated3DPermutations).toHaveLength(mocks.threeFactorial);
    expect(calculated4DPermutations).toHaveLength(mocks.fourFactorial);
  });

  it("Should return all the permutations not necessarily in a specific order", () => {
    // act
    const calculated3DPermutations = calcRecursiveAllPermutations(mocks.threeDimensionArr);
    const calculated4DPermutations = calcRecursiveAllPermutations(mocks.fourDimensionArr);

    // assert
    const is3dOk = checkIfIsEveryPossiblePermutationCalculated(
      mocks.threeDimensionsPermutations,
      calculated3DPermutations
    );
    const is4dOk = checkIfIsEveryPossiblePermutationCalculated(
      mocks.fourDimensionsPermutations,
      calculated4DPermutations
    );
    expect(is3dOk).toBeTruthy();
    expect(is4dOk).toBeTruthy();
  });
});

describe("Test calcIterativeAllPermutationsInPlace", () => {
  it("Should never call onPermutation in case of empty arr", () => {
    // arrange
    const mockedOnPermutation = jest.fn();

    // act
    calcIterativeAllPermutationsInPlace([], mockedOnPermutation)

    // assert
    expect(mockedOnPermutation).not.toHaveBeenCalled();
  });

  it("Should call the onPermutation callback n! times for an n length arr", () => {
    // arrange
    const mockedOnPermutation3d = jest.fn();
    const mockedOnPermutation4d = jest.fn();

    // act
    calcIterativeAllPermutationsInPlace([...mocks.threeDimensionArr], mockedOnPermutation3d)
    calcIterativeAllPermutationsInPlace([...mocks.fourDimensionArr], mockedOnPermutation4d)

    // assert
    expect(mockedOnPermutation3d).toHaveBeenCalledTimes(mocks.threeFactorial);
    expect(mockedOnPermutation4d).toHaveBeenCalledTimes(mocks.fourFactorial);
  });

  it("Should call the onPermutation callback with specific elements but not necessarily in a specific order", () => {
    // act
    const calculated3DPermutations = [];
    calcIterativeAllPermutationsInPlace(
      [...mocks.threeDimensionArr],
      (permutation) => calculated3DPermutations.push([...permutation])
    );
    const calculated4DPermutations = [];
    calcIterativeAllPermutationsInPlace(
      [...mocks.fourDimensionArr],
      (permutation) => calculated4DPermutations.push([...permutation])
    );

    // assert
    const is3dOk = checkIfIsEveryPossiblePermutationCalculated(
      mocks.threeDimensionsPermutations,
      calculated3DPermutations
    );
    const is4dOk = checkIfIsEveryPossiblePermutationCalculated(
      mocks.fourDimensionsPermutations,
      calculated4DPermutations
    );
    expect(is3dOk).toBeTruthy();
    expect(is4dOk).toBeTruthy();
  });
});

describe("Test calcIterativeAllPermutations", () => {
  it("Should return empty arr in case of empty arr parameter", () => {
    // act
    const result = calcIterativeAllPermutations([]);

    // assert
    expect(result).toHaveLength(0);
  });

  it("Should not change the original array", () => {
    // arrange
    const original3dArrayBackUp = mocks.threeDimensionArr.join(",");
    const original4dArrayBackUp = mocks.fourDimensionArr.join(",");

    // act
    calcIterativeAllPermutations(mocks.threeDimensionArr);
    calcIterativeAllPermutations(mocks.fourDimensionArr);

    // assert
    expect(original3dArrayBackUp).toEqual(mocks.threeDimensionArr.join(","));
    expect(original4dArrayBackUp).toEqual(mocks.fourDimensionArr.join(","));
  });

  it("Should return a n! length permutations array for an n length arr", () => {
    // act
    const calculated3DPermutations = calcIterativeAllPermutations(mocks.threeDimensionArr);
    const calculated4DPermutations = calcIterativeAllPermutations(mocks.fourDimensionArr);

    // assert
    expect(calculated3DPermutations).toHaveLength(mocks.threeFactorial);
    expect(calculated4DPermutations).toHaveLength(mocks.fourFactorial);
  });

  it("Should return all the permutations not necessarily in a specific order", () => {
    // act
    const calculated3DPermutations = calcIterativeAllPermutations(mocks.threeDimensionArr);
    const calculated4DPermutations = calcIterativeAllPermutations(mocks.fourDimensionArr);

    // assert
    const is3dOk = checkIfIsEveryPossiblePermutationCalculated(
      mocks.threeDimensionsPermutations,
      calculated3DPermutations
    );
    const is4dOk = checkIfIsEveryPossiblePermutationCalculated(
      mocks.fourDimensionsPermutations,
      calculated4DPermutations
    );
    expect(is3dOk).toBeTruthy();
    expect(is4dOk).toBeTruthy();
  });
});

