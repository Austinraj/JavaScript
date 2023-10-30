//JSON - JavaScript object Notation

function test(data){
    console.log("hello", data)

}

test("austin");
test("Guvi");
test("25/09/2002");
test("Chennai");

function sum(num, num1){
    //console.log(num + num1)
    return num + num1
}

console.log(sum(25, 28));

//sum(10, 5);
//sum(235, 345);

//document is called DOM

//console.log(document.URL);

//for loop
var test = [1,2,3,45,5];

for (var i=0;i< test.length;i++){
   //console.log("for loop");
    console.log(i, test[i]);
}

//for in loop=> array and object index
for (var i in test){
    console.log(i, test[i]);
}

 var emp = {name: "austin", age: "21"};
 for (var i in emp){
    console.log(i,emp[i])
 }

 //for of

  for ( var i of test){
    console.log(i);
  }

  //forEach
 num = [1,2,3,4,5,6]
  num.forEach((val,index) => {
    console.log("forEach"),
    console.log(index,val)

 });
 num.forEach(console.log)

 var da = `[
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    }]`
  console.log(typeof(da));
  da = JSON.parse(da);
  console.log(typeof(da));
console.log(da);
  
  da.forEach(da => console.log(da.name))
  
  function de(da) {
      console.log(da.name)
  }
  da.forEach(de);
