/*Os operadores ternários,
 conhecidos como operadores de condição, como o nome sugere,
 são dependentes de condições e podem entregar 
 valores diferentes com base nelas.

 Funciona da seguinte forma;

condição ? valor1 : valor2
*/

let pao = true 
let queijo = false

const nicebreakfast = pao && queijo ? 'Café top' : 'Café bode'
console.log(nicebreakfast)

let age= 20
const canDrive = age >= 18 ? 'Pode acelerar na Ancheita' : 'Demenor'
console.log(canDrive)