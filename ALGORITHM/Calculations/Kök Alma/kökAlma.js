let acordion = document.querySelector("#acordion");
let statement = document.getElementsByTagName('h2');

for (let i = 0; i < statement.length; i++) {
    statement[i].addEventListener('click', displayAcordion);
}

function displayAcordion() {
    content = this.nextSibling.nextSibling;

    if (content.style.visibility != 'visible') {
        content.style.visibility = 'visible';
    }
    else {
        content.style.visibility = 'hidden';
    }
}

let sayi = document.getElementById("sayi");
let kök = document.getElementById("kök");
let buton = document.getElementById("hesapla");
let result;
buton.onclick = function () {

    let esasSayi = Number(sayi.value);
    let kökDerecesi = Number(kök.value);

    if ((isNaN(sayi.value) || (sayi.value === "") || (sayi.value < 0)) || (isNaN(kök.value) || (kök.value === "") || (kök.value < 0))) {
        window.alert("Lütfen kökü alinacak sayiyi ve dereceyi uygun şekilde girdiğinizden emin olunuz.");
        document.getElementById("info").innerHTML = "";
        location=location;
    }

    else if (esasSayi=="" &&  kökDerecesi=="") {
        document.getElementById("info").innerHTML = "0 sayisinin herhangi bir kökü 0 şeklindedir.";
    }

    else {
        let sonuc = Math.pow(esasSayi , (1 / kökDerecesi));
        if(kökDerecesi%2==0){
            document.getElementById("info").innerHTML = esasSayi + " sayisinin " + kökDerecesi + ". dereceden kökü " + sonuc.toFixed(2) + " şeklindedir.";
        }
        else{
            document.getElementById("info").innerHTML = esasSayi + " sayisinin " + kökDerecesi + ". dereceden kökü " + sonuc.toFixed(2) + " şeklindedir.";
        }
    }
}