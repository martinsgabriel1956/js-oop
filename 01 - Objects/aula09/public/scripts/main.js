let car = {
  type: "SUV"
};

console.log(car);

car.numberOfPorts = 4;

console.log(car.numberOfPorts);
console.log(car.type);

if(car.type === "SUV") {
  car.sunroof = true;
}

console.log(car);

car.accelerate = () => console.log("VRUUMMMMMMMMMMMMMM");

car.accelerate();
