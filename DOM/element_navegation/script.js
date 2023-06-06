//Navegando Pelos Elementos

const el = document.querySelector('body')

console.log(el.childNodes)//CONSIDERA OS ESPAÇOS VAZIOS
console.log(el.children)// N CONSIDERA ESPAÇO VAZIO

console.log(el.firstChild)//leva em consideração espaço vazio
console.log(el.firstElementChild)// n considera espaço vazio

console.log(el.lastChild)//leva em consideração espaço vazio
console.log(el.lastElementChild)// n considera espaço vazio