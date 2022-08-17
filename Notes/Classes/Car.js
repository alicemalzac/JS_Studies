class Car {
    constructor(color, model, engineCap, registrationNum) {
      this.color = color;
      this.model = model;
      this.engineCap = engineCap;
      this.registrationNum = registrationNum;
    }
    getColor() {
      return this.color;
    }
    
    getModel() {
      return this.model;
    }
    
    setColor(Color) {
      this.color = Color;
    }
    
    setModel(Model) {
      this.model = Model;
    }
  }

  var myCar = new Car('yellow', 'fox', '2', '1234');

  console.log(myCar.getColor());