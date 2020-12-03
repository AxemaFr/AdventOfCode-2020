import assert from 'assert';
import { INPUT } from './__fixtures__/input.fixture.js';
import { problem1, problem2, parseInput } from './solution.js';

describe('Day 3 - Part One', () => {
  it('should return correct answer with input', () => {
    assert.strictEqual(problem1(parseInput(INPUT), 3, 1), 7);
  });
});

describe('Day 3 - Part Two', () => {
  it('should return correct answer with input', () => {
    assert.strictEqual(problem2(parseInput(INPUT)), 336);
  });
});
