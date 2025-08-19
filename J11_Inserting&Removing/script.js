// document.querySelector(".box")
// <div class=​"box">​Hey I am a box​</div>​
// document.querySelector(".box").innerHTML
// 'Hey I am a box'​
// document.querySelector(".container").innerHTML
// '\n        <div class="box">Hey I am a box</div>\n    '
// document.querySelector(".box").innerHTML
// 'Hey I am a box'
// document.querySelector(".box").innerText
// 'Hey I am a box'
// document.querySelector(".container").innerText
// 'Hey I am a box'

//now 2 div added
// document.querySelector(".container").innerText
// 'Hey I am a box\nHey I am a box'
// document.querySelector(".container").outerHTML... wo container khud v mil gya and its inner html
// '<div class="container">\n        <div class="box">Hey I am a box</div>\n        <div class="box">Hey I am a box</div>\n    </div>'
// document.querySelector(".container").tagName...applicable only for elements
// 'DIV'
// document.querySelector(".container").nodeName...appliable for all nodes
// 'DIV'
//document.querySelector(".container").textContent
// '\n        Hey I am a box\n        Hey I am a box\n    '
// document.querySelector(".container").hidden
// false
// document.querySelector(".container").hidden = true......ye krne se  element hide ho jata
// true
// document.querySelector(".box").innerHTML = "Hey I am Shreyash"...inner html change kr diya, phla box select krega jiski class box hai
// 'Hey I am Shreyash'

//attribute methods
// document.querySelector(".box").hasAttribute("style")
// true
// document.querySelector(".box").getAttribute("style")
// 'display: flex;'
// document.querySelector(".box").setAttribute("style", "display: inline")
// undefined
// document.querySelector(".box").attributes
// NamedNodeMap {0: class, 1: style, class: class, style: style, length: 2}
// document.querySelector(".box").removeAttributeNS("style")...style ko hta dega
// undefined
//document.designMode = "on".....edit kr skte texts in a webpage
// document.querySelector(".box").dataset
// DOMStringMap {createdby: 'Shreyash', conceptby: 'Rohan'}

//document.querySelector(".box").remove()...ye remove ho jayega ,dom update ho rhi
//undefined

// document.querySelector(".container").classList
// DOMTokenList(3) ['container', 'red', 'bg-green', value: 'container red bg-green']0: "container"1: "red"2: "bg-green"length: 3value: "container red bg-green"[[Prototype]]: DOMTokenList
// document.querySelector(".container").className
// 'container red bg-green'
// document.querySelector(".container").classList.add("harry")...adds harry class
// undefined
// document.querySelector(".container").classList.remove("harry")...removes harry class
// undefined
// document.querySelector(".container").classList.remove("red")...removes red class
// undefined

//toggle means agr on hai to off and off hai to on kr do, agr class lgi hai to hta do agr nhi lgi hai to lga do
// document.querySelector(".container").classList.toggle("red")
// false
// document.querySelector(".container").classList.toggle("red")
// true