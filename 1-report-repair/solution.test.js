import assert from 'assert';
import { INPUT } from './__fixtures__/input.fixture.js';
import { problem1, problem2 } from './solution.js';

describe('Part One', () => {
  it('should return 514579 with input', () => {
    assert.strictEqual(problem1(INPUT, 2020, 0), 1020000);
  });
});

describe('Part Two', () => {
  it('should return 241861950 with input', () => {
    assert.strictEqual(problem2(INPUT), 20000000);
  });
});
