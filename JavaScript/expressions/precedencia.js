/*
Nesta aula mostraremos a precedência dos operadores, ou seja, a ordem de importância de cada um deles.

// De cima para baixo, do mais importante ao menos importante.

* grouping                      ( )
* negação e incremento          ! ++ --
* multiplicação e divisão       * /
* adição e subtração            + -
* relacional                    < <= > >=
* igualdade                     == != === !==
* AND                           && 
* OR                            ||
* condicional                   ?:
* assignment (atribuição)       = += -= *= %=
*/

console.log( 2 + 5 * 10)//sem grouping
console.log( (2 + 5) * 10)//com grouping
console.log( 3 > 2 > 1) //relacional (transforma 3>2 em true e compara com 1 e transofrma em false
console.log( 3>2 && 2 > 1)//relacional e comparação AND
console.log( -0 ? 'verdadeiro' : 'falso' )
console.log( 0 ? 'verdadeiro' : 'falso' )
console.log( null ? 'verdadeiro' : 'falso' )
