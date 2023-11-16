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

var buton = document.getElementById("hesapla");
var sayi = document.getElementById("sayi");
buton.onclick = function () {
    let n1 = Number(sayi.value);

    if ((isNaN(sayi.value) || (sayi.value === ""))) {
        window.alert("Lütfen entalpi değerini dogru girdiğinizden emin olunuz.");
        document.getElementById("info").innerHTML = "";
        location=location;
    }

    else {

        if (n1 > 1) document.getElementById("info").innerHTML = "Malzemenin Entalpisi Yuksek";
        else if (n1 == 0) document.getElementById("info").innerHTML = "Malzemenin Entalpisi Kritik Noktada";
        else if (n1 > -1 && n1 < 1) document.getElementById("info").innerHTML = "Entalpi Normal";
        else if (n1 < -1) document.getElementById("info").innerHTML = "Malzemenin Entalpisi Dusuk"
        else document.getElementById("info").innerHTML = "Hatali Deger Girdiniz...Gule Gule...";
    }
}




