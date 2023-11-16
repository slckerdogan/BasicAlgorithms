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

var sicaklik, derece, buton, dönüsenSicaklik;
derece = document.getElementById("derece");
buton = document.getElementById("buton");


buton.onclick = function () {
    for (let i = 0; i < document.getElementsByName("sicaklik").length; i++) {
        if (document.getElementsByName("sicaklik")[i].checked) {
            sicaklik = document.getElementsByName("sicaklik")[i].value;
        }
    }

    var dereceMiktari = Number(derece.value);

    if (isNaN(dereceMiktari)) {
        alert("Lütfen Celcius cinsinden girdiğiniz sicakliği ve dönüştürmek istediğiniz birimi kontrol ediniz!");
        document.getElementById("info").innerHTML = "";
        location = location;
    }

    else {
        if (sicaklik == "Fahrenheit") {
            dönüsenSicaklik= ( (dereceMiktari * 180) + 3200 ) / 100;
            document.getElementById("info").innerHTML = "Fahrenheit cinsi sicaklik degeri: " + dönüsenSicaklik + "°F";
        }
        else if (sicaklik == "Kelvin") {
            dönüsenSicaklik= ( ( (dereceMiktari * 100) + 27300 ) / 100 ) + 0.15;
            document.getElementById("info").innerHTML = "Kelvin cinsi sicaklik degeri: " + dönüsenSicaklik + "°K";
        }
        else if (sicaklik == "Reaumur") {
            dönüsenSicaklik= (dereceMiktari * 80) / 100;
            document.getElementById("info").innerHTML = "Reaumur cinsi sicaklik degeri: " + dönüsenSicaklik + "°R";
        }
        else {
            alert("Lütfen Celcius cinsinden girdiğiniz sicakliği ve dönüştürmek istediğiniz birimi kontrol ediniz!");
            document.getElementById("info").innerHTML = "";
            location = location;
        }
    }
}
