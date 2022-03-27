// Demo


// 20.04.2017 tarihinde trafiğe çıkan bir aracın, servis bakım süreleri aşağıda verilmiştir. Bu bilgilere göre servis uyarsını veriniz.

// 1.Bakım : 1 yıl
// 2.Bakım : 2 yıl
// 3.bakım : 3 yıl

// var carDate = new Date('04/20/2019');
// carDate.setHours(0,0,0,0);
// var carDurationOnTraficMs = Date.now() - carDate.getTime(); 
// var carDurationOnTrafiDay = carDurationOnTraficMs/(1000*60*60*24);
// carDurationOnTrafiDay= Math.floor(carDurationOnTrafiDay);
// console.log(carDurationOnTrafiDay);

// if(carDurationOnTrafiDay<=365){
//     console.log(`Firs service of your car\'s has required`);
// }else if (carDurationOnTrafiDay>365 && carDurationOnTrafiDay<=(2*365)){
//     console.log('Second service of your car\'s has requried')
// }else if (carDurationOnTrafiDay>(2*365) && carDurationOnTrafiDay<=(3*365)){
//     console.log('Third service of your car\'s has required')
// }else{
//     console.log('Your car need service')
// }

// var carDate = new Date('04/20/2021');

// var carDurationOnTraficMs = Date.now() - carDate.getTime();
// var carDurationOnTrafiDay = carDurationOnTraficMs/(1000*60*60*24);
// carDurationOnTrafiDay = Math.floor(carDurationOnTrafiDay);

// console.log(`Son bakımı ${carDurationOnTrafiDay} gün önce yapıldı`)

// switch(true){
//     case carDurationOnTrafiDay<=365:
//         console.log(`First service of your car's has required`);
//     break;

//     case carDurationOnTrafiDay>365 && carDurationOnTrafiDay<=365*2:
//         console.log(`Second service of your car's has required`);
//     break;

//     case carDurationOnTrafiDay>365*2 && carDurationOnTrafiDay<=365*3:
//         console.log(`Third service of your car's has required`);
//     break;

//     default :
//         console.log('Your car needs service');
//     break;

    
// }


// var input = prompt(`Who's there '`);

// if (input == 'admin'){
//     var password = prompt('Password');

//     if(password == 'TheMaster') {
//         console.log('Welcome!');

//     }else if(password == 'cancel' ){
//         console.log('Canceled');
//     }else {
//         console.log('Wrong password'); 
//     }
 



// }else if (input == 'cancel'){
//     console.log(`Calceled`);
// }else{
//     console.log(`I don't know you`);
// }



var input = prompt(`Who's there`);

switch(true){
    case input == 'admin':
        console.log('Wellcome!')
        var passowrd = prompt('Enter Password');

        switch(true){
            case passowrd == 'TheMaster':
                console.log('Wellcome Master');
            break;

            case passowrd == 'cancel':
                console.log('Cancelled');
            break;

            default :
                console.log('Wrong password')
            break;
        }

    break;

    case input == 'cancel':
        console.log('Cancelled');
    break;

    default :
        console.log('Wrong password');
    break;
}