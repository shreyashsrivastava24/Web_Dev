class User {

    constructor(name) {
      // invokes the setter
      this.name = name;
    }
  
    //jb mai user.name function ko call krunga to ye getter run hoga
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value.length < 4) {
        console.log("Name is too short.");
        return;
      }
      this._name = value;
    }
  
  }
  
  let user = new User("John");
  console.log(user.name); // John
  
  //setter run hoga because of this line 
  user.name = "Harry" // Name is too short.
  console.log(user)
  console.log(user.name)