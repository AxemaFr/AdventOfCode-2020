import { INPUT } from './input.js';

export const parseInput = (input) => input.split('\n').map(x => Number.parseInt(x));

export const problem1 = (numbers, target, start) => {
  const memo = new Set();

  for (let i = start; i < numbers.length; i++) {
    const complement = target - numbers[i];

    if (memo.has(complement)) {
      return complement * numbers[i];
    }

    memo.add(numbers[i]);
  }

  return null;
};

export const problem2 = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    const target = 2020 - numbers[i];
    const result = problem1(numbers, target, i + 1);

    if (result) {
      return numbers[i] * result;
    }
  }

  return null;
};

console.log(problem2(parseInput(INPUT), 2020, 0));
