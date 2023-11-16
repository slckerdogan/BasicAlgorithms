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

    if ((isNaN(number1.value) || (number1.value < 0) || (number1.value === ""))) {
        window.alert("Lütfen sayiyi dogru girdiğinizden emin olunuz.");
        document.getElementById("info").innerHTML = "";
        location=location;
    }

    else {
        if(n1==1){
            document.getElementById("info").innerHTML= n1 + " sayisi asal sayi degildir";
        }
        else if(n1==2){
            document.getElementById("info").innerHTML= n1 + " sayisi asal sayidir";
        }

        else{
            let degerTutucu=0;
            for(let i=0;i<=n1;i++){
                if(n1%i==0){
                    degerTutucu+=1;
                }
            }
    
            if(degerTutucu==2){
                document.getElementById("info").innerHTML= n1 + " sayisi asal sayidir";
            }
    
            else{
                document.getElementById("info").innerHTML= n1 + " sayisi asal sayi degildir";
            }
        }

    }
}