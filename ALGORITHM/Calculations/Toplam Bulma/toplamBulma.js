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

let number1 = document.getElementById("ilkSayi");
let number2 = document.getElementById("ikinciSayi");
let buton = document.getElementById("hesapla");
let buton2 = document.getElementById("tekrarHesapla");

buton.onclick = function () {

    let n1 = Number(number1.value);
    let n2 = Number(number2.value);

    if ((isNaN(number1.value) || (number1.value === "")) || (isNaN(number2.value) || (number2.value === ""))) {
        window.alert("Lütfen bir sayi giriniz.");
        document.getElementById("info").innerHTML = "";
        location=location;
    }

    else if (n1 == n2) {
        window.alert("Lütfen sayilari ayni girmeyiniz");
        document.getElementById("info").innerHTML = "";
        location = location;
    }

    else if (n1 < 0 && n2 < 0) {
        if (n1 > n2) {
            window.alert("Lütfen sayilari dogru girdiğinizden emin olunuz");
            document.getElementById("info").innerHTML = "";
            location = location;
        }
        else {
            let teklerToplami = 0, ciftlerToplami = 0; {
                for (i = n1; i <= n2; i++) {
                    if (i % 2 == 0) {
                        ciftlerToplami += i
                    }
                    else {
                        teklerToplami += i
                    }
                }
                document.getElementById("info").innerHTML = "Çift Sayilarin Toplami: " + ciftlerToplami + "<br>" + "Tek Sayilarin Toplami: " + teklerToplami;

            }
        }
    }

    else {
        if (n1 > n2) {
            window.alert("Lütfen rakamlari dogru girdiğinizden emin olunuz");
            document.getElementById("info").innerHTML = "";
            location = location;
        }
        else {
            let teklerToplami = 0, ciftlerToplami = 0; {
                for (i = n1; i <= n2; i++) {
                    if (i % 2 == 0) {
                        ciftlerToplami += i
                    }
                    else {
                        teklerToplami += i
                    }
                }
                document.getElementById("info").innerHTML = "Çift Sayilarin Toplami: " + ciftlerToplami + "<br>" + "Tek Sayilarin Toplami: " + teklerToplami;

            }
        }
    }
}