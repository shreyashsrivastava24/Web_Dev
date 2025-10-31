async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

function sum(a,b,c){
    return a+b+c
}

//error bcoz hm use nhi kr skte ikso aise, use krne k liye async fn bnana pdega
// let a = await sleep()
// let b = await sleep()

//immediately invoked function expression (IIFE)...ek fn bnao and usko immediately  invoke kr do
//instead of creating a fn main and then mai uske andr ye dalu aur fir imvoke kru mai iife use krunga
(async function main(){
    // let a = await sleep()
    // console.log(a)
    // let b = await sleep()
    // console.log(b)

    //destructuring
    // let [x,y] = [1,5,7]
    // console.log(x,y) //if let x,y then o/p:undefined (2) [1, 5]

    // let [x,y,...rest] = [1,5,7,4,6,7,8,9]
    // console.log(x,y,rest)

    //object destructuring
    // let obj = {
    //     a: 1,
    //     b: 2,
    //     c: 3
    // }
    //iska mtlb ye hua ki a aur b ko is object me se bahr nikalo
    // let {a,b} = obj
    // console.log(a,b)

    let arr = [1,4,6]
    console.log(sum(arr[0],arr[1],arr[2]))// ek ek  krke value jati hai yha
    console.log(sum(...arr)) //spread operator, array ko khol do
})()