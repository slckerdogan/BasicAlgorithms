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
    if ((isNaN(sayi.value) || (sayi.value < 0) || (sayi.value === ""))) {
        window.alert("Lütfen sayiyi dogru girdiğinizden emin olunuz.");
        document.getElementById("info").innerHTML = "";
        location=location;
    }
    else {
        if(n1==0){
            document.getElementById('info').innerText = `Girdiğiniz sayi 1 basamakli olup ${n1} sayisi Armstrong Sayisidir`;
        }
        else{
            const sayi = parseInt(document.getElementById('sayi').value);
            const basamakSayisi = Math.floor(Math.log10(Math.abs(sayi))) + 1;
            let toplam = 0;
            let geciciSayi = n1;
            if (geciciSayi >= 0) {
                do {
                    toplam += Math.pow((geciciSayi % 10), 3);
                    geciciSayi = Math.floor(geciciSayi / 10);
                } while (geciciSayi > 0);
    
            }
            if (toplam == n1) {
                document.getElementById('info').innerText = `Girdiğiniz sayi ${basamakSayisi} basamakli olup ${n1} sayisi Armstrong Sayisidir`;
            }
            else {
                document.getElementById('info').innerText = `Girdiğiniz sayi ${basamakSayisi} basamakli olup ${n1} sayisi Armstrong Sayisi degildir`;
            }
        }

    }
}