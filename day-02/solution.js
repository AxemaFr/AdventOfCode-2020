export const problem1 = (parsedInput) => {
  return parsedInput.reduce((acc, current) => {
    console.log(current);
    const regExp = new RegExp(current.letter, 'g');
    const entriesCount = (current.password.match(regExp) || []).length;
    if (entriesCount >= current.firstDigit && entriesCount <= current.secondDigit) {
      acc++;
    }
    return acc;
  }, 0);
};

export const problem2 = (parsedInput) => {
  return parsedInput.reduce((acc, current) => {
    const isFirstOccurrenceCorrect = current.password[current.firstDigit - 1] === current.letter;
    const isSecondOccurrenceCorrect = current.password[current.secondDigit - 1] === current.letter;

    if ((isFirstOccurrenceCorrect || isSecondOccurrenceCorrect) && !(isFirstOccurrenceCorrect && isSecondOccurrenceCorrect)) {
      acc++;
    }

    return acc;
  }, 0);
};

export const parseInput = (inputRaw) => {
  return inputRaw.split('\n').map(parseSingleInput);
};

const parseSingleInput = (inputStr) => {
  const splittedInput = inputStr.split(' ');
  const minMaxNumbers = splittedInput[0].split('-').map((num) => Number(num));
  const letter = splittedInput[1][0];
  const password = splittedInput[2];

  return {
    firstDigit: minMaxNumbers[0],
    secondDigit: minMaxNumbers[1],
    letter: letter,
    password: password,
  };
};
