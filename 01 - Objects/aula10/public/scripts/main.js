let car = {
  type: "SUV",
  start() {
    console.log("Ligouuuu!")
  }
};

console.log(car.type);

delete car.type;
delete car.start;

console.log(car.type);
console.log(car.start);
console.log(car);