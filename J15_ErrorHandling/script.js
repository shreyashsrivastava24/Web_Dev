let a = prompt("Enter first number")
let b = prompt("Enter second number")

//let sum = a + b //do strings ko append kr dega as in python

// kbhi kbhi errors v ache hote!
//jb v hm error throw krte hai and agr error aya to script whi ruk jati hai
if (isNaN(a) || isNaN(b)) {
    //hmne error bnai
    throw SyntaxError("Sorry this is not allowed")
}
let sum = parseInt(a) + parseInt(b) //int me parse kr dega

//error as x not defined
// console.log("The sum is ", sum*x)
//error handle
// try {
//     console.log("The sum is ", sum * x) ...try krega and agr koi error nhi then catch ignore
// } catch (error) {
//     console.log("X to define kr bkl!!!") ...agr error aya then error nhi aayega bss ye console log aayega
// }

// IMP: finally ka use tb krte hai agr hme kisi function me return k baad v koi code chlana ho to
function main(){ 
    let x = 1;
    try {
        console.log("The sum is ", sum * x)
        return true
        
    } catch (error) {
        console.log("Error aa gaya bhai")
        return false
    } 
    finally{
        console.log("files are being closed and db connection is being closed")
    }
  
}

let c = main()