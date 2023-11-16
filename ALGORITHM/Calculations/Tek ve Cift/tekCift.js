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

    if ((isNaN(number1.value) || (number1.value === ""))) {
        window.alert("Lütfen bir sayi giriniz.");
        document.getElementById("info").innerHTML = "";
        location=location;
    }

    else {
        
        if(n1==0){
            document.getElementById("info").innerHTML = "Sifir, aslinda ne tek ne de çift bir sayidir ancak, sifir bir çift sayi olarak kabul edilebilir, çünkü 2'nin katlari arasindaki bir sayidir.";
        }

        else if (Math.abs(n1) % 2 == 0) {
            document.getElementById("info").innerHTML = "Sayi çifttir";
        }

        else {
            document.getElementById("info").innerHTML = "Sayi tektir";
        }

    }
}

