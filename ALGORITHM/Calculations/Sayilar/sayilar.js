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

let n1, button, durum;
n1 = document.getElementById("sayi")
button = document.getElementById("hesapla");
durum = document.getElementById("info");
button.onclick = function () {
        if (isNaN(n1.value) || (n1.value < 0) || (n1.value === "")) {
            window.alert("Lütfen bir sayi girdiginizden emin olunuz");
            document.getElementById("info").innerHTML = "";
            location = location;
        }
        else {
            var num= parseInt(n1.value);
            var sayininTersi = 0;
            while (num != 0)
            {
                sayininTersi = sayininTersi * 10;
                sayininTersi = sayininTersi + num % 10;
                num = Math.floor(num / 10);
            }
            document.getElementById("info").innerHTML = sayininTersi;
        }
}