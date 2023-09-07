// primitive data
var name ="austin";
 name=32;

var age=20;
var age1 ="20";
var price = 12.569;
var isActive = true;


console.log(name);
console.log(age);
console.log(age1);//print js
console.log(price);
console.log(isActive);

console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(age1));
console.log(typeof(price));
console.log(typeof(isActive));
 
//trivial data

var name1;
console.log(name1)
var name2 = null;
console.log(name2);

console.log(typeof(name1));
console.log(typeof(null));

//composite (object)

//object
//array
//function

//object
var student ={
    name: "austinraj",age: 29,price:13.555,
    isActive: true
};

console.log(student.name);

console.log(student.age);
student.name = "Raja";

student['name'] = "shanker"
console.log(student)

student.city ="theni"
console.log(student)
delete student.city;
console.log(student)
console.log(typeof(student))

var test ='age'
student[test]=24
console.log(student.age)
console.log(student)



//array

var student =["guvi",23,23.56,true,{name: "austin"},[34,34]]

console.log(student)
console.log(typeof(student));

console.log(student[0]);
console.log(student[4].name);
student[0]="zen";
console.log(student);
student[4].city ="theni";
console.log(student)



//cope by reference
var obj1 = { name: "austin"};
var obj2 =obj1;
console.log(obj1)
console.log(obj2)

obj2.name ="raja";

console.log(obj1);
console.log(obj2)



obj1.name = "TEST";
console.log(obj1);
console.log(obj2);

var array  = [1, 2, 3];
var array1 = array;

console.log(array); //[1,2,3]
console.log(array1); //[1,2,3]

array1[1] = "TEST";

console.log(array); //[1,"TEST",3]
console.log(array1); //[1,"TEST",3]



//copy by value
var str1 =25;
var str2=str1;
console.log(str2)

str2 =27;

console.log("1",str1)

console.log(str2);