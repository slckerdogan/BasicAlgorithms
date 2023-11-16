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
let buton = document.getElementById("hesapla");

buton.onclick = function () {

    let n1 = Number(number1.value);
    let result = 1;

    if ((isNaN(number1.value) || (number1.value === "") || (number1.value < 0))) {
        window.alert("Lütfen bir sayi girdiğinizden veya girdiginiz sayinin sifir veya sifirdan büyük olmasina dikkat ediniz.");
        document.getElementById("info").innerHTML = "";
        location=location;
    }

    else {

        if (n1 == 0) {
            document.getElementById("info").innerHTML = n1 + "! = 1";
        }

        else {
            for (let i = 1; i <= n1; i++) {
                result *= i;
            }
            document.getElementById("info").innerHTML = n1 + "! = " + result;
        }

    }
}