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

    if ((isNaN(number1.value) || (number1.value <= 0) || (number1.value === ""))) {
        window.alert("Lütfen sayiyi dogru girdiğinizden emin olunuz.");
        document.getElementById("info").innerHTML = "";
        location=location;
    }

    else {
        let degerler=[];
        while(n1!=1){
            if (n1 % 2 == 0) {
                n1 = n1 / 2;
                degerler.push(n1);
            }
            else {
                n1 = 3 * n1 + 1;
                degerler.push(n1);
            }
        }
        var collatzDegerler = degerler.join(" → ");
        document.getElementById("info").innerHTML = collatzDegerler;
    }

}
