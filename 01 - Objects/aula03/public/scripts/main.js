let machine = {
  material: "Stainless Steel",
  facilities: [
    "Motor",
    "Car Brake",
    "Car Mat",
    "Car Cylinder"
  ],
  comesAssembled: false,
  numberMotors: 1,
};

console.log("MACHINE", machine);
console.log("MATERIAL", machine.material);

for(let i = 0; i < machine.facilities.length; i++){
  console.log("FACILITIES", machine.facilities[i]);
}

if(!machine.comesAssembled) console.log("The shopper needs to assemble the machine");

console.log("NUMBER OF MOTORS", machine.numberMotors);
