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

    if ((isNaN(birinci.value) || (birinci.value === "")) || (isNaN(ikinci.value) || (ikinci.value === ""))) {
        window.alert("Lütfen girdiginiz ifadelerin rakam olmasina dikkat ediniz.");
        document.getElementById("info").innerHTML = "";
        location=location;
    }

    else{
        if (birinciSayi === 0 && ikinciSayi === 0) {
            document.getElementById("info").innerHTML = "Sonuç : 1";
        }
        else if (birinciSayi <= 0 || ikinciSayi < 0) {
            window.alert("Girilen sayilar sifirdan küçük olamaz");
            document.getElementById("info").innerHTML = "";
            location = location;
        }
        else if (birinciSayi < ikinciSayi) {
            window.alert("Permütasyonu alinacak rakam, seçim sayisindan küçük olamaz");
            document.getElementById("info").innerHTML = "";
            location = location;
        }
        else if (birinciSayi > 0 && ikinciSayi === 0) {
            document.getElementById("info").innerHTML = "Sonuç : 1";
        }
        else {
            //PERMÜTASYON FORMÜLÜ = P ( n,r ) = ( {n} n-r ) = n! / ( n-r ) ! ile ifade edilir.
            let birinciSayiFaktoriyel = 1, ikinciSayiFaktöriyel = 1;
            for (let i = 1; i <= birinciSayi; i++) {
                birinciSayiFaktoriyel *= i;
            }

            for (let j = 1; j <= (birinciSayi-ikinciSayi); j++) {
                ikinciSayiFaktöriyel *= j;
            }

            result = birinciSayiFaktoriyel / ikinciSayiFaktöriyel;

            document.getElementById("info").innerHTML = "Sonuç : " + result;
        }

    }

}

