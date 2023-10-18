
//getters 
const user = {
    firstName: "austin",
    lastName: "raja",
    get FullName() { // method, prototype access panna get used pannurom
        return `${this.firstName} ${this.lastName}`
    },//get value read panna
    set Age(a){//set value access panna
        this.age = a;
    }
}
// getters and setters is object only used panna mudiyum
user.Age = 20;
console.log(user);
console.log(user.FullName);



//Higher Order Function
// function that has another function as parmeter
function test1() {
    console.log("test1..");
}

function test2(t) {
    t();
}
test2(test1);  

const arr1 = [2,5,6];

function double(ele){
    console.log(ele*2);//callback
}

arr1.forEach((element)=>{
    double(element);
});
arr1.forEach(double);//higher function

//function that returns anothr function

function print(){
    return function(){
        console.log("test10...");
    }
}
const print1 = print();
console.log(print1);
print1();


// array method
// Map
const arr = [1,2,3,4,5];

const arrOp = arr.map((element)=>{//map method function another array retrun pannum
    return element*element;
});
console.log(arr);
console.log(arrOp);


//Filter
//arrOp => [2 ,4]
const arrop2 = arr.filter(ele=>{
    return ele % 2 ==0;
})
console.log(arrop2);
// const arroput = [];
// for ( const ele of arr){
//     if(ele % 2 ==0){
//         arroput.push(ele);
//     }
// }
// console.log(arroput);


//Reduce
// arrop = 15

const sum = arr.reduce((acc, ele) =>{//acc is collect pannuratu
    acc += ele;
    return acc;
}, 0);
console.log(sum);

const arrop4 = arr.reduce((max, ele)=>{
    if(ele>max){
        max =ele;
    }
    return max;
});
console.log(arrop4);





