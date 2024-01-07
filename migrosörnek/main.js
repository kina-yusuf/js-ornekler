let mesaj = 
`
Migrosa hoşgelsiniz.
Money kartınız var mı ?
1-Evet
2-Hayır
`;

const urunler= [
    {
        urunIsmmi : "süt",
        fiyat : 15
    },
    {
        urunIsmmi : "bebek bezi",
        fiyat : 100
    },
    {
        urunIsmmi : "Kuşbası",
        fiyat : 200
    }

]


let sonuc = confirm(mesaj);
let odenecekTutar;
if(sonuc){
    let isim = prompt("Adınızı giriniz");
    let soyisim = prompt("soyisminizi giriniz");
    const musteri = new Musteri(isim,soyisim,sonuc,urunler);

    odenecekTutar= musteri.hesapla();
    alert(
        `Müşteri Bilgileri : ${isim} ${soyisim}
        Ödenecek Tutar : ${odenecekTutar}
        `);

}else{
    const musteri = new Musteri(null,null,sonuc,urunler);
    odenecekTutar = musteri.hesapla();
    alert(`Ödenecek Tutar : ${odenecekTutar}`);
}

