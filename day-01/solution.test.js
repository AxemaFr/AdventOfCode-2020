import assert from 'assert';
import { INPUT } from './__fixtures__/input.fixture.js';
import { problem1, problem2 } from './solution.js';

describe('Day 1 - Part One', () => {
  it('should return correct answer with input', () => {
    assert.strictEqual(problem1(INPUT, 2020, 0), 1020000);
  });
});

describe('Day 1 - Part Two', () => {
  it('should return correct answer with input', () => {
    assert.strictEqual(problem2(INPUT), 20000000);
  });
});
