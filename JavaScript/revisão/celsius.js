//Celsius em fahrenheit

//transform ('50F')
function transformDegree(degree){
    const celsiusExist = degree.toUpperCase().includes('C')
    const fahrenheitExist=degree.toUpperCase().includes('F')

    //fluxo alternativo
    if(!celsiusExist && !fahrenheitExist) {
        throw new Error('Grau não identificado')

    }

    //fluxo ideal, F -> C
    let updatedDegree = Number(degree.toUpperCase().replace("F",""));
    let formula =(fahrenheit)=> (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    //fluxo alternativo C -> F
    if(celsiusExist) {
        updatedDegree = Number(degree.toUpperCase().replace("C",""));
        formula =(celsius)=> celsius * 9/5 + 32
        degreeSign = 'F'
    }

    return formula (updatedDegree) + degreeSign
}

    //transformDegree('50Z')
try {
    console.log(transformDegree('50EF'))
    console.log(transformDegree('50F'))
    console.log(transformDegree('10C'))
}catch (error){
    console.log(error.message)
}