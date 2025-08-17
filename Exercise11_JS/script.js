let a = 7

//Method-1
// factorial calculating function
function factorial(number) {

    // Step 1: Array(number+1) → khaali array banata hai jiski length = number+1
    // .keys() → uske index values ka iterator deta hai (0, 1, 2, ..., number)
    // Array.from(...) → iterator ko normal array me convert karta hai
    // Example: number = 5 → [0, 1, 2, 3, 4, 5]
    let arr = Array.from(Array(number + 1).keys());

    // Step 2: .slice(1) → index 0 wala element (value 0) hata deta hai
    // Kyunki factorial me multiply 1 se start hoti hai, 0 hoga to answer 0 aa jayega
    // Result: [1, 2, 3, 4, 5]
    // Step 3: .reduce((a, b) => a * b) → saare elements ko multiply karke ek final answer deta hai
    // Process: 1*2=2 → 2*3=6 → 6*4=24 → 24*5=120
    let c = arr.slice(1).reduce((a, b) => a * b);

    // Step 4: result return karo
    return c;
}

//Method-2
function facFor(number){
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac * index
    }
    return fac
}

//Testing
console.log(factorial(a))
console.log(facFor(a))