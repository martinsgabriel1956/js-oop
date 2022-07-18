let person = {
  name: "Gabriel",
  age: 23,
  speak: () => console.log(`Hi, my name is Gabriel`),
  birthday() {
    this.age += 1;
  },
  sayMyAge() {
    console.log(`A minha idade é: ${this.age}`);
  },
  canDrive() {
    if(this.age >= 18) {
      console.log("I Can drive!!");
    } else {
      console.log("I Can't yet drive!!");
    }
  },
  characteristic: {
    cnh: true,
    wallet: [
      'Money',
      'Document',
      "Coin"
    ]
  }
}

console.log(person.characteristic);
console.log(person.characteristic.wallet[2]);