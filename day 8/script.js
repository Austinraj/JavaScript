//Template literals   // like ``
const firstName = "austin";
const lastName ="Raja";
const a = 12;
const b = 23;

//const fullName  = "hello" +firstName + " " + lastName //old method and same
const fullName =`Hello ${firstName} ${lastName}`;// two line is same
const c =`${a+b}`;


console.log(fullName);
console.log(c);

console.log(`${a+b}`);



const test = [1,2,3,4,5];
console.log(`${test}`);

const test1 = {name: "test", name1: "austin"};
console.log(`${test1.name}`);//object full la print panna mudiyathu but . use panni name class pannalam
//new line
//variable - ${variable}




// prototype

// function fun(){};
//  Object.prototype; => test. . next vara dhan prototype
//  Array.prototype; => this for array prototype 
// fun.__proto__ => this allso same prototype 



//oops of Javascript
//class
// this => is default object

class Student {
    // firstName1 ="";
    // lastName1 = "";
    constructor(firstName ,lastName){
        this.firstName1 = firstName;
        this.lastName1 = lastName;
    }
    printName = function(){
        console.log(`${this.firstName1} ${this.lastName1}`);
    }
}

const student1 = new Student("shanker", "moorthi");
const student2 = new Student("kalesi","thavam");

student1.printName();
student2.printName();

// console.log(student1);
// console.log(student2);

//parent, Super ,Base 
class Person{
    constructor(firstName,lastName){
        this.firstName2 = firstName;
        this.lastName2 = lastName
}
    printName2 = function(){
        console.log(`${this.firstName2} ${this.lastName2} `);
        
    }
}

//child ,Sub ,Derived
class Student1 extends Person{
    constructor(firstName,lastName,course){
        super(firstName,lastName);
        this.course1 = course;
    }
}
class Mentor extends Person{
    constructor(firstName,lastName,batch){
        super(firstName,lastName);
        this.batch = batch;
    }
}

const student3 = new Student1("shanker", "moorthi" ,"MERN");
const student4 = new Mentor("kalesi","thavam", "B376WB");

console.log(student3);
console.log(student4);

student3.printName2();
student4.printName2();