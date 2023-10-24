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



//title
//links
//head
//body
//URL
//image
//script