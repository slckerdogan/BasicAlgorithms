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
    if ((isNaN(sayi.value) || (sayi.value === ""))) {
        window.alert("Lütfen bir sayi girdiğinizden emin olunuz.");
        document.getElementById("info").innerHTML = "";
        location=location;
    }

    else if (n1<0) {
        window.alert("Harshad Sayilari negatif olamaz!");
        document.getElementById("info").innerHTML = "";
        location = location;
    }

    else {
        if(n1==0){
            document.getElementById('info').innerText = n1 + " Harshad sayisi değildir.";
        }
        else{
            let toplam = 0;
            let geciciSayi = n1;
            let basamakDegeri;
            if (geciciSayi >= 0) {
                do {
                    basamakDegeri= geciciSayi % 10;
                    toplam+=basamakDegeri;
                    geciciSayi = Math.floor(geciciSayi / 10);
                } while (geciciSayi > 0);
    
            }
    
            if(n1%toplam==0){
                document.getElementById('info').innerText = n1 + " Harshad sayisidir.";
            }
            else{
                document.getElementById('info').innerText = n1 + " Harshad sayisi değildir.";
            }
        }
        
    }

}



