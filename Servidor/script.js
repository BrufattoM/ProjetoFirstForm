const toArabic = require('roman-numerals').toArabic;
const toRoman = require('roman-numerals').toRoman;


function conversorDeNum() {

    const numArabico = document.getElementById("converterArabico").value;

    const numRomano = document.getElementById("converterRomano").value;

    var numFinal;

    numFinal = toRoman(numArabico);

    document.getElementById("exibirNumero").value = numFinal;

    
}





