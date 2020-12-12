import {INPUT} from './input.js';

export const problem1 = (parsedInput) => {
  const expand = (bag) => {
    const colors = [...parsedInput[bag].values()];

    for (const color of parsedInput[bag].values()) {
      colors.push(...expand(color));
    }

    return colors;
  };

  return Object
    .keys(parsedInput)
    .filter((key) => expand(key).includes('shiny gold'))
    .length;
};

export const problem2 = (parsedInput) => {
  const traverse = (bag) => {
    let total = 0;

    for (const { color, units } of parsedInput.get(bag)) {
      total += units + units * traverse(color);
    }

    return total;
  };

  return traverse('shiny gold');
};

export const parseInputForProblemOne = (inputRaw) => {
  return inputRaw.split('\n').reduce((rules, line) => {
    const [, color, otherColors] = /(\w+ \w+) bags contain (.*)\./.exec(line);

    const compatibleWith = otherColors !== 'no other bags'
      ? otherColors.split(', ').map((other) => /(\w+ \w+) bags?/.exec(other)[1])
      : [];

    rules[color] = new Set();

    compatibleWith.forEach((otherColor) => rules[color].add(otherColor));

    return rules;
  }, {});
};

export const parseInputForProblemTwo = (inputRaw) => {
  return inputRaw.split('\n').reduce((rules, line) => {
    const [, color, otherColors] = /(\w+ \w+) bags contain (.*)\./.exec(line);

    const compatibleWith = otherColors !== 'no other bags'
      ? otherColors.split(', ').map((other) => {
        const [, units, color] = /(\d+) (\w+ \w+) bags?/.exec(other);

        return { units: parseInt(units), color };
      })
      : [];

    rules.set(color, []);

    compatibleWith.forEach((otherColor) => rules.get(color).push(otherColor));

    return rules;
  }, new Map());
}

console.log(problem2(parseInputForProblemTwo(INPUT)));



