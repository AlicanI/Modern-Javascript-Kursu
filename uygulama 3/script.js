// Şimdiki tarihin gün ay ve yıl bilgisini yazdırınız.

let now = new Date();
console.log(now);
console.log(now.getMonth()+1);
console.log(now.getDate());
console.log(now.getFullYear());

// Tarih ve saat bilgisini içeren bir Date objesi oluşturunuz.
var dtA = new Date('8/24/2010 14:50:10');
var dtB = new Date(2010,7,24,14,50,10);

console.log(dtA);
console.log(dtB);

// 1/1/1990 tarihinden bir gün öncesini gösteriniz.
var dtC = new Date ('1/1/1990');
console.log(dtC);
var dayOfMonth = dtC.getDate();
dtC.setDate(dayOfMonth-1);

console.log(dtC);
// İki tarih arasındaki geçen zamanı bulunuz.
var start = new Date('1/1/1990');
var end = new Date('1/1/1991');
var durationMilisecond = end - start;
var durationSecond = durationMilisecond/1000;
var durationMinute = durationSecond/60;
var durationHour = durationMinute/60;
var durationDay = durationHour/24;
var durationYear = durationDay/365;


console.log('Milisaniye: ' +durationMilisecond);
console.log('Saniye: '+ durationSecond);
console.log('Dakika: '+ durationMinute)
console.log('Saat: '+ durationHour);
console.log('Gün: '+ durationDay);
console.log('Yıl: '+durationYear);
// Her yıl mayıs ayının 2.haftası pazar günü kutlanan anneler günü 2022 yılında ne zaan kutlanacaktır ?

var annelerGunu = new Date();
annelerGunu.setHours(0,0,0,0);
annelerGunu.setFullYear(2022);
annelerGunu.setDate(1);
annelerGunu.setMonth(4);

while(annelerGunu.getDay() != 0) {
    annelerGunu.setDate(annelerGunu.getDate()+1)
}

annelerGunu.setDate(annelerGunu.getDate() +7);
console.log(annelerGunu);
// Yaş hesaplama nasıl yapılır ?

var birthday = new Date('8/1/1985');
var ageDifMs= Date.now() - birthday.getTime();
var ageDate= new Date(ageDifMs);


console.log(ageDate.getFullYear() - 1970);

// console.log(birthday.getTime());
// console.log(Date.now());
