let button = document.getElementById("btn")

//js me bhot sare events hai see mdn ref
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

button.addEventListener("dblclick", () => {
    // alert("I was clicked. Yay!")
    document.querySelector(".box").innerHTML = "<b> Enjoy you were clicked right now!!</b>"
})

button.addEventListener("contextmenu", () => {
    // alert("I was clicked. Yay!")document
    alert("Dont't hack us by right click please!")
})

// e is event object
// Pure document par keydown event listener lagaya hai.
// Jab koi key press hoti hai:
// e → poora event object (isme sab details hote hain)
// e.key → key ka naam (e.g., "a", "Enter")
// e.keyCode → key ka numeric code (e.g., A = 65, Enter = 13)
//Console me ye 3 cheezein print hongi
document.addEventListener("keydown", (e)=>{
    console.log(e, e.key, e.keyCode)
})