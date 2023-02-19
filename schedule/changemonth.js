function changeMonth(num){
    document.getElementById("data").innerHTML = "";
    document.getElementById("change").innerHTML = "";
    if (num == "01"){
        document.getElementById("1").className = "month_event";
        for (let i=2; i<=12;i++){
            document.getElementById(i.toString()).className = "-";
        }
        var w1 = document.getElementById("week1");
        var w2 = document.getElementById("week2");
        var w3 = document.getElementById("week3");
        var w4 = document.getElementById("week4");
        var w5 = document.getElementById("week5");
        var w6 = document.getElementById("week6");
        w1.innerHTML = "";
        w2.innerHTML = "";
        w3.innerHTML = "";
        w4.innerHTML = "";
        w5.innerHTML = "";
        w6.innerHTML = "";
        w1.insertCell(0).innerHTML = "";
        w1.insertCell(1).innerHTML = "";
        w1.insertCell(2).innerHTML = "";
        w1.insertCell(3).innerHTML = "";
        w1.insertCell(4).innerHTML = "";
        w1.insertCell(5).innerHTML = "1";
        w1.insertCell(6).innerHTML = "2"; 
        w2.insertCell(0).innerHTML = "<div style='color: red;'>3</div>";
        w2.insertCell(1).innerHTML = "4";
        w2.insertCell(2).innerHTML = "5";
        w2.insertCell(3).innerHTML = "6";
        w2.insertCell(4).innerHTML = "7";
        w2.insertCell(5).innerHTML = "8";
        w2.insertCell(6).innerHTML = "9";
        w3.insertCell(0).innerHTML = "<div style='color: red;'>10</div>";
        w3.insertCell(1).innerHTML = "11";
        w3.insertCell(2).innerHTML = "12";
        w3.insertCell(3).innerHTML = "13";
        w3.insertCell(4).innerHTML = "14";
        w3.insertCell(5).innerHTML = "15";
        w3.insertCell(6).innerHTML = "16";
        w4.insertCell(0).innerHTML = "<div style='color: red;'>17</div>";
        w4.insertCell(1).innerHTML = "18";
        w4.insertCell(2).innerHTML = "19";
        w4.insertCell(3).innerHTML = "20";
        w4.insertCell(4).innerHTML = "21";
        w4.insertCell(5).innerHTML = "22";
        w4.insertCell(6).innerHTML = "23";
        w5.insertCell(0).innerHTML = "<div style='color: red;'>24</div>";
        w5.insertCell(1).innerHTML = "25";
        w5.insertCell(2).innerHTML = "26";
        w5.insertCell(3).innerHTML = "27";
        w5.insertCell(4).innerHTML = "28";
        w5.insertCell(5).innerHTML = "29";
        w5.insertCell(6).innerHTML = "30";
        w6.insertCell(0).innerHTML = "<div style='color: red;'>31</div>";
        w6.insertCell(1).innerHTML = "";
        w6.insertCell(2).innerHTML = "";
        w6.insertCell(3).innerHTML = "";
        w6.insertCell(4).innerHTML = "";
        w6.insertCell(5).innerHTML = "";
        w6.insertCell(6).innerHTML = "";

    }
    else if (num == "02"){
        document.getElementById("2").className = "month_event";
        for (let i=1; i<num;i++){
            document.getElementById(i.toString()).className = "-";
        }
        for (let i=3; i<=12;i++){
            document.getElementById(i.toString()).className = "-";
        }
        var w1 = document.getElementById("week1");
        var w2 = document.getElementById("week2");
        var w3 = document.getElementById("week3");
        var w4 = document.getElementById("week4");
        var w5 = document.getElementById("week5");
        var w6 = document.getElementById("week6");
        w1.innerHTML = "";
        w2.innerHTML = "";
        w3.innerHTML = "";
        w4.innerHTML = "";
        w5.innerHTML = "";
        w6.innerHTML = "";
        w1.insertCell(0).innerHTML = "";
        w1.insertCell(1).innerHTML = "1"
        w1.insertCell(2).innerHTML = "2";
        w1.insertCell(3).innerHTML = "3";
        w1.insertCell(4).innerHTML = "4";
        w1.insertCell(5).innerHTML = "5";
        w1.insertCell(6).innerHTML = "6"; 
        w2.insertCell(0).innerHTML = "<div style='color: red;'>7</div>";
        w2.insertCell(1).innerHTML = "8";
        w2.insertCell(2).innerHTML = "9";
        w2.insertCell(3).innerHTML = "10";
        w2.insertCell(4).innerHTML = "11";
        w2.insertCell(5).innerHTML = "12";
        w2.insertCell(6).innerHTML = "13";
        w3.insertCell(0).innerHTML = "<div style='color: red;'>14</div>";
        w3.insertCell(1).innerHTML = "15";
        w3.insertCell(2).innerHTML = "16";
        w3.insertCell(3).innerHTML = "17";
        w3.insertCell(4).innerHTML = "18";
        w3.insertCell(5).innerHTML = "19";
        w3.insertCell(6).innerHTML = "20";
        w4.insertCell(0).innerHTML = "<div style='color: red;'>21</div>";
        w4.insertCell(1).innerHTML = "22";
        w4.insertCell(2).innerHTML = "23";
        w4.insertCell(3).innerHTML = "24";
        w4.insertCell(4).innerHTML = "25";
        w4.insertCell(5).innerHTML = "26";
        w4.insertCell(6).innerHTML = "27";
        w5.insertCell(0).innerHTML = "<div style='color: red;'>28</div>";
        w5.insertCell(1).innerHTML = "";
        w5.insertCell(2).innerHTML = "";
        w5.insertCell(3).innerHTML = "";
        w5.insertCell(4).innerHTML = "";
        w5.insertCell(5).innerHTML = "";
        w5.insertCell(6).innerHTML = "";
        w6.insertCell(0).innerHTML = "";
        w6.insertCell(1).innerHTML = "";
        w6.insertCell(2).innerHTML = "";
        w6.insertCell(3).innerHTML = "";
        w6.insertCell(4).innerHTML = "";
        w6.insertCell(5).innerHTML = "";
        w6.insertCell(6).innerHTML = "";
    }
    else if (num == "03"){
        document.getElementById("3").className = "month_event";
        for (let i=1; i<num;i++){
            document.getElementById(i.toString()).className = "-";
        }
        for (let i=4; i<=12;i++){
            document.getElementById(i.toString()).className = "-";
        }
        var w1 = document.getElementById("week1");
        var w2 = document.getElementById("week2");
        var w3 = document.getElementById("week3");
        var w4 = document.getElementById("week4");
        var w5 = document.getElementById("week5");
        var w6 = document.getElementById("week6");
        w1.innerHTML = "";
        w2.innerHTML = "";
        w3.innerHTML = "";
        w4.innerHTML = "";
        w5.innerHTML = "";
        w6.innerHTML = "";
        w1.insertCell(0).innerHTML = "";
        w1.insertCell(1).innerHTML = "1"
        w1.insertCell(2).innerHTML = "2";
        w1.insertCell(3).innerHTML = "3";
        w1.insertCell(4).innerHTML = "4";
        w1.insertCell(5).innerHTML = "5";
        w1.insertCell(6).innerHTML = "6"; 
        w2.insertCell(0).innerHTML = "<div style='color: red;'>7</div>";
        w2.insertCell(1).innerHTML = "8";
        w2.insertCell(2).innerHTML = "9";
        w2.insertCell(3).innerHTML = "10";
        w2.insertCell(4).innerHTML = "11";
        w2.insertCell(5).innerHTML = "12";
        w2.insertCell(6).innerHTML = "13";
        w3.insertCell(0).innerHTML = "<div style='color: red;'>14</div>";
        w3.insertCell(1).innerHTML = "15";
        w3.insertCell(2).innerHTML = "16";
        w3.insertCell(3).innerHTML = "17";
        w3.insertCell(4).innerHTML = "18";
        w3.insertCell(5).innerHTML = "19";
        w3.insertCell(6).innerHTML = "20";
        w4.insertCell(0).innerHTML = "<div style='color: red;'>21</div>";
        w4.insertCell(1).innerHTML = "22";
        w4.insertCell(2).innerHTML = "23";
        w4.insertCell(3).innerHTML = "24";
        w4.insertCell(4).innerHTML = "25";
        w4.insertCell(5).innerHTML = "26";
        w4.insertCell(6).innerHTML = "27";
        w5.insertCell(0).innerHTML = "<div style='color: red;'>28</div>";
        w5.insertCell(1).innerHTML = "29";
        w5.insertCell(2).innerHTML = "30";
        w5.insertCell(3).innerHTML = "31";
        w5.insertCell(4).innerHTML = "";
        w5.insertCell(5).innerHTML = "";
        w5.insertCell(6).innerHTML = "";
        w6.insertCell(0).innerHTML = "";
        w6.insertCell(1).innerHTML = "";
        w6.insertCell(2).innerHTML = "";
        w6.insertCell(3).innerHTML = "";
        w6.insertCell(4).innerHTML = "";
        w6.insertCell(5).innerHTML = "";
        w6.insertCell(6).innerHTML = "";
    }
    else if (num == "04"){
        document.getElementById("4").className = "month_event";
        for (let i=1; i<num;i++){
            document.getElementById(i.toString()).className = "-";
        }
        for (let i=5; i<=12;i++){
            document.getElementById(i.toString()).className = "-";
        }
        var w1 = document.getElementById("week1");
        var w2 = document.getElementById("week2");
        var w3 = document.getElementById("week3");
        var w4 = document.getElementById("week4");
        var w5 = document.getElementById("week5");
        var w6 = document.getElementById("week6");
        w1.innerHTML = "";
        w2.innerHTML = "";
        w3.innerHTML = "";
        w4.innerHTML = "";
        w5.innerHTML = "";
        w6.innerHTML = "";
        w1.insertCell(0).innerHTML = "";
        w1.insertCell(1).innerHTML = ""
        w1.insertCell(2).innerHTML = "";
        w1.insertCell(3).innerHTML = "";
        w1.insertCell(4).innerHTML = "1";
        w1.insertCell(5).innerHTML = "2";
        w1.insertCell(6).innerHTML = "3"; 
        w2.insertCell(0).innerHTML = "<div style='color: red;'>4</div>";
        w2.insertCell(1).innerHTML = "5";
        w2.insertCell(2).innerHTML = "6";
        w2.insertCell(3).innerHTML = "7";
        w2.insertCell(4).innerHTML = "8";
        w2.insertCell(5).innerHTML = "9";
        w2.insertCell(6).innerHTML = "10";
        w3.insertCell(0).innerHTML = "<div style='color: red;'>11</div>";
        w3.insertCell(1).innerHTML = "12";
        w3.insertCell(2).innerHTML = "13";
        w3.insertCell(3).innerHTML = "14";
        w3.insertCell(4).innerHTML = "15";
        w3.insertCell(5).innerHTML = "16";
        w3.insertCell(6).innerHTML = "17";
        w4.insertCell(0).innerHTML = "<div style='color: red;'>18</div>";
        w4.insertCell(1).innerHTML = "19";
        w4.insertCell(2).innerHTML = "20";
        w4.insertCell(3).innerHTML = "21";
        w4.insertCell(4).innerHTML = "22";
        w4.insertCell(5).innerHTML = "23";
        w4.insertCell(6).innerHTML = "24";
        w5.insertCell(0).innerHTML = "<div style='color: red;'>25</div>";
        w5.insertCell(1).innerHTML = "26";
        w5.insertCell(2).innerHTML = "27";
        w5.insertCell(3).innerHTML = "28";
        w5.insertCell(4).innerHTML = "29";
        w5.insertCell(5).innerHTML = "30";
        w5.insertCell(6).innerHTML = "";
        w6.insertCell(0).innerHTML = "";
        w6.insertCell(1).innerHTML = "";
        w6.insertCell(2).innerHTML = "";
        w6.insertCell(3).innerHTML = "";
        w6.insertCell(4).innerHTML = "";
        w6.insertCell(5).innerHTML = "";
        w6.insertCell(6).innerHTML = "";
    }
    else if (num == "05"){
        document.getElementById("5").className = "month_event";
        for (let i=1; i<num;i++){
            document.getElementById(i.toString()).className = "-";
        }
        for (let i=6; i<=12;i++){
            document.getElementById(i.toString()).className = "-";
        }
        var w1 = document.getElementById("week1");
        var w2 = document.getElementById("week2");
        var w3 = document.getElementById("week3");
        var w4 = document.getElementById("week4");
        var w5 = document.getElementById("week5");
        var w6 = document.getElementById("week6");
        w1.innerHTML = "";
        w2.innerHTML = "";
        w3.innerHTML = "";
        w4.innerHTML = "";
        w5.innerHTML = "";
        w6.innerHTML = "";
        w1.insertCell(0).innerHTML = "";
        w1.insertCell(1).innerHTML = ""
        w1.insertCell(2).innerHTML = "";
        w1.insertCell(3).innerHTML = "";
        w1.insertCell(4).innerHTML = "";
        w1.insertCell(5).innerHTML = "";
        w1.insertCell(6).innerHTML = "1"; 
        w2.insertCell(0).innerHTML = "<div style='color: red;'>2</div>";
        w2.insertCell(1).innerHTML = "3";
        w2.insertCell(2).innerHTML = "4";
        w2.insertCell(3).innerHTML = "5";
        w2.insertCell(4).innerHTML = "6";
        w2.insertCell(5).innerHTML = "7";
        w2.insertCell(6).innerHTML = "8";
        w3.insertCell(0).innerHTML = "<div style='color: red;'>9</div>";
        w3.insertCell(1).innerHTML = "10";
        w3.insertCell(2).innerHTML = "11";
        w3.insertCell(3).innerHTML = "12";
        w3.insertCell(4).innerHTML = "13";
        w3.insertCell(5).innerHTML = "14";
        w3.insertCell(6).innerHTML = "15";
        w4.insertCell(0).innerHTML = "<div style='color: red;'>16</div>";
        w4.insertCell(1).innerHTML = "17";
        w4.insertCell(2).innerHTML = "18";
        w4.insertCell(3).innerHTML = "19";
        w4.insertCell(4).innerHTML = "20";
        w4.insertCell(5).innerHTML = "21";
        w4.insertCell(6).innerHTML = "22";
        w5.insertCell(0).innerHTML = "<div style='color: red;'>23</div>";
        w5.insertCell(1).innerHTML = "24";
        w5.insertCell(2).innerHTML = "25";
        w5.insertCell(3).innerHTML = "26";
        w5.insertCell(4).innerHTML = "27";
        w5.insertCell(5).innerHTML = "28";
        w5.insertCell(6).innerHTML = "29";
        w6.insertCell(0).innerHTML = "<div style='color: red;'>30</div>";
        w6.insertCell(1).innerHTML = "31";
        w6.insertCell(2).innerHTML = "";
        w6.insertCell(3).innerHTML = "";
        w6.insertCell(4).innerHTML = "";
        w6.insertCell(5).innerHTML = "";
        w6.insertCell(6).innerHTML = "";
    }
    else if (num == "06"){
        document.getElementById("6").className = "month_event";
        for (let i=1; i<num;i++){
            document.getElementById(i.toString()).className = "-";
        }
        for (let i=7; i<=12;i++){
            document.getElementById(i.toString()).className = "-";
        }
        var w1 = document.getElementById("week1");
        var w2 = document.getElementById("week2");
        var w3 = document.getElementById("week3");
        var w4 = document.getElementById("week4");
        var w5 = document.getElementById("week5");
        var w6 = document.getElementById("week6");
        w1.innerHTML = "";
        w2.innerHTML = "";
        w3.innerHTML = "";
        w4.innerHTML = "";
        w5.innerHTML = "";
        w6.innerHTML = "";
        w1.insertCell(0).innerHTML = "";
        w1.insertCell(1).innerHTML = ""
        w1.insertCell(2).innerHTML = "1";
        w1.insertCell(3).innerHTML = "2";
        w1.insertCell(4).innerHTML = "3";
        w1.insertCell(5).innerHTML = "4";
        w1.insertCell(6).innerHTML = "5"; 
        w2.insertCell(0).innerHTML = "<div style='color: red;'>6</div>";
        w2.insertCell(1).innerHTML = "7";
        w2.insertCell(2).innerHTML = "8";
        w2.insertCell(3).innerHTML = "9";
        w2.insertCell(4).innerHTML = "10";
        w2.insertCell(5).innerHTML = "11";
        w2.insertCell(6).innerHTML = "12";
        w3.insertCell(0).innerHTML = "<div style='color: red;'>13</div>";
        w3.insertCell(1).innerHTML = "14";
        w3.insertCell(2).innerHTML = "15";
        w3.insertCell(3).innerHTML = "16";
        w3.insertCell(4).innerHTML = "17";
        w3.insertCell(5).innerHTML = "18";
        w3.insertCell(6).innerHTML = "19";
        w4.insertCell(0).innerHTML = "<div style='color: red;'>20</div>";
        w4.insertCell(1).innerHTML = "21";
        w4.insertCell(2).innerHTML = "22";
        w4.insertCell(3).innerHTML = "23";
        w4.insertCell(4).innerHTML = "24";
        w4.insertCell(5).innerHTML = "25";
        w4.insertCell(6).innerHTML = "26";
        w5.insertCell(0).innerHTML = "<div style='color: red;'>27</div>";
        w5.insertCell(1).innerHTML = "28";
        w5.insertCell(2).innerHTML = "29";
        w5.insertCell(3).innerHTML = "30";
        w5.insertCell(4).innerHTML = "";
        w5.insertCell(5).innerHTML = "";
        w5.insertCell(6).innerHTML = "";
        w6.insertCell(0).innerHTML = "";
        w6.insertCell(1).innerHTML = "";
        w6.insertCell(2).innerHTML = "";
        w6.insertCell(3).innerHTML = "";
        w6.insertCell(4).innerHTML = "";
        w6.insertCell(5).innerHTML = "";
        w6.insertCell(6).innerHTML = "";
    }
    else if (num == "07"){
        document.getElementById("7").className = "month_event";
        for (let i=1; i<num;i++){
            document.getElementById(i.toString()).className = "-";
        }
        for (let i=8; i<=12;i++){
            document.getElementById(i.toString()).className = "-";
        }
        var w1 = document.getElementById("week1");
        var w2 = document.getElementById("week2");
        var w3 = document.getElementById("week3");
        var w4 = document.getElementById("week4");
        var w5 = document.getElementById("week5");
        var w6 = document.getElementById("week6");
        w1.innerHTML = "";
        w2.innerHTML = "";
        w3.innerHTML = "";
        w4.innerHTML = "";
        w5.innerHTML = "";
        w6.innerHTML = "";
        w1.insertCell(0).innerHTML = "";
        w1.insertCell(1).innerHTML = ""
        w1.insertCell(2).innerHTML = "";
        w1.insertCell(3).innerHTML = "";
        w1.insertCell(4).innerHTML = "1";
        w1.insertCell(5).innerHTML = "2";
        w1.insertCell(6).innerHTML = "3"; 
        w2.insertCell(0).innerHTML = "<div style='color: red;'>4</div>";
        w2.insertCell(1).innerHTML = "5";
        w2.insertCell(2).innerHTML = "6";
        w2.insertCell(3).innerHTML = "7";
        w2.insertCell(4).innerHTML = "8";
        w2.insertCell(5).innerHTML = "9";
        w2.insertCell(6).innerHTML = "10";
        w3.insertCell(0).innerHTML = "<div style='color: red;'>11</div>";
        w3.insertCell(1).innerHTML = "12";
        w3.insertCell(2).innerHTML = "13";
        w3.insertCell(3).innerHTML = "14";
        w3.insertCell(4).innerHTML = "15";
        w3.insertCell(5).innerHTML = "16";
        w3.insertCell(6).innerHTML = "17";
        w4.insertCell(0).innerHTML = "<div style='color: red;'>18</div>";
        w4.insertCell(1).innerHTML = "19";
        w4.insertCell(2).innerHTML = "20";
        w4.insertCell(3).innerHTML = "21";
        w4.insertCell(4).innerHTML = "22";
        w4.insertCell(5).innerHTML = "23";
        w4.insertCell(6).innerHTML = "24";
        w5.insertCell(0).innerHTML = "<div style='color: red;'>25</div>";
        w5.insertCell(1).innerHTML = "26";
        w5.insertCell(2).innerHTML = "27";
        w5.insertCell(3).innerHTML = "28";
        w5.insertCell(4).innerHTML = "29";
        w5.insertCell(5).innerHTML = "30";
        w5.insertCell(6).innerHTML = "";
        w6.insertCell(0).innerHTML = "";
        w6.insertCell(1).innerHTML = "";
        w6.insertCell(2).innerHTML = "";
        w6.insertCell(3).innerHTML = "";
        w6.insertCell(4).innerHTML = "";
        w6.insertCell(5).innerHTML = "";
        w6.insertCell(6).innerHTML = "";
    }
    else if (num == "08"){
        document.getElementById("8").className = "month_event";
        for (let i=1; i<num;i++){
            document.getElementById(i.toString()).className = "-";
        }
        for (let i=9; i<=12;i++){
            document.getElementById(i.toString()).className = "-";
        }
        var w1 = document.getElementById("week1");
        var w2 = document.getElementById("week2");
        var w3 = document.getElementById("week3");
        var w4 = document.getElementById("week4");
        var w5 = document.getElementById("week5");
        var w6 = document.getElementById("week6");
        w1.innerHTML = "";
        w2.innerHTML = "";
        w3.innerHTML = "";
        w4.innerHTML = "";
        w5.innerHTML = "";
        w6.innerHTML = "";
        w1.insertCell(0).innerHTML = "<div style='color: red;'>1</div>";
        w1.insertCell(1).innerHTML = "2"
        w1.insertCell(2).innerHTML = "3";
        w1.insertCell(3).innerHTML = "4";
        w1.insertCell(4).innerHTML = "5";
        w1.insertCell(5).innerHTML = "6";
        w1.insertCell(6).innerHTML = "7"; 
        w2.insertCell(0).innerHTML = "<div style='color: red;'>8</div>";
        w2.insertCell(1).innerHTML = "9";
        w2.insertCell(2).innerHTML = "10";
        w2.insertCell(3).innerHTML = "11";
        w2.insertCell(4).innerHTML = "12";
        w2.insertCell(5).innerHTML = "13";
        w2.insertCell(6).innerHTML = "14";
        w3.insertCell(0).innerHTML = "<div style='color: red;'>15</div>";
        w3.insertCell(1).innerHTML = "16";
        w3.insertCell(2).innerHTML = "17";
        w3.insertCell(3).innerHTML = "18";
        w3.insertCell(4).innerHTML = "19";
        w3.insertCell(5).innerHTML = "20";
        w3.insertCell(6).innerHTML = "21";
        w4.insertCell(0).innerHTML = "<div style='color: red;'>22</div>";
        w4.insertCell(1).innerHTML = "23";
        w4.insertCell(2).innerHTML = "24";
        w4.insertCell(3).innerHTML = "25";
        w4.insertCell(4).innerHTML = "26";
        w4.insertCell(5).innerHTML = "27";
        w4.insertCell(6).innerHTML = "28";
        w5.insertCell(0).innerHTML = "<div style='color: red;'>29</div>";
        w5.insertCell(1).innerHTML = "30";
        w5.insertCell(2).innerHTML = "31";
        w5.insertCell(3).innerHTML = "";
        w5.insertCell(4).innerHTML = "";
        w5.insertCell(5).innerHTML = "";
        w5.insertCell(6).innerHTML = "";
        w6.insertCell(0).innerHTML = "";
        w6.insertCell(1).innerHTML = "";
        w6.insertCell(2).innerHTML = "";
        w6.insertCell(3).innerHTML = "";
        w6.insertCell(4).innerHTML = "";
        w6.insertCell(5).innerHTML = "";
        w6.insertCell(6).innerHTML = "";
    }
    else if (num == "09"){
        document.getElementById("9").className = "month_event";
        for (let i=1; i<num;i++){
            document.getElementById(i.toString()).className = "-";
        }
        for (let j=10; j<=12;j++){
            document.getElementById(j.toString()).className = "-";
        }
        var w1 = document.getElementById("week1");
        var w2 = document.getElementById("week2");
        var w3 = document.getElementById("week3");
        var w4 = document.getElementById("week4");
        var w5 = document.getElementById("week5");
        var w6 = document.getElementById("week6");
        w1.innerHTML = "";
        w2.innerHTML = "";
        w3.innerHTML = "";
        w4.innerHTML = "";
        w5.innerHTML = "";
        w6.innerHTML = "";
        w1.insertCell(0).innerHTML = "";
        w1.insertCell(1).innerHTML = ""
        w1.insertCell(2).innerHTML = "";
        w1.insertCell(3).innerHTML = "1";
        w1.insertCell(4).innerHTML = "2";
        w1.insertCell(5).innerHTML = "3";
        w1.insertCell(6).innerHTML = "4"; 
        w2.insertCell(0).innerHTML = "<div style='color: red;'>5</div>";
        w2.insertCell(1).innerHTML = "6";
        w2.insertCell(2).innerHTML = "7";
        w2.insertCell(3).innerHTML = "8";
        w2.insertCell(4).innerHTML = "9";
        w2.insertCell(5).innerHTML = "10";
        w2.insertCell(6).innerHTML = "11";
        w3.insertCell(0).innerHTML = "<div style='color: red;'>12</div>";
        w3.insertCell(1).innerHTML = "13";
        w3.insertCell(2).innerHTML = "14";
        w3.insertCell(3).innerHTML = "15";
        w3.insertCell(4).innerHTML = "16";
        w3.insertCell(5).innerHTML = "17";
        w3.insertCell(6).innerHTML = "18";
        w4.insertCell(0).innerHTML = "<div style='color: red;'>19</div>";
        w4.insertCell(1).innerHTML = "20";
        w4.insertCell(2).innerHTML = "21";
        w4.insertCell(3).innerHTML = "22";
        w4.insertCell(4).innerHTML = "23";
        w4.insertCell(5).innerHTML = "24";
        w4.insertCell(6).innerHTML = "25";
        w5.insertCell(0).innerHTML = "<div style='color: red;'>26</div>";
        w5.insertCell(1).innerHTML = "27";
        w5.insertCell(2).innerHTML = "28";
        w5.insertCell(3).innerHTML = "29";
        w5.insertCell(4).innerHTML = "30";
        w5.insertCell(5).innerHTML = "";
        w5.insertCell(6).innerHTML = "";
        w6.insertCell(0).innerHTML = "";
        w6.insertCell(1).innerHTML = "";
        w6.insertCell(2).innerHTML = "";
        w6.insertCell(3).innerHTML = "";
        w6.insertCell(4).innerHTML = "";
        w6.insertCell(5).innerHTML = "";
        w6.insertCell(6).innerHTML = "";
    }
    else if (num == "10"){
        document.getElementById("10").className = "month_event";
        for (let i=1; i<num;i++){
            document.getElementById(i.toString()).className = "-";
        }
        for (let j=11; j<=12;j++){
            document.getElementById(j.toString()).className = "-";
        }
    }
    else if (num == "11"){
        document.getElementById("11").className = "month_event";
        for (let i=1; i<num;i++){
            document.getElementById(i.toString()).className = "-";
        }
        document.getElementById("12").className = "-";
        var w1 = document.getElementById("week1");
        var w2 = document.getElementById("week2");
        var w3 = document.getElementById("week3");
        var w4 = document.getElementById("week4");
        var w5 = document.getElementById("week5");
        var w6 = document.getElementById("week6");
        w1.innerHTML = "";
        w2.innerHTML = "";
        w3.innerHTML = "";
        w4.innerHTML = "";
        w5.innerHTML = "";
        w6.innerHTML = "";
        w1.insertCell(0).innerHTML = "";
        w1.insertCell(1).innerHTML = "1"
        w1.insertCell(2).innerHTML = "2";
        w1.insertCell(3).innerHTML = "3";
        w1.insertCell(4).innerHTML = "4";
        w1.insertCell(5).innerHTML = "5";
        w1.insertCell(6).innerHTML = "6"; 
        w2.insertCell(0).innerHTML = "<div style='color: red;'>7</div>";
        w2.insertCell(1).innerHTML = "8";
        w2.insertCell(2).innerHTML = "9";
        w2.insertCell(3).innerHTML = "10";
        w2.insertCell(4).innerHTML = "11";
        w2.insertCell(5).innerHTML = "12";
        w2.insertCell(6).innerHTML = "13";
        w3.insertCell(0).innerHTML = "<div style='color: red;'>14</div>";
        w3.insertCell(1).innerHTML = "15";
        w3.insertCell(2).innerHTML = "16";
        w3.insertCell(3).innerHTML = "17";
        w3.insertCell(4).innerHTML = "18";
        w3.insertCell(5).innerHTML = "19";
        w3.insertCell(6).innerHTML = "20";
        w4.insertCell(0).innerHTML = "<div style='color: red;'>21</div>";
        w4.insertCell(1).innerHTML = "22";
        w4.insertCell(2).innerHTML = "23";
        w4.insertCell(3).innerHTML = "24";
        w4.insertCell(4).innerHTML = "25";
        w4.insertCell(5).innerHTML = "26";
        w4.insertCell(6).innerHTML = "27";
        w5.insertCell(0).innerHTML = "<div style='color: red;'>28</div>";
        w5.insertCell(1).innerHTML = "29";
        w5.insertCell(2).innerHTML = "30";
        w5.insertCell(3).innerHTML = "31";
        w5.insertCell(4).innerHTML = "";
        w5.insertCell(5).innerHTML = "";
        w5.insertCell(6).innerHTML = "";
        w6.insertCell(0).innerHTML = "";
        w6.insertCell(1).innerHTML = "";
        w6.insertCell(2).innerHTML = "";
        w6.insertCell(3).innerHTML = "";
        w6.insertCell(4).innerHTML = "";
        w6.insertCell(5).innerHTML = "";
        w6.insertCell(6).innerHTML = "";
    }
    else if (num == "12"){
        document.getElementById("12").className = "month_event";
        for (let i=1; i<num;i++){
            document.getElementById(i.toString()).className = "-";
        }
        var w1 = document.getElementById("week1");
        var w2 = document.getElementById("week2");
        var w3 = document.getElementById("week3");
        var w4 = document.getElementById("week4");
        var w5 = document.getElementById("week5");
        var w6 = document.getElementById("week6");
        w1.innerHTML = "";
        w2.innerHTML = "";
        w3.innerHTML = "";
        w4.innerHTML = "";
        w5.innerHTML = "";
        w6.innerHTML = "";
        w1.insertCell(0).innerHTML = "";
        w1.insertCell(1).innerHTML = ""
        w1.insertCell(2).innerHTML = "";
        w1.insertCell(3).innerHTML = "";
        w1.insertCell(4).innerHTML = "1";
        w1.insertCell(5).innerHTML = "2";
        w1.insertCell(6).innerHTML = "3"; 
        w2.insertCell(0).innerHTML = "<div style='color: red;'>4</div>";
        w2.insertCell(1).innerHTML = "5";
        w2.insertCell(2).innerHTML = "6";
        w2.insertCell(3).innerHTML = "7";
        w2.insertCell(4).innerHTML = "8";
        w2.insertCell(5).innerHTML = "9";
        w2.insertCell(6).innerHTML = "10";
        w3.insertCell(0).innerHTML = "<div style='color: red;'>11</div>";
        w3.insertCell(1).innerHTML = "12";
        w3.insertCell(2).innerHTML = "13";
        w3.insertCell(3).innerHTML = "14";
        w3.insertCell(4).innerHTML = "15";
        w3.insertCell(5).innerHTML = "16";
        w3.insertCell(6).innerHTML = "17";
        w4.insertCell(0).innerHTML = "<div style='color: red;'>18</div>";
        w4.insertCell(1).innerHTML = "19";
        w4.insertCell(2).innerHTML = "20";
        w4.insertCell(3).innerHTML = "21";
        w4.insertCell(4).innerHTML = "22";
        w4.insertCell(5).innerHTML = "23";
        w4.insertCell(6).innerHTML = "24";
        w5.insertCell(0).innerHTML = "<div style='color: red;'>25</div>";
        w5.insertCell(1).innerHTML = "26";
        w5.insertCell(2).innerHTML = "27";
        w5.insertCell(3).innerHTML = "28";
        w5.insertCell(4).innerHTML = "29";
        w5.insertCell(5).innerHTML = "30";
        w5.insertCell(6).innerHTML = "";
        w6.insertCell(0).innerHTML = "";
        w6.insertCell(1).innerHTML = "";
        w6.insertCell(2).innerHTML = "";
        w6.insertCell(3).innerHTML = "";
        w6.insertCell(4).innerHTML = "";
        w6.insertCell(5).innerHTML = "";
        w6.insertCell(6).innerHTML = "";
    }
}