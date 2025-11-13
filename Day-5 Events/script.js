// let btn = document.querySelector("#btn");

// // btn.onclick = () => {
// //     console.log("button clicked");
// //     alert('hello')
// // };


// const div = document.querySelector(".div");
// // div.onmouseover = () => {
// //     console.log("helloo");
// // };

// const handler = () => {
//     console.log("hello1");
// };

// btn.addEventListener("click", () => {
//     console.log("hello1");
// });

// btn.addEventListener("click", () => {
//         console.log("hello2");
// });
// btn.addEventListener("click", () => {
//     console.log("hello3");
// });

// // remove
// btn.removeEventListener("click", handler);



// practice

let modeBtn = document.querySelector("#modeBtn");
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if(currMode === "light") {
        currMode = "dark";
        document.body.style.backgroundColor = "black"
    }
    else {
        currMode = "light";
        document.body.style.backgroundColor = "white";
    }
    console.log(currMode);
});




