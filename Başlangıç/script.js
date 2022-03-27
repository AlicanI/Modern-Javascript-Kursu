// console.log("merhaba");
// console.log([1,2,3]);
// console.log(true);
// console.log(1238);
// console.error("Yarra yeding");  
// console.warn("Dikkat");

// console.clear();


//Değişkenler

    // var age;
    // console.log(age); 

    // age=20;
    // console.log(age);

    // var fullname;
    // fullname='Alican Işık';
    // console.log(fullname);

    // // Değişken tanımlama kuralları

    // // Sayısal ifadeyle başlayamaz

    // var yas1;
    // var _yas2;
    // var $yas3;

    // // var 1yas; // Bu olmaz



// // Komut isimleriyle tanımlama yapılmaz;
// //Birden fazla kelime


    // var ad='Ali';
    // var soyad='Işık';

    // var ad_soyad='Ali Işık';
    // var adSoyad='Ali Işık';

    // console.log(ad_soyad);
    // console.log(ad);
    // console.log(soyad);
    // console.log(adSoyad);


// // case sensitive (Büyük, küçük harf duyarlılığı)

    // var firstname='Ali2';
    // var FirstName='Işık2';

    // console.log(firstname);
    // console.log(firstname);


    // // var, let, const

    // let city='İstanbul';
    // console.log(city);

    // const email='abc@gmail.com';
    // console.log(email);

    // email='bcd@gmail.com'
    // console.log(email);


//Değişken Tipleri

//Primitive Types

//     //String
//     let firstName='Ali';
//     console.log(firstName);
//     console.log(typeof firstName);

//     //Number
//     let age= 20;
//     let money= 100.5;
//     console.log(typeof age);
//     console.log(typeof money);

//     //Boolean
//     let isActive= true;

//     console.log(typeof isActive);


//     //null
//     let job=null;
//     console.log(typeof null);

//     //Undifined

//     let car;

//     console.log(typeof car);


// // Reference Types - Objects

//     //Array

//  let names=['Ali', 'Mehmey' , 'Ahmet'];

//  console.log(names);

//  console.log(typeof names);

//     //Object

// let address = {
//     city: 'İstanbul',
//     country: 'Türkiye'
// }

// console.log(address);
// console.log(typeof address);

//     //function

//     var calculateAge = function() {
//         return 0;
//     }

//     console.log(calculateAge);
//     console.log(typeof calculateAge);


// Tür Dönüşümü

    let val;
    // number to string

    val=String(10);



    console.log(val);
    console.log(typeof val);
    console.log(val.length);

    // bool to string

    val = String(true);


    console.log(val);
    console.log(typeof val);
    console.log(val.length);

    // date to string

    val= String(new Date());

    console.log(val);
    console.log(typeof val);
    console.log(val.length);


    // array to string

    val = String ([1,2,3,4]);

    console.log(val);
    console.log(typeof val);
    console.log(val.length);

    // toString()

    val= (10).toString();
    val = (false).toString();


    console.log(val);
    console.log(typeof val);

    // string to number

    val= Number('10');
    val= Number(false);
    val= Number(true);
    val= Number(null);
    val= Number('a');
    val= Number([1,2,3,4]);

    console.log(val);
    console.log(typeof val);
    console.log(val.toFixed(4));

    // parseInt ve parseFloat

    val = parseInt('10');
    val = parseFloat('11.542')

    

    console.log(val);
    console.log(typeof val);
    console.log(val.toFixed(3));