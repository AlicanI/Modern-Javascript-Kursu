// Operatörler
        let val;
        const a=10;
        const b=5;
        const c=5;
        let d=4;
    // 1- Aritmatik Operatörler
        val = a+b;
        val = a-b;
        val = a*b;
        val = a/b;
        val = a%b;
        val = d++;
        val = ++d;
        val = --d;
        val = d--;

    // 2- Atama Operatörleri
        val = a;
        val += a; // val = val + a;
        val -= a; // val= val - a;
        val *= a; // val= val * a;
        val /= a; // val = val / a;
        val %= a; // val = val % a;

    // 3- Karşılaştırma Operatörleri

    val = a==b;
    val = b==c;
    val = b===c; // değer ve type kontrolü yapılıyor
    val = 5==='5';
    val = a!=b;
    val = a!==b;
    val = a > b;
    val = b > a;
    val = a >= b;
    val = 5 >= 5;
    val = a <= a;
    // 4- Mantıksal Operatörler

        // && (and)

        // true && true => true
        // true && false => false
        // false && false => false

        val= (a>b) && (a>c)

       // ||  (or) 

       // true && true => true 
       // true && false => true 
       // false && false => false

       val = (a>b) || (b>a)

       //  ! (not) 
       // ! true => false
       // ! false => true

       val= ! (a>b)

    console.log(val);
    console.log(typeof val);