export const problem1 = (inputMatrix, rightInc, downInc) => {
  const rowLength = inputMatrix[0].length;

  let x = 0;
  let y = 0;

  let counter = 0;

  do {
    x += rightInc;
    y += downInc;

    if (x >= rowLength) {
      x -= rowLength;
    }

    if (inputMatrix[y][x] === '#') {
      counter++;
    }
  } while (y < inputMatrix.length - 1);

  return counter;
};

const cases = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];

export const problem2 = (inputMatrix) => {
  return cases.reduce((acc, [rightInc, downInc]) => {
    return acc * problem1(inputMatrix, rightInc, downInc);
  }, 1);
};

export const parseInput = (inputRaw) => {
  return inputRaw.split('\n').map(parseSingleInput);
};

const parseSingleInput = (inputStr) => {
  return inputStr.split('');
};
