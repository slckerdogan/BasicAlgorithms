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
let üs = document.getElementById("üs");
let buton = document.getElementById("hesapla");
let result;
buton.onclick = function () {

    let esasSayi = Number(sayi.value);
    let üsDerecesi = Number(üs.value);

    if (isNaN(sayi.value) || sayi.value==="" || isNaN(üs.value) || üs.value==="") {
        window.alert("Lütfen sayilari uygun şekilde girdiğinizden emin olunuz.");
        document.getElementById("info").innerHTML = "";
        location = location;
    }

    else if (esasSayi==0) {
        document.getElementById("info").innerHTML = "0 sayisinin herhangi bir üssü 0 şeklindedir.";
    }

    else if (esasSayi < 0) {
        window.alert("Lütfen sayilari uygun şekilde girdiğinizden emin olunuz.");
        document.getElementById("info").innerHTML = "";
        location = location;
    }

    else if(esasSayi==1 && (üsDerecesi<=0 || üsDerecesi>0)){
        document.getElementById("info").innerHTML = "1 sayisinin herhangi bir üssü 1 şeklindedir.";
    }

    else {
        if(üsDerecesi<0){
            document.getElementById("info").innerHTML = esasSayi + " sayisinin " + üsDerecesi + ". dereceden üssü 1/" + Math.pow(esasSayi , Math.abs(üsDerecesi)) + " şeklindedir.";
        }
        else if(üsDerecesi==0){
            document.getElementById("info").innerHTML = esasSayi + " sayisinin " + üsDerecesi + ". dereceden üssü 1 şeklindedir.";
        }
        else{
            document.getElementById("info").innerHTML = esasSayi + " sayisinin " + üsDerecesi + ". dereceden üssü " + Math.pow(esasSayi , üsDerecesi) + " şeklindedir.";
        }
    }
}