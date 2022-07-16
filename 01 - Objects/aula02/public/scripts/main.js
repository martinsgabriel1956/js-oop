let car = {
  qtdPorts: 4,
  color: "Red"
};

console.log("QTDPorts", car.qtdPorts);
console.log("Color", car.color);

if(car.qtdPorts > 2) {
  console.log("This car have more than 2 ports")
}

let person = {
  name: "Gabriel"
};

console.log("PERSON", person["name"]);

let personName = person["name"];

console.log("PersonName", personName);