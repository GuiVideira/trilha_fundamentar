/*A expressão new,
 também denominada como left-hand-side expression,
 serve para criar um novo objeto usando as funções construtoras 
 que temos por padrão no JavaScript.
*/

let nome = new String('Guilherme')
nome.surName="Videira"
let age = new Number(20)
console.log(nome.surName, age)

let date = new Date('2020-12-01')
console.log(date.__proto__)