console.log("Harry is a hacker")
console.log("Rohan is a hecker")

//js k asynchronous nature ki wjh se ye last me execute hoga ,script wait nhi kregi 2 sec, the end execute ho jayega then ye execute
//js me synchronous and asynchronous dono actions hote

setTimeout(() => {
    console.log("I am inside settimeout")
}, 0);

setTimeout(() => {
    console.log("I am inside settimeout 2")
}, 0);

console.log("The End")

//callback means fn ko as a variable hm pass kr skte
const fn = () => {
  console.log("Nothing")
}

const callback = (arg, fn) => {
    console.log(arg)
    fn()
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Harry", fn);
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )

//callback k andr callback is callback hell, iss se pyramid of doom bn jata