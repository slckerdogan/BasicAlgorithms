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

let agirlik = document.getElementById("kilo");
let uzunluk = document.getElementById("boy");
let buton = document.getElementById("hesapla");
let buton2 = document.getElementById("tekrarHesapla");

buton.onclick = function () {

    let kilo=Number(agirlik.value);
    let boy=Number(uzunluk.value);

    if ((isNaN(agirlik.value) || (agirlik.value === "") || (agirlik.value <= 0)) || (isNaN(uzunluk.value) || (uzunluk.value === "") || (uzunluk.value <= 0))) {
        window.alert("Lütfen bir ağirlik-boy değerlerinizi girdiğinizden veya girdiginiz değerlerin sifirdan büyük olmasina dikkat ediniz.");
        document.getElementById("info").innerHTML = "";
        location=location;
    }

    else {

        let result = kilo / ((boy/100) * 2);

        if (result.toFixed(1) < 18.5) {
            document.getElementById("info").innerHTML = "Vücut kütle indeksiniz " + result.toFixed(1) + ' olup "İDEAL KİLONUN ALTINDASINIZ"';
        }

        else if (result.toFixed(1) < 24.9 && result.toFixed(1) >= 18.5) {
            document.getElementById("info").innerHTML = "Vücut kütle indeksiniz " + result.toFixed(1) + ' olup "İDEAL KİLONUZDASINIZ"';
        }

        else if (result.toFixed(1) < 29.9 && result.toFixed(1) >= 24.9) {
            document.getElementById("info").innerHTML = "Vücut kütle indeksiniz " + result.toFixed(1) + ' olup "İDEAL KİLONUN ÜSTÜNDESİNİZ"';
        }

        else if (result.toFixed(1) < 39.9 && result.toFixed(1) >= 29.9) {
            document.getElementById("info").innerHTML = "Vücut kütle indeksiniz " + result.toFixed(1) + ' olup "İDEAL KİLONUN ÇOK ÜSTÜNDESİNİZ (OBEZ)"';
        }

        else {
            document.getElementById("info").innerHTML = "Vücut kütle indeksiniz " + result.toFixed(1) + ' olup "İDEAL KİLONUN ÇOK ÜSTÜNDESİNİZ (MORBİD OBEZ)"';
        }
        buton2.disabled = false;
        buton.disabled = true;
    }
}
function gonder() {
    location = location;
}