let family = {
    incomes: [1000, 2000.20, 10],
    expenses: [500.30, 200, 2000, 150.78, 100]
}

function sum(array) {
    let total = 0;
    
    for(let value of array){
        total += value
    }

    return total
}

function calculateBalance(){
    const calculateIncomes= sum(family.incomes)
    const calculateExpenses= sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0
    
    let balanceText = 'negativo'
    if (itsOk){
        balanceText = 'positivo'
    }

    console.log(`Seu saldo é ${balanceText}: R$${total.toFixed(2)}`)
}

calculateBalance()