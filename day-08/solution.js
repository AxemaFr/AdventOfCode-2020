import {INPUT} from './input.js';

export const problemOne = (input) => {
  const instructions = input.split('\n').map((line) => {
    const [, operation, value] = /(\w+) ([+-]\d+)/.exec(line.trim());

    return [operation, parseInt(value)];
  });

  let acc = 0;
  let i = 0;

  const executed = new Set();

  while (!executed.has(i)) {
    executed.add(i);

    const [operation, argument] = instructions[i];

    switch (operation) {
      case 'acc':
        acc += argument;
        i++;
        break;

      case 'jmp':
        i += argument;
        break;

      case 'nop':
        i++;
        break;
    }
  }

  return acc;
};

export const problemTwo = (input) => {
  const instructions = input.split('\n').map((line) => {
    const [, operation, value] = /(\w+) ([+-]\d+)/.exec(line.trim());

    return [operation, parseInt(value)];
  });

  for (let i = 0; i < instructions.length; i++) {
    const patched = instructions.map(([operation, value]) => [operation, value]);

    if (instructions[i][0] === 'jmp') {
      patched[i][0] = 'nop';
    } else if (instructions[i][0] === 'nop') {
      patched[i][0] = 'jmp';
    } else {
      continue;
    }

    const executed = new Set();

    let acc = 0;
    let p = 0;

    while (!executed.has(p)) {
      executed.add(p);

      const [operation, argument] = patched[p];

      switch (operation) {
        case 'acc':
          acc += argument;
          p++;

          break;
        case 'jmp':
          p += argument;

          break;
        case 'nop':
          p++;

          break;
      }

      if (p >= patched.length) {
        return acc;
      }
    }
  }
};
