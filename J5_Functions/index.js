// jb ek block of code ko bar bar use krna ho to use krte fns

function nice(name) {
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you course is nice!")
}

nice("Harry")
nice("Shreyash")

// c is default parameter it is optional to pass but if a nd b not passed then NaN error
function sum(a,b,c=3) {
    // console.log(a+b) ...prints 8
    return a+b+c
}

result1 = sum(3,5)
result2 = sum(1,5)
result3 = sum(3,9,1) //now this time c is passed

console.log("The sum is: ", result1)
console.log("The sum is: ", result2)
console.log("The sum is: ", result3)

//Arrow fn...is fn ko reuse kiya ja skta
//variable v hai fn v hai
//aisa krne ka fayda ye hota hai ki aap iss fn ko in turn pass kra skte ho dusre fn me
const func1 = (x)=>{
     console.log("I am an arrow fn",x)
}

func1(34);
func1(56);
func1(97);