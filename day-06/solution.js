export const problem1 = (parsedInput) => {
  const groups = parsedInput
    .join()
    .split(',,')
    .map(group => group.split(','));

  let positiveCount = 0;

  groups.forEach(group => (positiveCount += new Set(group.join('')).size));

  return positiveCount;
};

export const problem2 = (parsedInput) => {
  const groups = parsedInput
    .join()
    .split(',,')
    .map(group => group.split(','));

  let positiveCount = 0;

  for (const group of groups) {
    for (const answer of group[0]) {
      if (group.every(personAnswers => personAnswers.includes(answer))) {
        positiveCount += 1;
      }
    }
  }

  return positiveCount;
};

export const parseInput = (inputRaw) => {
  return inputRaw.split('\n').map(parseSingleInput);
};

const parseSingleInput = (inputStr) => {
  return inputStr;
};


