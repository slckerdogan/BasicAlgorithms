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

var vade, vergi, buton, tutar, taksit;
vergi = document.getElementById("miktar");
buton = document.getElementById("buton");


buton.onclick = function () {
    for (let i = 0; i < document.getElementsByName("vade").length; i++) {
        if (document.getElementsByName("vade")[i].checked) {
            vade = document.getElementsByName("vade")[i].value;
        }
    }

    var vergiMiktari = Number(vergi.value);

    if (isNaN(vergiMiktari)) {
        alert("Lütfen vergi miktarini ve vade oranini seçtiğinizden emin olunuz!");
        document.getElementById("info").innerHTML = "";
        location = location;
    }

    else if (vergiMiktari == "") {
        alert("Lütfen vergi miktarini ve vade oranini seçtiğinizden emin olunuz!");
        document.getElementById("info").innerHTML = "";
        location = location;
    }

    else if (vergiMiktari < 0) {
        alert("Lütfen vergi miktarini ve vade oranini seçtiğinizden emin olunuz!");
        document.getElementById("info").innerHTML = "";
        location = location;
    }

    else if (vergiMiktari <= 10000) {
        alert("Vergi yapilandirmadan yararlanmak için minimum vergi borcunuzun 10000 TL'den fazla olmasi gerekmektedir!");
        document.getElementById("info").innerHTML = "";
        location = location;
    }

    else {
        if (vade == "12" && vergiMiktari > 50000) {
            tutar = vergiMiktari * 1.4;
            taksit = tutar / vade;
            document.getElementById("info").innerHTML = "Geri ödeme toplami: " + tutar.toFixed(2) + " TL " + "<br>" + "Aylik taksit tutariniz: " + taksit.toFixed(2) + " TL ";
        }
        else if (vade == "9" && (vergiMiktari > 35000 && vergiMiktari <= 50000)) {
            tutar = vergiMiktari * 1.3;
            taksit = tutar / vade;
            document.getElementById("info").innerHTML = "Geri ödeme toplami: " + tutar.toFixed(2) + " TL " + "<br>" + "Aylik taksit tutariniz: " + taksit.toFixed(2) + " TL ";
        }
        else if (vade == "6" && (vergiMiktari > 20000 && vergiMiktari <= 35000)) {
            tutar = vergiMiktari * 1.2;
            taksit = tutar / vade;
            document.getElementById("info").innerHTML = "Geri ödeme toplami: " + tutar.toFixed(2) + " TL " + "<br>" + "Aylik taksit tutariniz: " + taksit.toFixed(2) + " TL ";
        }
        else if (vade == "3" && (vergiMiktari > 10000 && vergiMiktari <= 20000)) {
            tutar = vergiMiktari * 1.1;
            taksit = tutar / vade;
            document.getElementById("info").innerHTML = "Geri ödeme toplami: " + tutar.toFixed(2) + " TL " + "<br>" + "Aylik taksit tutariniz: " + taksit.toFixed(2) + " TL ";
        }
        else {
            alert("Lütfen vergi miktarini ve vade oranini seçtiğinizden emin olunuz!");
            document.getElementById("info").innerHTML = "";
            location = location;
        }
    }
}
