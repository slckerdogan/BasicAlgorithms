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

var yakit, miktar, buton, para;
miktar = document.getElementById("miktar");
buton = document.getElementById("buton");


buton.onclick = function () {
    for (let i = 0; i < document.getElementsByName("yakit").length; i++) {
        if (document.getElementsByName("yakit")[i].checked) {
            yakit = document.getElementsByName("yakit")[i].value;
        }
    }

    var yakitMiktari = Number(miktar.value);

    if (isNaN(yakitMiktari)) {
            alert("Lütfen yakit miktarini ve tipini seçtiğinizden emin olunuz!");
            document.getElementById("info").innerHTML = "";
            location = location;
        }
    else if(yakitMiktari == ""){
        alert("Lütfen yakit miktarini ve tipini seçtiğinizden emin olunuz!");
        document.getElementById("info").innerHTML = "";
        location = location;
    }

    else if(yakitMiktari<0){
        alert("Lütfen yakit miktarini ve tipini seçtiğinizden emin olunuz!");
        document.getElementById("info").innerHTML = "";
        location = location;
    }
    
    else{
        if(yakit=="Dizel"){
            para = yakitMiktari* 25;
            document.querySelector("#info").innerHTML = "Toplam ödenecek tutar " + para + " TL";
        }
        else if(yakit=="Benzin"){
            para = yakitMiktari* 20;
            document.querySelector("#info").innerHTML = "Toplam ödenecek tutar " + para + " TL";
        }
        else if(yakit=="LPG"){
            para = yakitMiktari* 30;
            document.querySelector("#info").innerHTML = "Toplam ödenecek tutar " + para + " TL";
        }
        else{
            alert("Lütfen yakit miktarini ve tipini seçtiğinizden emin olunuz!");
            document.getElementById("info").innerHTML = "";
            location = location;
        }
    }
}