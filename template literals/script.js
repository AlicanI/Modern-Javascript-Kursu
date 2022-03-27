// Template Literals

    const fullName = 'Ali Işık';
    const city = "İstanbul";
    const yearsOfBirth = 1993;

    let val = 'My name is ' + fullName + '. I\'m ' + (2022-yearsOfBirth) + ' years old and I live in ' + city + '.';

    console.log(val);

    let val2 = `My name is ${fullName}. I'm ${2022-yearsOfBirth} years old and I live in ${city}.`

    console.log(val2);

// Ternary Operator
    let val3 = `My name is ${fullName}. I'm ${(2022-yearsOfBirth>=18)?'over 18':'under 18'} and I live in ${city}.`

    console.log(val3)

