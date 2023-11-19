// Callback

// day 21 - day 24 Total recap session



// call Stack -> one by one executed pannum then any long time event  web api irukum
// web Api ->wait pannum then onclick ilaa settime complet pannuna parugu callback Queue pogum
// callback Queue -> executed event loop then check panni call stack free ya irukanum then excuted 
// event loop -> only one velai callback free ya iruakanum matum check pannum
// GEC ->gobale executed content
console.log("austin");

setTimeout(() => {
    console.log("raja");
}, 5000);

console.log("shanker");





function getMthod() {
    setTimeout(() => {
        return "austin"; // output undefied varum
    }, 2000);
}

console.log(getMthod());


// normal callback
function getMthod(cb) {
    setTimeout(() => {
        cb("austin"); // output
    }, 2000);
}

getMthod((result) => {
    console.log(result);
});



// Error First Callback
function isEven(num, cb) {
    setTimeout(() => {
        if (num % 2 === 0) {
            cb(null, "even")
        } else {
            cb("odd");
        }
    })
}

isEven(3, (err, result) => {
    if (err) {
        console.error(err);
    } else {
        console.log(result);

    }
})



function isEven(num, cb) {
    setTimeout(() => {
        if (num % 2 === 0) {
            cb({ satus: "Success", message: "Even Number" });
        } else {
            cb({ satus: "error", error: "Odd Number" });
        }
    })
}

isEven(3, ({ satus, message, error }) => {
    if (satus === "Success") {
        console.log(message);
    } else {
        console.log(error);
    }
});

// array callback
function isEven(num, cb) {
    setTimeout(() => {
        if (num % 2 === 0) {
            cb([null, "even"])
        } else {
            cb(["odd"]);
        }
    })
}

isEven(3, ([err, result]) => {
    if (err) {
        console.error(err);
    } else {
        console.log(result);

    }
});


// Success/Failure Callback
function isEven(num, sucCb, errcb) {
    setTimeout(() => {
        if (num % 2 === 0) {
            sucCb("even")
        } else {
            errcb("odd");
        }
    })
}

isEven(3, (res) => {
    console.log(res);
}, (err) => {
    console.log(err);
}
);






// error first callback using Fetch api
function getUsers(cb) {
    fetch("https://www.mecallapi.com/api/users")
        .then((res) => {
            cb(null, res);
        })//output undefined
        .catch((err) => {
            cb(err);
        });
}

getUsers((err, res) => {
    if (err) {
        console.error(err);
    } else {
        console.log(res);
    }
});

// problem is callback hell
function getUsers(cb) {
    fetch("https://www.mecallapi.com/api/users")
        .then((res) => {
            cb(null, res);
        })
        .catch((err) => {
            cb(err);
        });
}
function getAttractions(cb) {
    fetch("https://www.mecallapi.com/api/attractions")
        .then((res) => {
            cb(null, res);
        })
        .catch((err) => {
            cb(err);
        });
}

getUsers((err, res) => {
    if (err) {
        console.error(err);
    } else {
        console.log(res);
        getAttractions((err1, res1) => {
            if (err) {
                console.error(err1);
            } else {
                console.log(res1)
            }
        })
    }
});



// Promise

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("austin");
    }, 2000)
})//output promise pending varum

console.log(promise);


const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("austin");
    }, 2000)
})

promise1
    .then(res => {//then both err and seucces
        console.log(res);
    })
    .catch((err) => {
        console.error(err)
    });




const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("austin");
    }, 2000)
})

promise2
    .then(res => {//then both err and seucces
        console.log(res);
    },
        (err) => {
            console.error(err);
        })


function isEven1(num) {
    return Promise((resolve, reject) => {
        if (num % 2 === 0) {
            resolve("even");
        } else {
            reject("Odd")
        }
    });
}

isEven1(2)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.error(err);
    });


// fetch using panni promise 
function getUsers1(){
    return fetch("https://www.mecallapi.com/api/users")
}//fetch allso one of the promise retrun panum

getUsers1()
.then((res) =>{
    console.log(res);
})
.catch(()=>{
    console.error(err);
})



// Promise methods
// promise.all
const promise3 = new Promise((reslove,reject)=>{
    setTimeout(()=>{
        reslove("guvi");
    },3000)
})
const promise4 =fetch("https://www.mecallapi.com/api/users");
const promise5 = fetch("https://www.mecallapi.com/api/attaractions");

Promise.all([promise3,promise4,promise5])
.then((res) =>{// one is reject Anaa catch wrok agum
    console.log(res);//all cedition true only executed
}).catch((err)=>{
    console.error(err);
})

// promise.allSettled
Promise.allSettled([promise3,promise4,promise5])
.then((res) =>{// seucces or error that allSettled using then only
    console.log(res);
})// catch thevailla

// promise.any
Promise.any([promise3,promise4,promise5])
.then((res) =>{// quick mudigura output display pannum
    console.log(res);//reject consider panna thu 
})// all error AggregaterError varum


// promise.race
Promise.race([promise3,promise4,promise5])
.then((res) =>{// first finish aguratha display pannum
    console.log(res);//error and result also show
})
.catch((err)=>{
    console.log(err);
})

// promise Chening problem 
const promise6 =new Promise((reslove,reject)=>{
    reslove("guvi");
})

promise6
.then((res)=>{
    console.log(res);
    return res;//return key use panni next then la use panalam 
    throw new Error("Error from then 1");
})
.then((res)=>{
    console.log("raja",res);
    return res;
})
.then(()=>{
    console.log("shanker");
})
.catch((err)=>{// one more catch use pannalum one madutha yedugum
    console.log(err);
})
.finally(()=>{//finally confimed call agum
    console.log("finally 1 !!")
})
.finally(()=>{// finally full output tharum
    console.log("finally 2");//multiple eruthalum print pannum  
})

// function fullUrl(){
//   const API_URL = fetch("https://jsonplaceholder.typicode.com/");
//   return API_URL;
// }


// function getPost(id){
//     return fullUrl(`${API_URL}posts/${id}`);
// }
// function getUsaert(id){
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${users}`);
// }
// function getComments(id){
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
// }



const getPost = (id) =>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
}
const getUser = (users) =>{
    fetch(`https://jsonplaceholder.typicode.com/users/${users}`);

}
const getComments = (id) =>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

}


(async()=>{
    try{
      let post = await getPost(1);  
      post = await post.json();
        console.log(post);

      let user = await getUser(post.userId);
      user = user.json();
        console.log(user);

      let comment = await getUser(post.id);
      comment = comment.json();
      console.log(comment);

      console.log({post, user,comment});
    }
    catch{
        console.error(err);
    }
})()


getPost(1)
.then((res)=>{
    
    if(!res.ok){
        throw new Error("cannot Fecth post data")
    }
    return  res.json();
})
.then(()=>{
    
})
.catch((err)=>{
    console.log(err);
})


