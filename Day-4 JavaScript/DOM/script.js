// console.dir(document);

// console.dir(document.body);
// console.log(document.body);


// change background color 

// document.body.style.backgroundColor = "yellow"

// // selecting using id
// let first = document.getElementById("id1");
// console.log(first)

// // selecting using class
// let second = document.getElementsByClassName("cls")
// console.log(second)

// // selecting using tag
// let third = document.getElementsByTagName("p")
// console.log(third)

// properties 
    // tagName
    // innerText
    // innerHTML
    // textContent


// let divs = document.querySelectorAll(".box");

// idx = 1
// for(div of divs) {
//     div.innerText = `new div value ${idx}`;
//     idx += 1

// }



// Attributes
// let div = document.querySelector("div");
// let id = div.getAttribute("class")
// console.log(id)


// let para = document.querySelector("p");
// console.log(para.setAttribute("class","newClass"))


// Style
// let p = document.querySelector("p");
// p.style.backgroundColor = "red"
// p.style.fontSize = "20px"


// insert elements
let btn = document.createElement("button");
btn.innerText="Click me";


let div = document.querySelector("div");
// div.append(btn);
// div.prepend(btn);
// div.before(btn);
div.after(btn);

let newHeading = document.createElement("h1");
newHeading.innerText = "This is new Heading";

document.querySelector("body").prepend(newHeading);

// newHeading.remove();






    