//setTimeout vai rodar uma função depois de X tempos

const timeOut = 1000
const checking = () => console.log('checking!')

let interval = setInterval(checking, timeOut)

setTimeout ( ()=> clearInterval(interval), 3000)