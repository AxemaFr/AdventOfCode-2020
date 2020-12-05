import {INPUT} from './input.js';


const mapToIds = (parsedInput) => {
  return parsedInput.map((input) => {
    let rowStart = 0;
    let rowEnd = 127;

    let seatStart = 0;
    let seatEnd = 7;

    input.forEach((it) => {
      switch(it) {
        case 'F':
          rowEnd = Math.ceil((rowEnd + rowStart) / 2);
          break;
        case 'B':
          rowStart = Math.ceil((rowEnd + rowStart) / 2);
          break;
        case 'R':
          seatStart = Math.ceil((seatEnd + seatStart) / 2);
          break;
        case 'L':
          seatEnd = Math.ceil((seatEnd + seatStart) / 2);
          break;
      }
    });

    return rowStart * 8 + seatStart;
  });
};

export const problem1 = (parsedInput) => {
  let hightestId = 0;

  const ids = mapToIds(parsedInput);

  ids.forEach((it) => hightestId = it > hightestId ? it : hightestId);

  return hightestId;
};

export const problem2 = (parsedInput) => {
  const ids = mapToIds(parsedInput);

  ids.sort((a, b) => a > b ? 1 : -1);

  return 1 + ids.find((it, index) => {
    if (it + 1 !== ids[index + 1]) {
      return it;
    }
  });
};

export const parseInput = (inputRaw) => {
  return inputRaw.split('\n').map(parseSingleInput);
};

const parseSingleInput = (inputStr) => {
  return inputStr.split('');
};


