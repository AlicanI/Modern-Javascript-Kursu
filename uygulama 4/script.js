var num= 15.123456789;

// Toplamda 3 basamaklı sayı kullan

console.log('3 basamaklı sayı kullan: '+num.toPrecision(3));
// ondalık kısmı 3 basamakta sınırla 

console.log('ondalık kısmı 3 basamakta sınırla: '+num.toFixed(3));

// en yakın sayıya yuvarla

console.log('en yakın sayıya yuvarla: '+Math.round(num));

// Aşağı yuvarla
console.log('aşağı yuvarlar: '+Math.floor(num));


// yukarı yuvarla
console.log('yukarı yuvarla: '+Math.ceil(num));

// 1,2,10,56,20 sayılarından en küçüğü ve en büyüğünü bul

console.log('1,2,10,56,20 sayılarından en küçüğünü ve en büyüğünü bul: '+ Math.min(1,2,10,56,20),Math.max(1,2,10,56,20));


// sayı aralığı kullanıcının belirleyeceği rastgele bir sayı üretin

var max= 100;
var min= 50;

console.log('Sayı aralığı kullanıcının belirleyeceği rastgele bir saı üretin: '+Math.round(50+Math.random()*100-100));

// Bir personelin yaptığı mesai'ye göre aldığı maaşı heseaplayın
    //Brüt maaş : 3700 TL
    // Brüt mesai : 10.3 Tl

    //Ağustos ayı mesai toplamı 42 saat ise toplan brüt maaş nedir? 
    // Brüt maaş üzerinden toplam kesinti oranı %25 ise alınacak toplam maaş nedir?

