let person = {
  name: "Gabriel",
  age: 23,
  speak: () => console.log(`Hi, my name is Gabriel`),
  birthday() {
    this.age += 1;
  },
  sayMyAge() {
    console.log(`A minha idade é: ${this.age}`);
  }
}

console.log(person);
person.speak();
person.birthday();
console.log(person.age);
person.sayMyAge();

let calculator = {
  numbers: 0,
  sum(firstNumber, secondNumber) {
    this.numbers = firstNumber + secondNumber;
  },
  subtraction(firstNumber) {
    this.numbers -= firstNumber ;
  },
}

calculator.sum(2, 4);
console.log(calculator.numbers);
calculator.subtraction(2);
console.log(calculator.numbers);