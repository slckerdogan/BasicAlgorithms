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

let vize1 = document.getElementById("vize1");
let vize2 = document.getElementById("vize2");
let final = document.getElementById("final");
let buton = document.getElementById("hesapla");
let buton2 = document.getElementById("tekrarHesapla");

buton.onclick = function () {

    let birinciVize = Number(vize1.value);
    let ikinciVize = Number(vize2.value);
    let finalNotu = Number(final.value);

    if ((isNaN(vize1.value) || (vize1.value === "") || (vize1.value < 0)) || (isNaN(vize2.value) || (vize2.value === "") || (vize2.value < 0)) || (isNaN(final.value) || (final.value === "") || (final.value < 0))) {
        window.alert("Lütfen vize ve final notlarinizi uygun şekilde girdiğinizden emin olunuz");
        document.getElementById("info").innerHTML = "";
        location = location;
    }

    else {
        console.log(birinciVize);
        console.log(ikinciVize);
        console.log(finalNotu);
        let result = (birinciVize * 0.25) + (ikinciVize * 0.35) + (finalNotu * 0.4);
        console.log(result);

        if (result.toFixed(1) <= 29 && result.toFixed(1) >= 0) {
            document.getElementById("info").innerHTML = "Ortalamaniz " + result.toFixed(1) + " olup FF ile dersten kaldiniz";
        }

        else if (result.toFixed(1) <= 49 && result.toFixed(1) > 29) {
            document.getElementById("info").innerHTML = "Ortalamaniz " + result.toFixed(1) + " olup dersten FD ile dersten kaldiniz";
        }

        else if (result.toFixed(1) < 55 && result.toFixed(1) >= 50) {
            document.getElementById("info").innerHTML = "Ortalamaniz " + result.toFixed(1) + " olup dersten DD ile geçtiniz";
        }

        else if (result.toFixed(1) <= 59 && result.toFixed(1) >= 55) {
            document.getElementById("info").innerHTML = "Ortalamaniz " + result.toFixed(1) + " olup dersten DD ile geçtiniz";
        }

        else if (result.toFixed(1) < 65 && result.toFixed(1) > 59) {
            document.getElementById("info").innerHTML = "Ortalamaniz " + result.toFixed(1) + " olup dersten CC ile geçtiniz";
        }

        else if (result.toFixed(1) <= 69 && result.toFixed(1) >= 65) {
            document.getElementById("info").innerHTML = "Ortalamaniz " + result.toFixed(1) + " olup dersten CB ile geçtiniz";
        }

        else if (result.toFixed(1) <= 79 && result.toFixed(1) > 69) {
            document.getElementById("info").innerHTML = "Ortalamaniz " + result.toFixed(1) + " olup dersten BB ile geçtiniz";
        }

        else if (result.toFixed(1) <= 89 && result.toFixed(1) > 79) {
            document.getElementById("info").innerHTML = "Ortalamaniz " + result.toFixed(1) + " olup dersten BA ile geçtiniz";
        }

        else {
            document.getElementById("info").innerHTML = "Ortalamaniz " + result.toFixed(1) + " olup dersten AA ile geçtiniz";
        }

        buton2.disabled = false;
        buton.disabled = true;
    }
}
function gonder() {
    location = location;
}