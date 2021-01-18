// potion function
function Potion(name) {

    // types of potions available
    this.types = ['strength', 'agility', 'health'];

    // randomly selects a type to use as name
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];
  
    if (this.name === 'health') {
      this.value = Math.floor(Math.random() * 10 + 30);
    } else {
      this.value = Math.floor(Math.random() * 5 + 7);
    }
  }
  
  // saves potion data into module
  module.exports = Potion;

