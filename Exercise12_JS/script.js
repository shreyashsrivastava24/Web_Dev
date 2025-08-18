console.log("Script.js initializing")
// let boxes = document.getElementsByClassName("box") // same cheez niche wale se
let boxes = document.querySelector(".container").children //agr box class nhi hoti to ye wala method kam aata

function getRandomColor() {
    //Math.ceil agla integer de dega
    // So formula a + Math.random() * (b - a) ka matlab hai:
    // a = minimum value...here 0
    // b = maximum value...here 255
    //          Ye always number deta hai a aur b ke beech
    
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}

//array.from means boxes se array bna lo kyuki ye sb html collecton hai and html collection me for each method hhi hota
Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})