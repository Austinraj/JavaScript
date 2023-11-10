// Callback

// day 20 - day 24 Total recap session



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
        })//output undefined
        .catch((err) => {
            cb(err);
        });
}
function getAttractions(cb) {
    fetch("https://www.mecallapi.com/api/attractions")
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



// promise.allSettled

// promise.any


// promise.race
