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
let buton = document.getElementById("hesapla");
let buton2 = document.getElementById("tekrarHesapla");

buton.onclick = function () {

    let terimSayisi = Number(sayi.value);

    if ((isNaN(sayi.value) || (sayi.value === "") || (sayi.value <= 0))) {
        window.alert("Lütfen sayiyi uygun şekilde girdiğinizden emin olunuz");
        document.getElementById("info").innerHTML = "";
        location = location;
    }
    else {
        if (terimSayisi === 1) {
            document.getElementById("info").innerHTML = "Fibonacci serimiz: : 1";
        }
        else if (terimSayisi === 2) {
            document.getElementById("info").innerHTML = "Fibonacci serimiz: : 1 , 1";
        }
        else {
            let a = 1, b = 1, c;
            document.getElementById("info").innerHTML += "Fibonacci serimiz: ";
            document.getElementById("info").innerHTML += a + ", " + b;
            while (terimSayisi > 2) {
                c = a + b;
                document.getElementById("info").innerHTML += " , "
                document.getElementById("info").innerHTML += c;
                a = b;
                b = c;
                terimSayisi--;
            }
        }
    }
    buton2.disabled = false;
    buton.disabled = true;
}

function gonder() {
    location = location;
}