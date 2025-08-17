console.log("Shreyash")

//wo sare Elements chiye jinme box class lgi hai
// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "red" //2nd index wale ka bg color red

//document.getElementById("redBox").style.backgroundColor = "red" 

//phla box(element) select krega jiska class box hai
//document.querySelector(".box").style.backgroundColor = "green" //inline css

// returns node list,sare elements jinka class box hai,isme sare elements ko agr green krna hai to upr wala mathod kam nhi aayega
console.log(document.querySelectorAll(".box"))
//we need to use loop
document.querySelectorAll(".box").forEach (e=> {
    e.style.backgroundColor = "green";
})

//sare div aa jayenge
console.log(document.getElementsByTagName("div")) 

//check if element matches the given css selector or not
// e = document.getElementsByTagName("div")
// HTMLCollection(8) [div.container, div.box, div.box, div.box, div#redBox.box, div.box, div.box, div.box, redBox: div#redBox.box]
// e[4].matches("#redBox")
// true
// e[3].matches("#redBox")
// false

//look for nearest ancestor that matches the given css selector, the element itself is also checked (phle khud pe check krega)
// e = document.getElementsByTagName("div")
// HTMLCollection(8) [div.container, div.box, div.box, div.box, div#redBox.box, div.box, div.box, div.box, redBox: div#redBox.box]
// e[3].closest("#redBox")
// null....kuch match nhi hua
// e[3].closest(".container")
// <div class=​"container">​…​</div>​
// e[3].closest("html")
// <html lang=​"en">​scroll<head>​…​</head>​<body>​…​</body>​</html>​

//return true if elem b is inside elem a or when elementa == element b
// e = document.getElementsByTagName("div")
// HTMLCollection(8) [div.container, div.box, div.box, div.box, div#redBox.box, div.box, div.box, div.box, redBox: div#redBox.box]
// document.querySelector(".container").contains(e[2])
// true
// document.querySelector(".container").contains(e[0])
// true
// document.querySelector(".container").contains(document.querySelector("body"))
// false
// document.querySelector("body").contains(document.querySelector(".container"))
// true