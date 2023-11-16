//1.Declare four variables without assigning values and print them in console

var name1;
var str;
var student;
var isActive1;

console.log(name1);//undefined
console.log(str);
console.log(student);
console.log(isActive1);



//2.How to get value of the variable myvar as output

var myvar= 1;
console.log("myvar");
console.log(myvar);// this for corret

//Remove the "" is



/*3.Declare variables to store your first name, last name, marital status,
country and age in multiple lines */

var first_name = "austin";
var last_name = "raja";
var marital_satuse = "single";
var country = "IN";
var age = 20;

/*4.Declare variables to store your first name, last name, marital status, 
country and age in a single line*/

var first_name = "austin", last_name = "raja", marital_satuse ="single", country= "IN", age = 20;
console.log(last_name);

//5. Declare variables and assign string, boolean, undefined and null data types

let name2 = "Austin";
let isActive = true;
let name3;
let age1 = null;

/*6. Convert the string to integer

parseInt()
Number()
Plus sign(+)*/

var string = "I am 25 years old.";

var string2 = "You are 30 years old.";

console.log(parseInt(string));
console.log(Number(string));
console.log(+(string));

//string to integer convert is NaN: not a number is output


//7. Write 4 statement which provide truthy & falsey values.

var a = 0;

var a = 10 == 5;

var a = 1; 

var a = -1;

/*1.var a = 0;

Number zero is falsy. However, note that the string zero "0" is truthy.
2.var a = 10 == 5;
This is same as var a = (10 == 5);, so this is falsy.
3.var a = 1;
4.var a = -1;
Any non-zero number including negative numbers is truthy.*/




//Task 2: Simple Programs todo for Operators

//1.Square of a number
 console.log(2*2);
//2.Swapping 2 numbers

var x = 10 , y =5;
console.log(`befor Swapping: x =  ${x} , y=  ${y}`);

x = x - y;//10-5 =5

y = x + y;//5+5 = 10

x = x - y;//10-5 = 5

console.log("After swapping: x =" + x +", y="+y);

//3.Addition of 3 numbers

var   x=10, y = 5, z = 5;
console.log(x+y+z);
console.log(10+25+35);
//4.Celsius to Fahrenheit conversion



//5.Meter to miles
//6.Pounds to kg
//7.Calculate Batting Average
//8.Calculate five test scores and print their average
//9.Power of any number x ^ y.
//10.Calculate Simple Interest
//11.Calculate area of an equilateral triangle
//12.Area Of Isosceles Triangle
//13.Volume Of Sphere
//14.Volume Of Prism
//15.Find area of a triangle.
//16.Give the Actual cost and Sold cost, Calculate Discount Of Product
//17.Given their radius of a circle and find its diameter, circumference and area.
//18.Given two numbers and perform all arithmetic operations.
/*
19.Display the asterisk pattern as shown below(No loop needed):
*****
*****
*****
*****
*****   */
//20.Calculate electricity bill?
//For example, a consumer consumes 100 watts per hour daily for one month. Calculate the total energy bill of that consumer if per unit rate is 10?
//21.Program To Calculate CGPA 