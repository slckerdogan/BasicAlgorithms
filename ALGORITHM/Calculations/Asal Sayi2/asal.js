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

let number1 = document.getElementById("sayi");
let number2 = document.getElementById("sayi2");
let buton = document.getElementById("hesapla");

buton.onclick = function () {

    let n1 = Number(number1.value);
    let n2 = Number(number2.value);

    if ((isNaN(number1.value) || (number1.value < 0) || (number1.value === "")) || (isNaN(number2.value) || (number2.value < 0) || (number2.value === ""))) {
        window.alert("Lütfen sayiyi dogru girdiğinizden emin olunuz.");
        document.getElementById("info").innerHTML = "";
        location = location;
    }

    else {
        var asalSayilar = [];
        function asalSayilariBul(m, n) {
            for (let i = m; i <= n; i++) {
                let asal = true;

                if (i === 1 || i === 0) {
                    asal = false;
                } else if (i === 2) {
                    asal = true;
                } else {
                    for (let j = 2; j <= Math.sqrt(i); j++) {
                        if (i % j == 0) {
                            asal = false;
                            break;
                        }
                    }
                }

                if (asal) {
                    asalSayilar.push(i);
                }
            }
            var asalDegerler = asalSayilar.join(", ");
            document.getElementById("info").innerHTML = asalDegerler + " sayilari asal sayilardir.";
        }

        asalSayilariBul(n1, n2);
    }

}