let urun1 = {
    isim : "Acer Swift",
    kategori : "teknoloji",
    fiyat :6000
}
let urun2 = {
    isim : "Acer Nitro 5",
    kategori : "teknoloji",
    fiyat :15000
}
let urun3 = {
    isim : "Acer Gaming",
    kategori : "teknoloji",
    fiyat :14000
}
let urun4 = {
    isim : "Lenova V15",
    kategori : "teknoloji",
    fiyat :7000
}
let urun5 = {
    isim : "Lenova V14",
    kategori : "teknoloji",
    fiyat :4500
}


let urunler = [urun1, urun2, urun3, urun4, urun5];
let filtreliUrunler = [];
let kullaniciUrunIsmi = prompt("Bir ürün ismi giriniz: ");

FiltreliUrunleriDoldur(urunler);
filtreliUrunleriYazdir(filtreliUrunler);

function FiltreliUrunleriDoldur(urunler){
    urunler.forEach(function(urun){
        if(urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(),0)){
            filtreliUrunler.push(urun);
        }
    });
}

function filtreliUrunleriYazdir(urunler){
    urunler.forEach(function(urun){
        console.log("--------------------");
        console.log("|" + urun.isim + "|" + urun.fiyat + "|" + urun.kategori);
    });
}






