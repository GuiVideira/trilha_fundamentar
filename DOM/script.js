//GetELementById(element)
const element = document.getElementById('blog-title');
console.log(element)

//GetELementByClassName(HTMLcollection)
const element_class =  document.getElementsByClassName('one');
console.log(element_class)

//GetELementByTagName(HTMLcollection)
const element_tag = document.getElementsByTagName('h1');
console.log(element_tag)

//QuerySelector(element)  - pega o primeiro q acha
const element_query = document.querySelector('.one');
console.log(element_query)

//querySelectorAll(Nodelist) - pega todos 
const element_query_all = document.querySelectorAll('.one')
console.log(element_query_all)