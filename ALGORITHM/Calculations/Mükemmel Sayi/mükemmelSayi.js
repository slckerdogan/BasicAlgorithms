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
        window.alert("Lütfen bir sayi girdiğinizden emin olunuz.");
        document.getElementById("info").innerHTML = "";
        location=location;
    }
    
    else {
        if(n1==0){
            document.getElementById("info").innerHTML = n1 + " mükemmel sayi degildir.";
        }
        else{
            let toplam = 0;
            for (let i = 1; i <= n1; i++) {
                if (n1 % i == 0) {
                    toplam += i;
                }
            }
            if (toplam == n1 * 2) {
                document.getElementById("info").innerHTML = n1 + " mükemmel sayidir";
            }
            else {
                document.getElementById("info").innerHTML = n1 + " mükemmel sayi degildir";
            }
        }
        
    }

}



