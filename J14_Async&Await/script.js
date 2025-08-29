// settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully

// use async await instead of using .then
// async fn means ye fn background me chlte rhega
// async function getData() {
//     // Simulate getting data from a server (simulation)
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }

async function getData() {
    // Summary:
    // async → function promise return karega.
    // await fetch(...) → API call complete hone tak wait karega.
    // await x.json() → response ko JSON me convert karega.
    // return data → JSON object return karega.

    // Simulate getting data from a server (actual fn)
    // json placeholder se fake rest api

    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let data = await x.json()
    return data
}

//await lgane k liye isko(pure code ko) ek fn k andr wrap krna pdega & await use krne k liye async fn k andr hona chiye
async function main() {

    console.log("Loading modules")

    console.log("Do something else")

    console.log("Load data")

    //mai async fn ka wait krna chahta hu isliye await lgana pdega agr await nhi lgata to aage wale chlne lgte isko background me ptk k
    let data = await getData()

    console.log(data)

    console.log("process data")

    console.log("Task2")
}

main()

// mai chahta hu ki ye sb v n ho jb tk data n aa jaye so mai async await use kr skta and ek approach ye v but isme fir callback based approach lg rhi
//chuki data ek promise hai so //v is value // data.then means data jb ho jaye then
// data.then((v) => {
//     console.log(data)
//     console.log("process data")
//     console.log("task 2")
// })





