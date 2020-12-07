function check1(){
    var selected_Planet = document.getElementById("selectplanet").value;
    console.log(selected_Planet);
    var s = '../images/'+selected_Planet+'.jpg';
    document.getElementById("change").src = s;


    if(selected_Planet == "mercury"){
        var aod = "57,909,227km";
        var mov = "170,503km/h";
        var sg = "3.7m/s2";
        var ev = "15,300km/h";
        var as = "74,797,000km2";
        document.getElementById("one").innerHTML = aod;
        document.getElementById("two").innerHTML = mov;
        document.getElementById("three").innerHTML = sg;
        document.getElementById("four").innerHTML = ev;
        document.getElementById("five").innerHTML = as;

    }
    else if(selected_Planet == "venus"){
        var aod = "108,209,475km";
        var mov = "126,074km/h";
        var sg = "8.87m/s2";
        var ev = "37,296km/h";
        var as = "460,234,317km2";
        document.getElementById("one").innerHTML = aod;
        document.getElementById("two").innerHTML = mov;
        document.getElementById("three").innerHTML = sg;
        document.getElementById("four").innerHTML = ev;
        document.getElementById("five").innerHTML = as;

    }
    else if(selected_Planet == "mars"){
        var aod = "227,943,824km";
        var mov = "86,677km/h";
        var sg = "3.71m/s2";
        var ev = "18,108km/h";
        var as = "144,371,391km2";
        document.getElementById("one").innerHTML = aod;
        document.getElementById("two").innerHTML = mov;
        document.getElementById("three").innerHTML = sg;
        document.getElementById("four").innerHTML = ev;
        document.getElementById("five").innerHTML = as;

    }
    else if(selected_Planet == "jupiter"){
        var aod = "778,340,821km";
        var mov = "47,002km/h";
        var sg = "24.79m/s2";
        var ev = "216,720km/h";
        var as = "61,418,738,571km2";
        document.getElementById("one").innerHTML = aod;
        document.getElementById("two").innerHTML = mov;
        document.getElementById("three").innerHTML = sg;
        document.getElementById("four").innerHTML = ev;
        document.getElementById("five").innerHTML = as;

    }
    else if(selected_Planet == "saturn"){
        var aod = "1,426,666,422km";
        var mov = "34,701km/h";
        var sg = "10.4*m/s2";
        var ev = "129,924km/h";
        var as = "42,612,133,285km2";
        document.getElementById("one").innerHTML = aod;
        document.getElementById("two").innerHTML = mov;
        document.getElementById("three").innerHTML = sg;
        document.getElementById("four").innerHTML = ev;
        document.getElementById("five").innerHTML = as;

    }
    else if(selected_Planet == "uranus"){
        var aod = "2,870,658,186km";
        var mov = "24,477km/h";
        var sg = "8.87m/s2";
        var ev = "76,968km/h";
        var as = "8,083,079,690km2";
        document.getElementById("one").innerHTML = aod;
        document.getElementById("two").innerHTML = mov;
        document.getElementById("three").innerHTML = sg;
        document.getElementById("four").innerHTML = ev;
        document.getElementById("five").innerHTML = as;

    }
    else if(selected_Planet == "neptune"){
        var aod = "4,498,396,441km";
        var mov = "19,566km/h";
        var sg = "11.15m/s2";
        var ev = "84,816km/h";
        var as = "7,618,272,763km2";
        document.getElementById("one").innerHTML = aod;
        document.getElementById("two").innerHTML = mov;
        document.getElementById("three").innerHTML = sg;
        document.getElementById("four").innerHTML = ev;
        document.getElementById("five").innerHTML = as;
    }
    
    else if(selected_Planet == "earth"){
        var aod = "149,598,262km";
        var mov = "107,218km/h";
        var sg = "9.80665m/s2";
        var ev = "40,284km/h";
        var as = "510,064,472km2";
        document.getElementById("one").innerHTML = aod;
        document.getElementById("two").innerHTML = mov;
        document.getElementById("three").innerHTML = sg;
        document.getElementById("four").innerHTML = ev;
        document.getElementById("five").innerHTML = as;
    }
    
}
