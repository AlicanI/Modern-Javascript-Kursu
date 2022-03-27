const firstName='Ali';
const lastName='Işık';
let hobies = 'sinema spor kitap yazılım'
const age=29;
let val;



//String Concatenation


    val = firstName +' '+ lastName;

    val='Ali';
    val +=' Işık';


    val = 'My name is ' + firstName + ' ' + lastName + ' and I am ' + age + ' years old. I\'m live in Istanbul.'


//string concat

    val = firstName.concat(' ',lastName );

//string length
    // val = val.length;

//string uppercase - lowercase

    val = val.toUpperCase();
    val = val.toLowerCase();


    // val = val.indexOf('a');

//substring

    // val = val.substring(3,6);

//slice

    // val = val.substring(3,6);


// val = val[5];

// string replace

    // val = val.replace('ali', 'Can');

// trim
    val = '     ' + val.replace ('ali', 'can') + '      ';
    val = val.trim();


val =hobies.split(' ')

console.log(val);
console.log(typeof val);