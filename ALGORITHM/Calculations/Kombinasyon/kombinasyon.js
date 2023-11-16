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

let birinci = document.getElementById("birinci");
let ikinci = document.getElementById("ikinci");
let buton = document.getElementById("hesapla");

buton.disabled = false;
buton.onclick = function () {

    let birinciSayi = Number(birinci.value);
    let ikinciSayi = Number(ikinci.value);
    let result = 1;

    if ((isNaN(birinci.value) || (birinci.value === "") || (birinci.value < 0)) || (isNaN(ikinci.value) || (ikinci.value === "") || (ikinci.value < 0))) {
        window.alert("Lütfen kombinasyon alinacak sayiyi ve seçimi uygun şekilde girdiğinizden emin olunuz.");
        document.getElementById("info").innerHTML = "";
        location=location;
    }
    else {
        if (birinciSayi === 0 && ikinciSayi === 0) {
            document.getElementById("info").innerHTML = "Sonuç : 1";
        }
        else if (birinciSayi <= 0 || ikinciSayi < 0) {
            window.alert("Kombinasyonu alinmak istenen sayi ve seçim sayisi sifirdan küçük olamaz.");
            document.getElementById("info").innerHTML = "";
            location = location;
        }
        else if (birinciSayi < ikinciSayi) {
            window.alert("Kombinasyonu alinmak istenen sayi, seçimden küçük olamaz.");
            document.getElementById("info").innerHTML = "";
            location = location;
        }
        else if (birinciSayi > 0 && ikinciSayi === 0) {
            document.getElementById("info").innerHTML = "Sonuç : 1";
        }
        else {
            //KOMBİNASYON FORMÜLÜ = C (n,r)= n!/ (( n-r)!.r !) ile ifade edilir.
            let birinciSayiFaktoriyel = 1, ikinciSayiFaktöriyel = 1, ücüncüSayiFaktöriyel = 1;
            for (let i = 1; i <= birinciSayi; i++) {
                birinciSayiFaktoriyel *= i;
            }

            for (let j = 1; j <= ikinciSayi; j++) {
                ikinciSayiFaktöriyel *= j;
            }

            for (let k = 1; k <= (birinciSayi - ikinciSayi); k++) {
                ücüncüSayiFaktöriyel *= k;
            }

            result = birinciSayiFaktoriyel / (ikinciSayiFaktöriyel * ücüncüSayiFaktöriyel);

            document.getElementById("info").innerHTML = "Sonuç : " + result;
        }

    }

}

