// objects can be defined on one line or can span multiple lines.
let computer = { brand : 'HP', RAM : '32 GB', clockspeed : "2 GHz"};

// object definitions can have spaces and newlines!
let computer2 = { 
  brand : 'HP',
  RAM : '16 GB',
  clockspeed : "2 GHz"
};

// Objects can also have 'functions' called methods
let computer3 = {
  brand : 'HP',
  RAM : '8 GB',
  clockspeed : "2 GHz",
  
  printRam() {
    console.log(this.RAM)
  }
}