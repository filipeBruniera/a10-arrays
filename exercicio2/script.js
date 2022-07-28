//a) O primeiro deve possuir apenas **números**, e estes números não devem seguir nenhuma ordem específica;
const arrayexe = [2, 9, 7, 5, 3, 4, 8];
//b) O segundo array deve possuir apenas **strings**;
const arrayStrings = [`Noah`, `Noeh`, `filipe`, `Vadder`];
//c) O terceiro array deve possuir **números**, **strings** e **booleanos**.
const arrayMisto = [`Dart`, 10, 25, 1, true, false];
//Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
console.log(arrayexe.length);
console.log(arrayStrings.length);
console.log(arrayMisto.length);
//- Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
console.log(arrayexe[0]);
console.log(arrayStrings[1]);
console.log(arrayMisto[2]);
//- Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array,
//e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.
const temX = arrayexe.includes(9)
console.log(temX)
const temXX = arrayexe.includes('X')
console.log(temXX)