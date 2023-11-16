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

let birinciKenar = document.getElementById("birinciKenar");
let ikinciKenar = document.getElementById("ikinciKenar");
let buton = document.getElementById("hesapla");
buton.onclick = function () {

    let kenar1 = Number(birinciKenar.value);
    let kenar2 = Number(ikinciKenar.value);

    if ((isNaN(birinciKenar.value) || (birinciKenar.value === "") || (birinciKenar.value <= 0))  || (isNaN(ikinciKenar.value) || (ikinciKenar.value === "") || (ikinciKenar.value <= 0))) {
        window.alert("Lütfen bir sayi girdiğinizden veya girdiginiz kenarlarin sifir veya sifirdan büyük olmasina dikkat ediniz.");
        document.getElementById("info").innerHTML = "";
        location=location;
    }

    else {
        let hipotenüsKaresi = Math.pow(kenar1, 2) + Math.pow(kenar2, 2);
        let hipotenüs = Math.sqrt(hipotenüsKaresi);
        document.getElementById("info").innerHTML = "Pisagor teoremine göre hipotenüs: " + hipotenüs.toFixed(2);
    }
}