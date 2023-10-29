// setTimeout
const ele = document.getElementById("time");
setTimeout(() => {
    console.log("shanker");
}, 3000);
// mm seconds


// setInterval
setInterval(() => {
    console.log("austin")
}, 2000);

// localStorage -Browser based/ 5mb-10mb

localStorage.setItem("key", "value");

localStorage.getItem("key"); //key only ues pannanum

localStorage.removeItem("key");
// sessionStorage - Tab based/removed after colsing   5mb only

sessionStorage.setItem();
sessionStorage.getItem();  //
sessionStorage.removeItem();


// XMLhtpprequest -> method
// htpp.setRequestHeader("Content-type", "application/x-www-form-urlencoder");
// htpp.setRequestHeader("Content-type", "application/json");
// 