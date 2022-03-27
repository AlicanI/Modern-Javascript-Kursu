// Demo Strings


var sentence = "     Template Literals or template strings is the ability Have multi-line strings without any funny business    "


var url = "http://sadikturan.com/Modern Javascript Kursu sıfırdan ileri seviye"

// Cümle kaç karakterlidi ?
    console.log(sentence.length);

// Kaç kelimeden oluşuyor ?
    var newSentence1 = sentence.trim().split(' ');
    console.log(newSentence1.length);

// Tüm cümleyi küçük harfe çevirin.
    var newSentence2 = sentence.toLocaleLowerCase();
    console.log(newSentence2);

// Cümlenin başındaki ve sonundaki boşlukları siliniz.
    var newsentence3 = sentence.trim();
    console.log(newsentence3);
// '-' karakterini silin.
    // var letter = sentence.indexOf('-');
    // console.log(letter);
    // var substring1 = sentence.substring(0,68);
    // var substring2 = sentence.substring(69,112);
    // var newSentence4 = substring1 + ' ' +  substring2;
    // console.log(newSentence4);

    console.log(sentence.replace('-', ''));

    
// url'nin içindeki str kısmını çıkarnız.
    var str = 'http://';
    var newUrl = url.slice(7);
    console.log(newUrl);

// url hangi protocol'u kullanmaktadır ? (http, https)

    console.log(url.startsWith('http'));
    console.log(url.startsWith('https'));

// url, '.com' ifadesini içeriyor mu ?
    console.log(url.search('.com'));
    console.log(url.includes('.com'));

// url string ifadesini geçerli bir url olarak düzenleyiniz
    var newUrl2 = url.split(' ');
    console.log(newUrl2);
    var newUrl3 = newUrl2.toString().replace(/,/g, '-');
    var properUrl = newUrl3.toLowerCase();
    var properUrl = properUrl.replace(/ı/g,'i')
                             .replace(/ü/g,'u')   
                             .replace(/ö/g,'o')   
                             .replace(/ç/g,'c')   
                             .replace(/ş/g,'s');

    console.log(properUrl);
