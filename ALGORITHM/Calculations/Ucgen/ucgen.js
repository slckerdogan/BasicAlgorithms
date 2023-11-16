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

let birinciKenar = document.getElementById("birinciKenar");
let ikinciKenar = document.getElementById("ikinciKenar");
let ücüncüKenar = document.getElementById("ücüncüKenar");
let buton = document.getElementById("hesapla");
buton.onclick = function () {

    let kenar1 = Number(birinciKenar.value);
    let kenar2 = Number(ikinciKenar.value);
    let kenar3 = Number(ücüncüKenar.value);

    if (isNaN(kenar1) || isNaN(kenar2) || isNaN(kenar3)) {
        window.alert("Lütfen üçgenin kenar uzunluklarini uygun şekilde girdiğinizden emin olunuz.");
        document.getElementById("info").innerHTML = "";
        location = location;
    }

    else if (kenar1 == "" || kenar2 == "" || kenar3 == "") {
        window.alert("Lütfen üçgenin kenar uzunluklarini uygun şekilde girdiğinizden emin olunuz.");
        document.getElementById("info").innerHTML = "";
        location = location;
    }

    else if (kenar1 <= 0 || kenar2 <= 0 || kenar3 <= 0) {
        window.alert("Lütfen üçgenin kenar uzunluklarini uygun şekilde girdiğinizden emin olunuz.");
        document.getElementById("info").innerHTML = "";
        location = location;
    }

    else {
        if (((Math.abs(kenar2 - kenar3)) < kenar1) && (kenar1 < (kenar2 + kenar3))) {
            document.getElementById("info").innerHTML = "Yazdiğiniz kenar uzunluklari ile bir üçgen oluşur.";
        }
        else {
            document.getElementById("info").innerHTML = "Yazdiğiniz kenar uzunluklari ile bir üçgen oluşamaz.";
        }
    }
}