//callback function
//Uma callback function é uma função que está sendo passada para outra função como parâmetro. 

function sayMyName(name){
    console.log('antes de executar da callback')
    console.log('.')
    
    name()
    
    console.log('.')
    console.log('depois da callback')
}



sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)