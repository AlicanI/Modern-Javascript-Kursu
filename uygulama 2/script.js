

// 1- Can ve Ada'nın boy ve kilo bilgilerini alın.
// 2 - Alınan bilgilere göre kilo indekslerini hesaplayınız.
// ** Formül : Kişinin Kilosu / Boy Uzunluğunun Karesi
// 3 - Hesaplanan indeks bilgisine göre karşılaştırma yapınız. 
// 4 - Aşağıdaki tabloya göre Can ve Ada hangi gruba giriyor.


// 0 - 18,4: Zayıf
// 18,5 - 24,9 : Normal
// 25,0 - 29,9 : Fazla Kilolu 
// 30,0 - 34, 9: Şişman (Obez) 

let IndexCan;
let IndexAda;


const kgCan= 60;
const kgAda= 40;

const heightCan= 1.70;
const heghtAda= 1.50;

IndexAda= (kgAda) / (heghtAda*heghtAda);
IndexCan= (kgCan) / (heightCan*heightCan);

console.log(IndexAda.toFixed(2),IndexCan.toFixed(3));


let adaHigherIndex = IndexAda > IndexCan;

console.log("Ada'nın kilo indeksi Can'ın kilo indeksinden daha büyük : " + adaHigherIndex);

let canHigherIndex= IndexCan > IndexAda;

console.log("Can'ın kilo indeksi Ada'nın kilo indeksinden daha büyük : "+canHigherIndex);

let adaZayıf = (IndexAda >= 0) && (IndexAda <= 18.4);
let adaNormal = (IndexAda >= 18.5) && (IndexAda <= 24.9);
let adaFazlaKilolu = (IndexAda >= 25.0) && (IndexAda <= 29.9);
let adaSisman = (IndexAda >= 30.0) && (IndexAda <= 34.9);

console.log("Ada zayıf:" +adaZayıf);
console.log("Ada'nın kilosu normal:" +adaNormal);
console.log("Ada'nın kilosu fazla mı:"+ adaFazlaKilolu);
console.log("Ada şişman mı: " +adaSisman);