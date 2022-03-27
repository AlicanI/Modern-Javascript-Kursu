// Demo : Arrays

// "Bmw, Mercedes, Opel, Mazda"  elemanlarına sahip bir dizi oluşturun.

    let brands = ['Bmw', 'Mercedes' ,'Opel', 'Mazda'];

    console.log(brands);

// Dizi kaç elemanlıdır ?
    console.log('Dizinin uzunluğu : ' +brands.length);

// Dizinin ilk ve son elemanı nedir ?
    console.log('Dizinin ilk elemanı: ' +brands[0]);
    console.log('Dizinin son elemanı: ' +brands[brands.length-1]);
// "Renault" değerini dizinin sonuna ekleyin.
    brands.push('renault');
    console.log('Dizinin sonuna \'renault\' ekleyin : ' +brands);
    
    
// "Toyota" değerini dizinin başına ekleyin.
    brands.unshift('Toyota');
    console.log('Dizinin başına \'toyota\' değerini ekleyin: ' +brands);

// "Renault" değerini siliniz.
    brands.pop();
    console.log('Dizinin sonundaki değeri silin:' +brands);

// "Toyota" değerini siliniz.
    brands.shift();
    console.log('Dizinin başındaki değeri silin: '+brands);
// Dizi elemanlarını ters çevirin

    brands.reverse();
    console.log('Dizi elemanlarını ters çevirin: '+ brands);

// Dizi elemanlarını alfabetik olarak sıralayınız.

    brands.sort();
    console.log('Dizi elemanlarını alfabetik olarak sıralayın: ' +brands);

// [1,2,5,80] dizisini sıralayın.
    let numbers = [2,80,1,5];

    function compare(a,b) {
        if (a>b) return 1;
        if (a==b) return 0;
        if (a<b) return -1;   
     }
    console.log('[2,80,1,5] disizini sıralayın: ' +numbers.sort(compare));


// "Opel" değerini dizinin bir elemanı mıdır ?
    console.log(' "Opel" değeri dizinin bir elemanı mıdır: ' +brands.indexOf('opel'));
    console.log(brands.includes('opel'));

// var str = "Chevrolet, Dacia"; ifadesini diziye çeviriniz.
    var str = 'Chevrolet,Dacia';
    var subBrands = str.split(',');
    console.log(subBrands);


// Oluşturulan 2 dizinin elemanlarını bir başka dizi ile birleştirin.
    var newBrands = brands.concat(subBrands);
    console.log(newBrands);
    console.log(typeof newBrands);

// Oluşturulan dizideb son 2 elemanı siliniz.
    console.log(newBrands.splice(newBrands.length-2, newBrands.length-1));
    console.log(newBrands);


// Aşağıda verilen elemanları bir dizi içersinde saklayınız.
    // StudentA : Yiğit Bilgi 2009
    // StudentB : Sena Turan 1999
    // StudentC : Ahmet Turan 1998

    var studentA = ['Yiğit','Bilgi',2009];
    var studentB = ['Sena','Turan',1999];
    var studentC = ['Ahmet','Turan',1998];

    var students = [studentA,studentB,studentC];

    console.log(students);
    console.log(students[0][0]);
    console.log(students[0][1]);
    console.log(students[0][2]);

    console.log(students[1][0]);
    console.log(students[1][1]);
    console.log(students[1][2]);

    console.log(students[2][0]);
    console.log(students[2][1]);
    console.log(students[2][2]);
//