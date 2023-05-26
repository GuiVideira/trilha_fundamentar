//exercicios

//Declare uma variavel de nome weight
var weight

//que tipo de dado é a varivael acima
console.log(typeof weight)

//Declare uma variável e atribua valores para cada um dos dados
let nickname= 'Perlon'
let age= 20
let stars= 5.0
let isSubscribed= true

//Atribua a let student = {}; as variaveis a cima
let student = {
    nickname: 'Perlon',
    age: 20,
    stars: 4.0,
    isSubscribed: true,
}

//mostre no console uma mensagem concatenada
console.log(`${student.nickname} de idade ${student.age} tem ${student.stars} estrelas.`)

//declare uma variavel do tipo array, de nome students, porem, de nehum valor
let students = []

//atribua o objeto "student" na array "students"
students = [
    student
]
console.log(students)
//coloque no console o valor da posição 0
console.log(students[0])

//crie mais um estudant e coloque na posição 1

let newStudent = {
    nickname: 'Mariana',
    age: 19,
    stars: 5.0,
    isSubscribed: true,
}
students = [
    student,
    newStudent
]