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

let kücük = document.getElementById("kücük");
let büyük = document.getElementById("büyük");
let buton = document.getElementById("hesapla");
let result;
buton.onclick = function () {

    let kücükSayi = Number(kücük.value);
    let büyükSayi = Number(büyük.value);

    if ((isNaN(kücük.value) || (kücük.value === "")) || (isNaN(büyük.value) || (büyük.value === ""))) {
        window.alert("Lütfen bir sayi giriniz.");
        document.getElementById("info").innerHTML = "";
        location=location;
    }

    else {

        if (kücükSayi < 0 && büyükSayi < 0) { 
            result = Math.floor(Math.random() * (büyükSayi - kücükSayi + 1)) + kücükSayi;
            document.getElementById("info").innerHTML = "Sayi : " + result.toFixed(0);
        }

        else if (kücükSayi < 0 && büyükSayi > 0) {
            result = Math.floor(Math.random() * (büyükSayi - kücükSayi + 1)) + kücükSayi;
            document.getElementById("info").innerHTML = "Sayi : " + result.toFixed(0);
        }

        else if (kücükSayi == 0 && büyükSayi > 0) {
            result = Math.floor(Math.random()*(büyükSayi));
            document.getElementById("info").innerHTML = "Sayi : " + result.toFixed(0);
        }

        else if (kücükSayi < 0 && büyükSayi == 0) {
            result = Math.floor(Math.random()*(Math.abs(kücükSayi)));
            if(result==0){
                document.getElementById("info").innerHTML = "Sayi : 0";
            }
            else{
                document.getElementById("info").innerHTML = "Sayi : " + "-" + result.toFixed(0);
            }
        }

        else if(kücükSayi > 0 && büyükSayi > 0) {
            result = Math.floor(Math.random() * (büyükSayi - kücükSayi + 1)) + kücükSayi;
            document.getElementById("info").innerHTML = "Sayi : " + result.toFixed(0);
        }

        else {
            document.getElementById("info").innerHTML = "Sayi : 0";
        }
    }
}