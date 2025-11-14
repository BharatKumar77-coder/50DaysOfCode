/*console.log("1");
console.log("2");
console.log("3");

const hello = () => {
    console.log("hello");
}

setTimeout(hello, 2000);

console.log("4"); */

// callback
/*const sum = (a, b) => {
    console.log(a + b);
}

function cal(a, b, sumCallBack) {
    sumCallBack(a, b);
}

cal(2, 2, sum); */



// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         console.log("data", dataId);
//         resolve("success");
//         }, 1000);
//     })
// }

// // promise chain
// getData(1)
//     .then((res) => {
//         return getData(2);
//     })
//     .then((res) => {
//         return getData(3);
//     })
//     .then((res) => {
//         console.log(res);
//     })


// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }

// Callback Hell
// getData(1, () => {
//     console.log("getting data 2 ...");
//     getData(2, () => {
//     console.log("getting data 3 ...");
//         getData(3, () => {
//     console.log("getting data 4 ...");
//             getData(4);
//         });
//     });
// });


// Promises
// let promise = new Promise((resolve, reject) => {
//     console.log("I am promise");
//     resolve("success");
// });

/*function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
            if(getNextData) {
                getNextData();
            }
        }, 5000);
    });
}; */


// .then() & .catch()
/*const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am promise");
        reject("error");
    });
};

// let promise = getPromise();
// promise.then(() => {
//     console.log("promise fulfilled");
// })

let promise = getPromise();
promise.catch((err) => {
    console.log("promise rejected", err);
}) */



// Async-Await

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("data", dataId);
        resolve("success");
        }, 1000);
    })
}

async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
}