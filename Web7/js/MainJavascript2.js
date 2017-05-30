var numer = Math.floor(Math.random()*5)+1;

function schowaj2()
{
    $("#slider2").fadeOut(1000);
}

function zmienslajd2()
{
    numer++; if (numer>5) numer=1;

    var plik = "<img src=\"slajdy2/slajd" + numer + ".png\" />";

    document.getElementById("slider2").innerHTML = plik;
    $("#slider2").fadeIn(1000);

    setTimeout("zmienslajd2()",6000);
    setTimeout("schowaj2()",4500);
}