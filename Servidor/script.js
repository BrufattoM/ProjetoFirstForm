//const toArabic = require('roman-numerals').toArabic
//const toRoman = require('roman-numerals').toRoman


function conversorDeNum() {

    const numArabico = document.getElementById("converterArabico").value;

    const numRomano = document.getElementById("converterRomano").value;

    var numFinal;

    numFinal = toRoman(numArabico);

    document.getElementById("exibirNumero").value = numFinal;

    
}

function upToTen (num, one, five, ten) {
    var value = '';
    switch (num) {
        case 0: return value;
        case 9: return one + ten;
        case 4: return one + five;
    }
    if (num >= 5) value = five, num -= 5;
    while (num-- > 0) value += one;
    return value;
}

function toRoman (arabic) {
    // Checking input first with type comparisons, convert Number() instances to
    // a literal, etc...
    if (arabic instanceof Number) arabic = parseInt(arabic, 10);
    if ('string' === typeof arabic || arabic instanceof String) {
      arabic = parseInt(arabic, 10);
      if (isNaN(arabic)) throw new TypeError('toArabic expects a number');
    }
    if ('number' !== typeof arabic) throw new TypeError('toArabic expects a number');

    // Rounding up "bad" numbers: NaN, negative numbers, numbers over 3999,...
    if (isNaN(arabic)) throw new TypeError('toArabic expects a real number');
    if (arabic < 0) throw new Error('toArabic cannot express negative numbers');
    if (arabic > 3999) throw new Error('toArabic cannot express numbers over 3999');

    // Zero is/was a special case. I'll go with Dionysius Exiguus on this one as
    // seen on http://en.wikipedia.org/wiki/Roman_numerals#Zero
    if (arabic === 0) return 'nulla';
    var roman = '';

    // Chomping away by the power of tenths
    roman += upToTen(Math.floor(arabic / 1000), 'M', '', ''), arabic %= 1000;
    roman += upToTen(Math.floor(arabic / 100), 'C', 'D', 'M'), arabic %= 100;
    roman += upToTen(Math.floor(arabic / 10), 'X', 'L', 'C'), arabic %= 10;
    roman += upToTen(arabic, 'I', 'V', 'X');
    return roman;
};




