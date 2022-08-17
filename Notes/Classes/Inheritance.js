// Inheritance enables new classes to take on the properties and methods of existing classes

// A class that another class inherits is called a superclass or base class. 
// A class that inherits from a superclass is called a subclass or derived class.

class Developer {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }
  
    getName() {
      return this.firstname + ' ' + this.lastname;
    }
  }
  
  class JSDeveloper extends Developer {
    getJob() {
      return 'JS Developer';
    }
  }
  
  var me = new JSDeveloper('Robin', 'Wieruch');
  
  console.log(me.getName());
  console.log(me.getJob());

  // Object composition - classes containing instances of other classes as attributes to implement the desired functionality instead of inheriting classes.