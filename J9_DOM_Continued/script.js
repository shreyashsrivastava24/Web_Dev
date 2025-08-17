console.log("Hello World")

// Nodes are building blocks of the DOM.
// Everything in the DOM (tags, text, attributes, comments) is a node

//childNodes //newline v text node considered // agr comment hai to comment node //index starting from 0
// document.body
// <body>​…​</body>
// document.body.childNodes
// NodeList(5) [text, div.container, text, script, text]
// document.body.childNodes[0]
// #text
// document.body.childNodes[1]
// <div class=​"container">​…​</div>
// document.body.childNodes[1].childNodes
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]

//FirstChild & LastChild
// let cont = document.body.childNodes[1] //1 means second child
// undefined
// cont
// <div class=​"container">​…​</div>
// cont.firstChild
// #text
// cont.lastChild
// #text
// continue.firstElementChild // aisa phla child chiye jo ki element hai it will ignore text nodes
// <div class="box">Box1</div>
// cont.lastElementChild //lly last element child
//<div class ="box">Box5</div>
//continue.lastElementChild.style.color = "red" //css se red
//continue.lastElementChild.style.color = "green" //css se green

//ParentNode
// continue.lastElementChild.parentElement
// <div class="container">...</div>

// document.body.firstElementChild //phla aisa child jo element ho
// <div class="container">...</div>
//document.body.firstElementChild.childNodes //sare nodes aayenge text comment element
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
//document.body.firstElementChild.children //sirf iske andr k html elements milenge,sare element nodes mil jayenge
// HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]
// document.body.firstElementChild.children
// HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]
// document.body.firstElementChild.children[0]
// <div class=​"box">​Box 1​</div>
// document.body.firstElementChild.children[1]
// <div class=​"box">​Box 2​</div>
// document.body.firstElementChild.children[3]
// <div class=​"box">​Box 4​</div>
// document.body.firstElementChild.children[3].nextElementSibling //jinke parent same wo sibling
// <div class=​"box">​Box 5​</div>
// document.body.firstElementChild.children[3].previousElementSibling
// <div class=​"box">​Box 3​</div>
// document.body.firstElementChild.children[3].previousSibling
// #text
// document.body.firstElementChild.children[3].parentElement
// <div class=​"container">​…​</div>

//Explore Table links on ur own with notes