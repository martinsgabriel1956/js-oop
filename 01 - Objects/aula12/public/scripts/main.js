function CreateNinja(name, weapon) {
  this.name = name;
  this.weapon = weapon;
  this.throwWeapon = function() {
    console.log(`Throw the ${this.weapon}`);
  }
}

const firstNinja = new CreateNinja('Ryu Hayabusa', 'shrunken');

console.log(firstNinja);