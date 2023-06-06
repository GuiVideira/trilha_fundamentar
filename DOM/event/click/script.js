//Criando ELementos

//Create Elements

const div =document.createElement('div');
div. innerText = "Olá Devs!"

//InsertBefore
const body = document.querySelector('body')
const header = document.querySelector('header')
body.insertBefore(div, header.nextSibling)