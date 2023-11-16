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

let number1 = document.getElementById("ilkSayi");
let number2 = document.getElementById("ikinciSayi");
let buton = document.getElementById("hesapla");
let buton2 = document.getElementById("tekrarHesapla");

buton.onclick = function () {

    let n1 = Number(number1.value);
    let n2 = Number(number2.value);

    if ((isNaN(number1.value) || (number1.value === "") || (number1.value < 0)) || (isNaN(number2.value) || (number2.value === "") || (number2.value < 0))) {
        window.alert("Lütfen bir sayi girdiğinizden veya girdiginiz sayinin negatif olmamasina dikkat ediniz.");
        document.getElementById("info").innerHTML = "";
        location=location;
    }

    else if(n1===n2){
        window.alert("Sayilar birbirine eşit olamaz");
        document.getElementById("info").innerHTML = "";
        location = location;
    }

    else {

        if((n2-n1-1)%2!=0){
            let result = (((n2 + n1)/2) * (n2-n1-1));
            document.getElementById("info").innerHTML = "Toplam = " +  result
            buton2.disabled = false;
            buton.disabled = true;
        }

        else{
            let result=((n2-n1-1)/2) * (n1+n2);
            document.getElementById("info").innerHTML = "Toplam = " + result
            buton2.disabled = false;
            buton.disabled = true;
        }
        
    }
}
function gonder() {
    location = location;
}