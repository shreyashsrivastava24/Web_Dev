// Ex: bank me bhra hua form object and form template is class

// let obj = {
//     a: 1,
//     b: "Harry"
// }

// console.log(obj)

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

//prototpe additional properties hai kisi object ki , object ki khud ki kuch properties hoti hain and protoype v hota hai ye additional properties add krne me mdd krta hai
//mai chahta ki eats rabbit me v available ho jaye so
// rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

//sirf prototype se kam nhi chlega real world objects bnane k liye class bnana pdega

class animal {
    //constructor hmesha run krega jb mai ek object bnaunga
    constructor(name) {
        //this is a way of creating properties in a object or wo object that is being created 
        //iss se a k andr name bunny aa jayega iss tarike se mai class ka andr bhot sari properties iss class ki set kr skta hu
        this.name = name
        console.log("Object is created...")
    }
    eats() {
        console.log("kha rha hoon")
    }
    jumps() {
        console.log("kood rha hoon")
    }
}

//extends animal se wo sari cheeze lion me automatically aa jayengi jo animal me hai
class Lion extends animal {
    constructor(name) {
        super(name) //ye keyword use krna pdega agr mai constructor change krna chahta hu
        this.name = name
        console.log("Object is created and he is a lion...")
    }
    //method overwriting
    eats(){
        super.eats() // mai super class k eats ko run krunga to dono aayenge kha rha hoo and Kha raha hoon roar
        console.log("Kha raha hoon roar")
    }

}

//bunny pass kra diya
let a = new animal("Bunny");
console.log(a)

let l = new Lion("Shera");
console.log(l)

