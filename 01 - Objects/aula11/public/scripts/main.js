let ninja = {
  class: 'profissional',
  weapon: 'shrunken',
  throwWeapon() {
    console.log(`Throw the ${this.weapon}`);
  },
  throwWeaponTwice() {
    for(let i = 2; i > 0; i--) {
      this.throwWeapon();
    }
  }
}

let secondNinja = {
  class: 'profissional',
  weapon: 'shrunken',
  throwWeapon() {
    console.log(`Throw the ${this.weapon} back`);
  }
}

ninja.throwWeapon();
ninja.throwWeapon();
secondNinja.throwWeapon();

console.log(ninja);