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

var vade, kredi, buton, tutar, taksit;
kredi = document.getElementById("miktar");
buton = document.getElementById("buton");


buton.onclick = function () {
    for (let i = 0; i < document.getElementsByName("vade").length; i++) {
        if (document.getElementsByName("vade")[i].checked) {
            vade = document.getElementsByName("vade")[i].value;
        }
    }

    var krediMiktari = Number(kredi.value);

    if ((isNaN(kredi.value) || (kredi.value === "") || (kredi.value <= 0))) {
        window.alert("Lütfen kredi miktarini ve vade oranini seçtiğinizden emin olunuz!");
        document.getElementById("info").innerHTML = "";
        location = location;
    }

    else {
        if (vade == "12" && krediMiktari > 500000) {
            tutar = krediMiktari * 1.5;
            taksit = tutar / vade;
            document.getElementById("info").innerHTML = "Geri ödeme toplami: " + tutar.toFixed(2) + " TL " + "<br>" + "Aylik taksit tutariniz: " + taksit.toFixed(2) + " TL ";
        }
        else if (vade == "18" && (krediMiktari > 350000 && krediMiktari <= 500000)) {
            tutar = krediMiktari * 1.4;
            taksit = tutar / vade;
            document.getElementById("info").innerHTML = "Geri ödeme toplami: " + tutar.toFixed(2) + " TL " + "<br>" + "Aylik taksit tutariniz: " + taksit.toFixed(2) + " TL ";
        }
        else if (vade == "24" && (krediMiktari > 200000 && krediMiktari <= 350000)) {
            tutar = krediMiktari * 1.3;
            taksit = tutar / vade;
            document.getElementById("info").innerHTML = "Geri ödeme toplami: " + tutar.toFixed(2) + " TL " + "<br>" + "Aylik taksit tutariniz: " + taksit.toFixed(2) + " TL ";
        }
        else if (vade == "36" && (krediMiktari > 100000 && krediMiktari <= 200000)) {
            tutar = krediMiktari * 1.2;
            taksit = tutar / vade;
            document.getElementById("info").innerHTML = "Geri ödeme toplami: " + tutar.toFixed(2) + " TL " + "<br>" + "Aylik taksit tutariniz: " + taksit.toFixed(2) + " TL ";
        }
        else if (vade == "48" && krediMiktari <= 100000) {
            tutar = krediMiktari * 1.1;
            taksit = tutar / vade;
            document.getElementById("info").innerHTML = "Geri ödeme toplami: " + tutar.toFixed(2) + " TL " + "<br>" + "Aylik taksit tutariniz: " + taksit.toFixed(2) + " TL ";
        }
        else {
            alert("Lütfen kredi miktarina ve vade oranini seçtiğinizden emin olunuz!");
            document.getElementById("info").innerHTML = "";
            location = location;
        }
    }
}
