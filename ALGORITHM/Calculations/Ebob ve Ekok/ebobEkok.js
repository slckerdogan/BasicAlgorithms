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
buton.onclick = function () {

    let birinciSayi = Number(birinci.value);
    let ikinciSayi = Number(ikinci.value);

    if ((isNaN(birinci.value) || (birinci.value <= 0) || (birinci.value === "")) || (isNaN(ikinci.value) || (ikinci.value <= 0) || (ikinci.value === ""))) {
        window.alert("Lütfen sayi girdiğinizden emin olunuz. Şayet sifir girmeye çalişiyorsaniz lütfen açiklamayi okuyunuz.");
        document.getElementById("info").innerHTML = "0 rakami çarpmada yutan rakam olduğu için EKOK'a dahil olmaz ve sayilarin 0 ile bölümü sifir olduğu için yine EBOB'a dahil olmaz.";
    }
    else {
        let EBOB,EKOK,büyük,kücük;
        if(birinciSayi>ikinciSayi){
            büyük=birinciSayi;
            kücük=ikinciSayi;
        }
        else{
            büyük=ikinciSayi;
            kücük=birinciSayi;
        }

        EBOB=kücük;
        while(büyük%EBOB!=0 || kücük%EBOB!=0){
            EBOB--;
        }
        EKOK=(büyük*kücük)/EBOB;

        document.getElementById("info").innerHTML = "EBOB'lari: " + EBOB +  "<br> EKOK'lari: " + EKOK;
    }
}