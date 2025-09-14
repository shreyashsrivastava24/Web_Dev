// vs code k terminal me iss code ko run krne pe error aayega kyuki kuch cheeze sirf browser me available h
alert("Hello World");

// inspect krke console me dekhenge to dikhega ye,iss se aap dekh skte ki script me execution kha tk pahucha, makes debugging easy
console.log("Code is running...")
console.log("Code is also running...")
console.log("Code is running like a wow...")
console.log(3+4)
console.log("3+4")

// iss se alert msg k bad number puchega agr mai jo no dal du wo a me aa jayega
var a = prompt("Enter ur number")

// simply as if else
var isTrue = confirm("Are u sure want to leave this page and blast ur computer?")

if(isTrue) {
    console.log("Computer is blasting")
}

else {
    console.log("Computer is not blasting!")
}

// ab mai koi no dalu to wo console me aa jayega
console.log("Your number is " + a)

// styling v change kr skte

// iss se title change ho jayega
document.title = "Hey I am Good"

// bg color red kr dega...ye inline css add krta h
document.body.style.backgroundColor = "red"