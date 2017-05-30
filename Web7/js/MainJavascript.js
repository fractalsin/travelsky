var numer = Math.floor(Math.random()*5)+1;

function schowaj()
{
    $("#slider1").fadeOut(1000);
}

function zmienslajd()
{
    numer++; if (numer>5) numer=1;

    var plik = "<img src=\"slajdy/slajd" + numer + ".png\" />";

    document.getElementById("slider1").innerHTML = plik;
    $("#slider1").fadeIn(1000);

    setTimeout("zmienslajd()",6000);
    setTimeout("schowaj()",4500);
}