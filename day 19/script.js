// DOM Recap session


console.log(document.URL);

// document.baseURI -> same URL
//  document.body
//  document.title

// find Element -> Tag, Class, Id

// document.querySelector   - first Matching Query
// const ele1 = document.querySelector("p"); //object
// console.log(ele1.innerText);

// const ele2 = document.querySelector(".content"); //object
// console.log(ele2.innerText);

// const ele3 = document.querySelector("#content1"); //object
// console.log(ele3.innerText);

// const ele4 = document.querySelector("div.content"); //object
// console.log(ele4.innerText);


// document.querySelectorAll -> All matching Query 

const ele1 = document.querySelectorAll("p"); //Array
console.log(ele1);

const ele2 = document.querySelectorAll(".content"); //Array
console.log(ele2);

const ele3 = document.querySelectorAll("#content1"); //Array
console.log(ele3);

const ele4 = document.querySelectorAll("div.content"); //Array
console.log(ele4);
    // document.getElementById -> object
    // document.getElementsByClassName ->array
    // document.getElementsByTagName



// two property
// innerHTML
//     -> both HTML and Text content
// innerText
//     -> only Text content



// 


