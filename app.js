// Beden kitle endeksi hesaplama 
/*
let kilo = Number(prompt("Kilonuzu giriniz : "));
let boy = Number(prompt("Boyunuzu metre cinsinden giriniz : "));

let sonuc = kilo/(boy*2);

if(sonuc < 18.5) {
    console.log("ideal kilonun altında " + sonuc);
}else if(sonuc >= 18.5 && sonuc <= 24.9){
    console.log("ideal kiloda " + sonuc);
}else if(sonuc>=25 && sonuc <= 29.9 ){
    console.log("ideal kilonun üstünde " + sonuc);
}else if(sonuc >= 30 && sonuc <= 39.9){
    console.log("ideal kilonun üstünde obez " + sonuc);
}else if(sonuc >= 40 ){
    console.log("ideal kilonun üstünde morbid obez " + sonuc);
}
*/

//  BENZİN İSTASYONU
/*
 1- dizel : 30 
 2- benzin : 32
 3- lpg : 15 

gelen müsteriden alınacak bilgiler ;
1- yakıt tipi 
2- yüklenecek yakıt litresi 

*/

/*
let dizel = 30 ;
let benzin = 32 ;
let lpg =15;

const yenisatir ="\r\n";

const yakitMetni = "1-Dizel" + yenisatir + "2-Benzin " + yenisatir + "3-LPG"+ yenisatir+ "yakıt türünü seçiniz";

let yakitTipi = prompt(yakitMetni);
if(yakitTipi =="1" || yakitTipi =="2" || yakitTipi =="3"  ){

let yakitLitresi = Number(prompt("yakıt litresi giriniz:" ));
let bakiye = Number(prompt("Bakiyenizi giriniz"));

if(yakitTipi=="1"){
    let odenecekTutar = dizel*yakitLitresi;
    if(odenecekTutar < bakiye){
        // bakiye yeterli
        bakiye = bakiye - odenecekTutar;
        alert("yakıt alma işlemi başarılı " + yenisatir 
        +"Kalan bakiye: " + (bakiye - odenecekTutar));
    }else{
        // bakiye yetersiz 
        alert("bakiyeniz yeterli değil!"+ yenisatir + "Ödenecek tutar : " + odenecekTutar + yenisatir
        + "bakiye : " + bakiye + yenisatir
        +"Eksik tutar : " + (odenecekTutar - bakiye));
    }

}else if(yakitTipi=="2"){
    let odenecekTutar = benzin*yakitLitresi;
    if(odenecekTutar < bakiye){
        // bakiye yeterli
        bakiye = bakiye - odenecekTutar;
        alert("yakıt alma işlemi başarılı " + yenisatir 
        +"Kalan bakiye: " + (bakiye - odenecekTutar));
    }else{
        // bakiye yetersiz 
        alert("bakiyeniz yeterli değil!"+ yenisatir + "Ödenecek tutar : " + odenecekTutar + yenisatir
        + "bakiye : " + bakiye + yenisatir
        +"Eksik tutar : " + (odenecekTutar - bakiye));
    }

}else if(yakitTipi=="3"){
    let odenecekTutar = lpg*yakitLitresi;
    if(odenecekTutar < bakiye){
        // bakiye yeterli
        bakiye = bakiye - odenecekTutar;
        alert("yakıt alma işlemi başarılı " + yenisatir 
        +"Kalan bakiye: " + (bakiye - odenecekTutar));
    }else{
        // bakiye yetersiz 
        alert("bakiyeniz yeterli değil!"+ yenisatir + "Ödenecek tutar : " + odenecekTutar + yenisatir
        + "bakiye : " + bakiye + yenisatir
        +"Eksik tutar : " + (odenecekTutar - bakiye));
    }
}
}

else{
    alert("Lütfen geçerli bir yakıt türü seçiniz!");
}
*/ 

// switch case örneği 
/*
let sayi = prompt("Lütfen 1 ile 5 arasında bir sayı giriniz : ");

switch(sayi){
    case "1" : 
        console.log("Girilen sayı 1'dir ");
    break;
    
    case "2" : 
        console.log("Girdiğiniz sayı 2'dir");
    break;
    
    case "3" :
        console.log("Girdiğiniz sayı 3'dür");
    break;

    case "4" :
        console.log("girdiğiniz sayı 4'tür");
    break;
    case "5" :
        console.log("girdiğiniz sayı 5'tir");
    break;
    default:
        console.log("girdiğiniz sayı 1-5 arasında olmalı...");
    break;    
}
*/

/* 
1- bakiye görüntüleme 
2- para çekme 
3- para yatırma 
4- çıkış

ATM UYGULAMASI



let yenisatir = "\r\n";
let bakiye = 1000;

let metin = "1- bakiye görüntüleme " + yenisatir 
+"2- para çekme" + yenisatir
+"3- para yatırma" + yenisatir
+"4- çıkış " + yenisatir
+"Lütfen bir değer seçiniz.";

//alert(metin);

let secim = prompt(metin);

switch(secim){
    case "1":
        console.log("bakiyeniz:" + bakiye);
    break;
    case "2":
        let cekilecektutar = Number(prompt("çekmek istediğiniz tutarı giriniz : "));
        if(cekilecektutar < bakiye){
            //başarılı
            bakiye = bakiye - cekilecektutar;
            alert("Kalan bakiye : " + bakiye);
        }else{
            alert("bakiyenizden fazla tutar çekemezsiniz"+ yenisatir
            +"bakiyeniz : " + bakiye +" " + "çekilecek tutar: " + cekilecektutar);
        }
    break;
    case "3":
        let yatirilacaktutar = Number(prompt("yatırılıacak tutarı giriniz : "));
        bakiye = bakiye + yatirilacaktutar;
        alert("Güncel bakiye :"+ bakiye);
    break;
    case "4":
        console.log("Sistemden çıkış yapılmıştır...");
    break;
    default :
        console.log("Lütfen 1 - 4 arasında bir değer giriniz");
    break;
}
*/


// ---Tür dönüşümleri---
/*
let a = 8 ;
let b = parseInt("12");

console.log(a+b);

*/

// debugger; satır satır işlenip kod kontrolü için kullanılır 

// FOR Döngüsü 
/*
for(let i=0; i<10 ; i++){
    console.log(i);
}

// WHILE Döngüsü 

let sayac = 1;

while(sayac<=10){
    console.log(sayac);
    sayac++;
}

// Do while 

let sayac = 1 ;
do{
    console.log(sayac);
    sayac++;
}while(sayac <=15);



// Çarpım tablosu yapımı 

for(let i = 1;i<=10; i++){
    for(let j=1; j<=10; j++){
        console.log(i+"x"+j+"="+ (i*j));
    }
    console.log("****************")
}


// Asal sayı bulma uygulaması 

let sayi = Number(prompt("Lütfen bir sayı giriniz :"));
let sonuc = true;
for(let i=2 ; i<= Math.floor(sayi/2) ; i++){
    if(sayi % i == 0){
        // asal değildir 
        sonuc = false;
        break;
    }
}
if(sonuc){
    alert(sayi + " asaldır");
}else{
    alert(+sayi + " asal değildir");
}


// Faktoriyel Bulma

let sayi  = Number(prompt("lütfen bir sayı giriniz :"));
let carpim = 1;
for(let i=1; i<=sayi ; i++){
    carpim = carpim * i ;
    
}
alert(carpim);


// METHODLAR 

// Parametresiz ve geriye değer döndürmeyen metot tanımlamak 

function yazdir(){
    console.log("yusuf kına");
}
yazdir();

function topla(){
    console.log(5+7);
}
topla();

// parametreli metot tanımlamak 

function yazdir(isim, soyisim){
    console.log(isim + " " + soyisim);
}

yazdir("yusuf","kına");


// Geriye değer döndüren metot tanımlamak ---- return 

function cube(sayi){
    let sonuc = sayi*sayi*sayi;
    return sonuc;
}
let donendeger = cube(3);
console.log(donendeger);


// Harf sayısı bulma uygulaması

let metin = "yusuf kına bilgisayar mühendisi";

let harf = prompt("Harfi giriniz : ");

let sonuc = bul(harf);
alert("Harf Sayısı : " + sonuc);

function bul(harf){
    let toplam = 0;
    for(let i = 0; i<metin.length ; i++ ){
        if(metin.charAt(i).toLowerCase()=== harf.toLowerCase()){
            toplam+=1;
        }
    }
    return toplam;
}


// Mükemmel sayı uygulaması

isPerfectNumber(6);

function isPerfectNumber(number){
    let toplam = 0;
    for(let i =2; i<=number/2; i++ ){
        if(number%i == 0){
            toplam+=i;
        }
    }
    toplam+=1+number;

    if(toplam==number*2){
        console.log("Mükemmel sayıdır...");
    }else{
        console.log("Mükemmel sayı değildir...");
    }""
}

// Decimal to Binary Conservion

convertDecimalToBinary(25);

function convertDecimalToBinary(number){
    let binary ="";
    while(true){
        binary+=(number%2).toString();
        number=Math.floor(number/2);
        if(number==1){
            binary+=1;
            break;
        }
    }
    let a = reverse(binary);
    console.log(a);
}


function reverse(binary){
    let reverseBinary ="";
    for(let i = binary.length-1; i>=0 ; i--){
        reverseBinary += binary.charAt(i);
    }
    return reverseBinary;
}

// Binary to decimal 
let binary = "1101011";

function convertBinaryToDecimal(binary){
    let toplam = 0;
    let ust = 0 ;

    for(let i =binary.length-1 ; i>=0 ; i--){
        toplam+= Number(binary.charAt(i)) * Math.pow(2,ust);
        ust++;
    }
    console.log("Sonuc : " +toplam);
}

convertBinaryToDecimal(binary);

// ARRAY (DİZİLER)

let sayilar = [0,1,2,3,4,5,6,7,8,9,"ali"];

console.log(sayilar[6]);

sayilar[10] = "Mehmet"; // değer değiştirme yeni değer atama



// Foreach Döngüsü  (dizilerde kullanılır genel olarak)

let isimler = ["yusuf" , "kına" , "mühendis"];

isimler.forEach(function(isim){
    console.log(isim);
});
*/ 

let arabalar = ["bmw", "toyota", "renault", "mercedes", "porsche"];

arabalar.push("opel"); // dizinin sonuna eleman ekler ve dizinin yeni değerini geri döner..
console.log(arabalar);









