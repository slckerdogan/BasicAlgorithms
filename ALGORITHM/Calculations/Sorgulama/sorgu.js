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

var number1 = document.getElementById("sayi");
var number2 = document.getElementById("sayi2");
let buton = document.getElementById("hesapla");

buton.onclick = function () {

    let n1 = Number(number1.value);
    let n2 = Number(number2.value);

    if (n1 == "" || n2 == "") {
        window.alert("Lütfen sayi girdiğinizden emin olunuz. Lütfen sifir rakamini girmeyiniz.");
        document.getElementById("info").innerHTML = "Sifir çarpanda yutan eleman oldugu için kati yoktur ya da bir sayinin kati degildir.";
    }

    else if (isNaN(n1) || isNaN(n2)) {
        window.alert("Lütfen sayi girdiğinizden emin olunuz");
        document.getElementById("info").innerHTML = "";
        location = location;
    }

    else {
        var buyuk, kucuk;
        if (Math.abs(n1) > Math.abs(n2)) {
            kucuk = n2;
            buyuk = n1;
        }
        else {
            kucuk = n1;
            buyuk = n2;
        }

        let degerTutucu = 0;
        if (buyuk % kucuk == 0) {
            degerTutucu += 1;
        }

        if (degerTutucu == 1) {
            document.getElementById("info").innerHTML = buyuk + " sayisi " + kucuk + " sayisinin katidir";
        }

        else {
            document.getElementById("info").innerHTML = document.getElementById("info").innerHTML = buyuk + " sayisi " + kucuk + " sayisinin kati degildir";;
        }
    }

}