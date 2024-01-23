class Insan{ // sınıf 
    /*
    1-özellikler
    2-yapıcı metot
    3-Function
    */
    constructor(isim,soyisim,yas,maas){ // yapıcı metot
       this.isim = isim;
       this.soyisim = soyisim;
       this.yas = yas;
       this.maas = maas;
    }

    bilgileriGoster(){
        console.log(
            `
            İsim : ${this.isim}
            Soyisim : ${this.soyisim}
            Yaş : ${this.yas}
            Maaş : ${this.maas}
            `
        )
    }


}
// nesne oluşturmak 
const insan1= new Insan("yusuf","kına",22,25000);
insan1.bilgileriGoster();


