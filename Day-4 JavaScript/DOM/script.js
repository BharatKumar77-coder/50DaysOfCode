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


let divs = document.querySelectorAll(".box");

idx = 1
for(div of divs) {
    div.innerText = `new div value ${idx}`;
    idx += 1

}

    