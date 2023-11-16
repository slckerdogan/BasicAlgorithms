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

var buton = document.getElementById("hesapla");
var sayi = document.getElementById("sayi");
buton.onclick = function () {
    let n1 = Number(sayi.value);
    if ((isNaN(sayi.value) || (sayi.value === "") || (sayi.value < 0))) {
        window.alert("Lütfen bir sayi girmeye dikkat ediniz.");
        document.getElementById("info").innerHTML = "";
        location=location;
    }

    else if (n1 < 2) {
        window.alert("Girilen sayi 2'den küçük olamaz!");
        document.getElementById("info").innerHTML = "";
        location = location;
    }

    else {
        var sonuc = 1, i, degerler = [];
        if (n1 == 2) {
            for (i = 2; i <= n1; i++) {
                sonuc = (Math.pow(2, i) - 1);
                degerler.push(sonuc);
            }
            document.getElementById("info").innerHTML = "Mersanne asal sayilari listesi: " + degerler;
        }
        else {
            for (i = 2; i <= n1; i++) {
                let degerTutucu = 0, j;
                for (j = 0; j <= i; j++) {
                    if (i % j == 0) {
                        degerTutucu += 1;
                    }
                }
                if (degerTutucu == 2) {
                    sonuc = (Math.pow(2, i) - 1);
                    degerler.push(sonuc);
                }
            }
            var mersanneDegerler=degerler.join(", ")
            document.getElementById("info").innerHTML = "Mersanne asal sayilari listesi: " + mersanneDegerler;
        }

    }
}