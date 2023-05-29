//If Else

let temperature = 37.4
let highTemparature = temperature >=37.5
let midTemparature = temperature < 37.5 && temperature>=37

if(highTemparature){
    console.log('Está com febre alta')
} else if(midTemparature){
    console.log('Febre moderada')
}else{
    console.log('Saudavel')
}