function getPost(postId, cb) {
    const htpp = new XMLHttpRequest();
    htpp.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                const post = JSON.parse(this.responseText);
                cb({ status: "success", data: post });
            } else {
                cb({ status: "error", error: "cannot fetch post data" });
            }
        }
    };
    htpp.open("GET", `https://jsonplaceholder.typicode.com/posts/${postId}`);
    htpp.send();
}

getPost(1, (result) => {
    if (result.status === "error") {
        console.error(result.error);
    } else {
        console.log(result.data);
    }
});


// promise

// pending
// fulfilled
// rejected
// settled

const promise = new Promise((resolve, reject) => {

    resolve("austin");

});
promise.then((result) => {
    console.log(result);
})
    .catch((err) => {
        console.error(err);
    })
    .finally(() => {
        console.log("finally");
    })


// Promise Methods 
// all
// any
// allSettled
// race

const promise1 = new Promise((resolve, reject) => {
    reject("promise 1");
});
const promise2 = new Promise((resolve, reject) => {
    resolve("promise 2");
});
const promise3 = new Promise((resolve, reject) => {
    reject("promise 3");
});
// all
// Promise.all([promise1, promise2, promise3])
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.error(err);
// });

// allSettled
// Promise.allSettled([promise1, promise2, promise3])
// .then((res)=>{
//     console.log(res)
// });

// any  succes only print pannum 
// Promise.any([promise1, promise2, promise3])
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.error(err);
// });

// AggregateError: All promises were rejected



// race
// succes or err first a executed agum
Promise.race([promise1, promise2, promise3])
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.error(err);
    });