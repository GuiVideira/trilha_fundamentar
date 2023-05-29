/*A expressão new,
 também denominada como left-hand-side expression,
 serve para criar um novo objeto usando as funções construtoras 
 que temos por padrão no JavaScript.
*/
/* delete */
const person = {
    name: 'Mayk',
    age: 25,
}
delete person.age

console.log(person)