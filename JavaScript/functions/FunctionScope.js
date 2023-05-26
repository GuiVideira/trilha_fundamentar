//Function scpoe
let subject = "go to college";

function createThink(subject) {
  subject = "study"; //este subject é diferente do subject do global scop
  return subject;
}

console.log(createThink(subject));
console.log(subject);
