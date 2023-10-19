//recap day


//Array Method

//Map
//Reduce
//filter
//FOrEach
//join
//push
//splice
//Slice
//toString
//shift
//Unshift
//Find
//FindIndex
//Concat
//Every
//Values
//reverse

const arr = ["Austin",45,53,12];
console.log(arr.join("*"));//Join


//At
//arr[2]
console.log(arr.at(-3));//At used + and - 

//Concat
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 5, 9];
const arr3 =[9, 10 ,11];
const arr4 =arr1.concat(arr2, arr3);
console.log(arr4);


const arr5 =[10,...arr1];//p


//Enteries
const itr = arr.entries();
console.log(itr.next().value);
console.log(itr.next().value);
console.log(itr.next().value);


//Every 
const isLess5 = arr1.every((a)=> a < 5);
console.log(isLess5);//boolean only true or false

//Find
const test = arr2.find(a => a > 5);
console.log(test);//first match irukata print paannum

//Filter
const test1 = arr2.filter(a => a > 7);
console.log(test1);


//FindINdex
console.log(arr2.findIndex(a => a > 6));


//Includes
console.log(arr1.includes(4));//true or flase only return pannum

//IndexOf
console.log(arr1.indexOf(3));

//Keys
const it2 = arr1.keys();
console.log(it2.next().value);
console.log(it2.next().value);

//LastIndexOf
console.log(arr2.lastIndexOf(5));


//Push
arr1.push(13);//element last add pannuratu
console.log(arr1);


// const user = {name: "Austin"};
// user.name = "raja";
// console.log(user);



//Pop
arr1.pop(); //last iruka element delect pannum
console.log(arr1);


// Reverse
console.log(arr1.reverse());//array element reverse pannum



// Shift
const names = ["tamil", "shaker", "moorthi"];
//index shif agum 0 -> -1, 1-> 0, 2-> 1;
names.shift();
console.log(names);


//Slice
console.log(names.slice(2));//MRF like map.],readce,fliter
//slice panni new array creat pannu next call panna change agathu


console.log(names.slice(1, 3)); //1 is start 3 is end 

//Some
console.log(arr1.some((a)=> a < 5));//one true true print pannu


//Splice
// names.splice(1, 2);//1 irukum next 2 remove pannu 
// console.log(names);//real array remove paanu



// tostring
console.log(arr.toString());
//values
console.log(arr.values().next());
console.log(arr.values().next());


//object methods
//entries => {key, value}
//keys => keys
//values => values

const user = {
    names: "austin",
    age: 21,
    city: "chennai"
};
console.log(Object.entries(user));//key value array of array tharum

console.log(Object.keys(user));
console.log(Object.values(user));



//block scoping
function print(){
    if(true){
        let names1 = "gv";
        const n = "au";
        var namesss = "austi";
    }
    console.log(namesss);
}
print();


//spread operators & rest parameter

function sum(...num){//...num array return paanu MRF allso used pannalam
    console.log(num.reduce((sum, n)=> sum +n));
}

sum(10, 25);
sum(10, 24, 23);


const obj = {name: "raja"}
const a = {city: "chennai",...obj};// spread operators
console.log(a);

//array & object Destructure

const obj1 = { namess: "austin", age: "20", place: "theni"}
const {namess,age,place} = obj1;
console.log(namess, age);



