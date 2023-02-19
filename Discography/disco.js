function changelan(num){
    if (num == 1){
        document.getElementById("thai").style.display = "block";
        document.getElementById('text_th').style.display = "block";
        document.getElementById('more_th').style.display = "none";
        document.getElementById("korea").style.display = "none";
        document.getElementById("th").style.color = "#d64827";
        document.getElementById("ko").style.color = "";
    }else if(num == 2){
        document.getElementById("thai").style.display = "none";
        document.getElementById("korea").style.display = "block";
        document.getElementById("th").style.color = "";
        document.getElementById("ko").style.color = "#d64827";
        document.getElementById('more_ko').style.display = "none";
        document.getElementById('text_ko').style.display = "block";
    }
}
function more(num){
    if (num == 1){
        document.getElementById('more_th').style.display = "block";
        document.getElementById('text_th').style.display = "none";
    }else if(num == 2){
        document.getElementById('more_ko').style.display = "block";
        document.getElementById('text_ko').style.display = "none";
    }
}