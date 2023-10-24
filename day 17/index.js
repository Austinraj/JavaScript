// console.log(document.title);

// document.title = "My website"; //change my title

// console.log(document.documentURI);
// console.log(document.body);


// const obj ={
//     names: "austin", //porptype
//     getName: function(){ //method

//     }
// }

//  const testEle = documnet.getElelemById("test");
//  console.log(testEle.)


const inEle = document.getElementById("test");

const http = new XMLHttpRequest();

http.onreadystatechange = function () {
         if(this.readyState == 4 && this.status == 200){
            
                const user = JSON.parse(this.responseText);
                const innHTML = "";
                user.forEach((element)=>{
                    let nameq = element.name.common;
                    // innHTML =`<p>${nameq}</p>`;
                  console.log(nameq);
                });

            
            inEle.innerHTML =innHTML;
         }

}
http.open("GET", "https://restcountries.com/v3.1/all");
http.send();


// . -> class #-> id 
// getElementById - Object
// getElementsByClassName - array
// document.querySelector("h1") -> object // first macth agurata varanum
// document.querySelectorAll("div.test") -> array
// getElementsByTagName - array  


//innerHTMl - show tag and text
//innerText - > only show text


// -> create one element method
// const ele = document.createElement('p')
//  ele.innerHTML  = "From Sever...";
// const testEle = document.querySelector("div.test");
// testEle.appendChild(ele);

// append("firstName"); ->  text work agum and HTML ele , multipule element work agum 
// appendChild("firstNmae"); -> text work agathu,  element work agum ,not muliple use panna only first ele


//ele.setAttribute("type" ,"text")
//ele.setAttribute("Name" ,"FullName")

// Document.
//  ^
//  |
//title
//links
//head
//body
//URL
//image
//script