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

let n1, button, button2, durum;
n1 = document.getElementById("sayi")
button = document.getElementById("hesapla");
button2 = document.getElementById("goster");
durum = document.getElementById("info");
button.onclick = function () { //!buradaki basma işlemiyle sayiyi tuttuk
    let number = Math.round(Math.random() * 100);
    console.log(number);
    alert("Sayiyi hazirladim eğlence başlasin... Hadi butona tikla ve başlayalim...");
    button.onclick = function () { //!buradaki basma işlemiyle sayiyi tahmin etmeye başladik
        button2.disabled = false;
        if (isNaN(n1.value) || (n1.value < 0) || (n1.value === "")) {
            durum.innerHTML = "Lütfen 0-100 arasinda bir sayi giriniz!";
        }
        else if (n1.value > number) {
            durum.innerHTML = "Lütfen daha küçük bir sayi giriniz!";
        }
        else if (n1.value < number) {
            durum.innerHTML = "Lütfen daha büyük bir sayi giriniz!";
        }
        else {
            durum.innerHTML = "Tebriklerrrr!";
        }
    }
    button2.onclick = function () {
        durum.innerHTML = "Doğru numara " + number;
    }
}