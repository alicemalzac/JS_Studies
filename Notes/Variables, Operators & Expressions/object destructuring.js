// Rather than assigning properties to a variable one by one, you can use destructuring assignment 
const student = {
    ID: '21',
    name: 'Jhon',
    GPA: '3.0',
  };
  
  //const {ID, name, GPA} = student;
  const {name:n} = student; //renamed using aliases 

  //console.log(id);
  console.log(n);
  //console.log(GPA);

