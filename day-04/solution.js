const REQUIRED_FIELDS = [
  'byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'
];

const FIElDS_VALIDATORS = [
  {key: 'byr', validate: (v) => v >= 1920 && v <= 2002},
  {key: 'iyr', validate: (v) => v >= 2010 && v <= 2020},
  {key: 'eyr', validate: (v) => v >= 2020 && v <= 2030},
  {key: 'hgt', validate: (v) => {
    const num = v.replace(/\D/g,'');
    return v.match(new RegExp('cm|in')) && (v.includes('cm') ? num >= 150 && num <= 193 : num >= 59 && num <= 76);
  }},
  {key: 'hcl', validate: (v) => v.match(/^#[0-9A-F]{6}$/i)},
  {key: 'ecl', validate: (v) => v.match(new RegExp(['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].join('|'), 'g'))},
  {key: 'pid', validate: (v) => !isNaN(v) && v.split('').length === 9},
];

export const problem1 = (passports) => {
  const validPassports = [];

  passports.forEach((passport) => {
    if (REQUIRED_FIELDS.every((it) => passport.indexOf(it) !== -1)) {
      validPassports.push(passport);
    }
  });

  return validPassports;
};

export const problem2 = (passports) => {
  const validPassports = problem1(passports);

  return validPassports.filter((passport) => {
    const passportItems = passport.split(new RegExp(['\n', ' '].join('|'), 'g')).map((it) => it.split(':'));

    return FIElDS_VALIDATORS.every((validator) => {
      return validator.validate(passportItems.find((item) => item[0] === validator.key)[1]);
    });
  });
};

export const parseInput = (inputRaw) => {
  return inputRaw.split('\n\n').map(parseSingleInput);
};

const parseSingleInput = (inputStr) => {
  return inputStr;
};


