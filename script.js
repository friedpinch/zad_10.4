function Telefon(marka, cena, kolor) {
  this.marka = marka; 
  this.cena = cena;
  this.kolor = kolor;
}

Telefon.prototype.printInfo = function() {
        console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + ".");
}

var iPhone6S = new Telefon("Apple", 2250, "srebrny");
iPhone6S.printInfo();

var XperiaZ5E6683  = new Telefon("Sony", 3450, "zloty");
XperiaZ5E6683.printInfo();

var PixelPhone  = new Telefon("Google", 2960, "czarny");
PixelPhone.printInfo();

var LemoK3  = new Telefon("Lenovo", 1460, "szary");
LemoK3.printInfo();
