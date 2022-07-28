/*Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

- Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
- Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
- Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia; */

//a) O primeiro deve possuir apenas **números**, e estes números não devem seguir nenhuma ordem específica;
const arrayexe = [2, 9, 7, 5, 3, 4, 8];
//b) O segundo array deve possuir apenas **strings**;
const arrayStrings = [`Noah`, `Noeh`, `filipe`, `Vadder`];
//c) O terceiro array deve possuir **números**, **strings** e **booleanos**.
const arrayMisto = [`Dart`, 10, 25, 1, true, false];

const arrayExeCopy = arrayexe.slice()
const arrayStringsCopy = arrayStrings.slice()
const arrayMistoCopy = arrayMisto.slice()
//- Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
arrayexe.push(1)
console.log(arrayexe)
console.log(arrayExeCopy)
//- Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
console.log(arrayStrings)
arrayStringsCopy.pop()
console.log(arrayStringsCopy)

//- Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia; */
arrayMisto.splice(1, 1)
console.log(arrayMisto)
console.log(arrayMistoCopy)