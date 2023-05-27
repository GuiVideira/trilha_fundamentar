//function constructor
//Funções construtoras são utilizadas para criar novos objetos 
//e geralmente tem a sua primeira letra maiúscula, 
//todos com as mesmas características que são criadas na função,
// usando a palavra reservada this para se referir ao objeto sendo criado, por exemplo:

function Person(nickname) {
    this.nickname = nickname
    this.walk = function() {
        return this.nickname + " esta andando"
    }
}
const perlon = new Person("perlon");
const marifofinha2312 = new Person("marifofinha2312");
console.log(perlon.walk())
console.log(marifofinha2312.walk())