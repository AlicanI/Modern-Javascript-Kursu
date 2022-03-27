// Arrays

    let names = ['ali','mehmet','ayşe','fatma'];
    let years = [2000, 2010, 2022, 1993];
    let mix = ['selami','ozan',1856,null,undefined,['sinema','tiyatro','müzik']];

    console.log(mix);
    console.log(years);
    console.log(names);

// find 

    function over18(year){
        let age = 2022 - year;
        return age >=18;
    }

    let val = years.find(over18);
     console.log(`18 yaşından büyük tarih: ${val}`); 

// filter

    function over20(year) {
        let age = 2022 - year;
        return age >=20;
    }

    let val2 = years.filter(over20);
    console.log(`20 yaşından büyük tarih veya tarihler: ${val2}`); // you can use filter method for finding more than one item.
   

// splice

    // names.splice(2,0, 'seda');
    // console.log(names);

    // names.splice (0,3); // you can also use for deleting items
    // console.log(names);

// // get array item

//     console.log(mix[0]);
//     console.log(years[2]);

// // set array item

//     names[0] ='ahmet'; 
//     // names[5] ='emel'; // instead of
//     names[names.length] ='emel';
//     console.log(names);

// // add item

//     years.push(1545); //for add item at the end
//     // If you want to add the item at start 
//     years.unshift(1545);
//     console.log(years);


// // Remove item

//     years.pop(); // for the last one.
//     years.shift(); // for the first one.
//     console.log(years); 

// // Index Of

//     let index = names.indexOf('ahmet');
//     console.log('index : '+index);

// // Reverse 

//     console.log(names.reverse());

// // Sort

//     console.log(years.sort());

// // concat

//     let val = years.concat(names);
//     console.log(val);



