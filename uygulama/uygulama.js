//  Bir Müşterinin  aşağıdaki bilgileri için değişken oluşturunuz.

// Müşterinin Adı
// Müşterinin Soyadı
// Müşteri tc kimlik 
// Müşteri sipariş toplamı
// Müşteri cinsiyet
// Müşteri adres bilgisi
// müşteri hobileri

var clientName= 'Mehmet';
var clientLastName='Doğan';
var clientIdNumber= '12345678910';
var clienTotalOrder= 205.6;
var clientGender= false // Erkek = fasle , Kadın = True
var clientAddress= {
    district: 'Kadıköy',
    city: 'İstanbul',
    country: 'Türkiye'
}

var clienthobbies= ['kitap okumak', 'müzik yapmak', 'film izlemek'] 


// Aşağıdaki siparişlerin toplamını hesaplayınız

var order1= '100';
var order2= '150';
var totalOrder1= Number(order1) + Number(order2);

console.log(totalOrder1);


// Aşağıdaki sparişlerin toplamını hesaplayınız.

var order3='100.2';
var order4='150.5';
var totalOrder2= Number(order3) + Number(order4);

console.log(totalOrder2);

// Aşağıdaki sparişlerin toplamını tam sayı olarak hesaplayınız.

var order4= '100.2';
var order5= '150.5';
var totalOrder3= parseInt(order4) + parseInt(order5);

console.log(totalOrder3);

// Aşağıda verilen doğum yılına göre yaş hesaplayınız

const yearOfBirth= 1986;
var now= new Date();
var age= Number(now.getFullYear()) - yearOfBirth;

console.log(age);


// Aşağıdaki string ifadenin karakter sayısını bulunuz.

let course = 'Modern Javascript Kursu';

console.log(course.length);