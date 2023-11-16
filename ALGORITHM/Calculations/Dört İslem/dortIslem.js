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

let n1, n2, button, button2, durum, islem;
n1 = document.getElementById("sayi1")
n2 = document.getElementById("sayi2")
button = document.getElementById("buton");
durum = document.getElementById("info");
button.onclick = function () {
    for (let i = 0; i < document.getElementsByName("islem").length; i++) {
        if (document.getElementsByName("islem")[i].checked) {
            islem = document.getElementsByName("islem")[i].value;
        }
    }
    if ((isNaN(n1.value) || (n1.value < 0) || (n1.value === "")) || (isNaN(n2.value) || (n2.value < 0) || (n2.value === ""))) {
        alert("Lütfen sayi girdiğinizden emin olunuz!");
        document.getElementById("info").innerHTML = "";
        location = location;
    }
    else {
        number1 = Number(n1.value);
        number2 = Number(n2.value);
        if (islem == "toplama") {
            document.getElementById("info").innerHTML = number1 + number2;
        }
        else if (islem == "çikarma") {
            document.getElementById("info").innerHTML = number1 - number2;
        }
        else if (islem == "çarpma") {
            document.getElementById("info").innerHTML = number1 * number2;
        }
        else if (islem == "bölme") {
            document.getElementById("info").innerHTML = number1 / number2;
        }
        else {
            alert("Lütfen doğru işlem yaptiğinizdan emin olunuz!");
            document.getElementById("info").innerHTML = "";
            location = location;
        }
    }
}
