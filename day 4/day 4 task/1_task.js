// 1.Do the below programs in anonymous function & IIFE
// a.Print odd numbers in an array
// b.Convert all the strings to title caps in a string array
// c.Sum of all numbers in an array
// d.Return all the prime numbers in an array
// e.Return all the palindromes in an array
// f.Return median of two sorted arrays of the same size.
// g.Remove duplicates from an array
// h.Rotate an array by k times 

//a.
const array = [1,2,3,4,5,6,7,8,9,10];
var number = function(){//anonymous function
    for (i of array){
        if(i %2 ==0){
            console.log(i);
        }
        
    }
}
number();

(()=>{//IIFE
    for (i of array){
        if(i %2 ==0){
            console.log(i);
        }
        
    }
})();
//b.
var array1 = "austinraja";
var number1 = function(){//anonymous function
    var uper = array1.toUpperCase();
    console.log(uper);
}
number1();

(()=>{//IIFE
    console.log(array1.toUpperCase());
})();


//c.
const sum = [1,2,3,4,5,6,7,8,9,10];
let add =0;
let add1=0;
const number3 = function(){//anonymous function
    for(i=0;i<sum.length;i++){
        add +=sum[i];
    }
console.log(add);
}
number3();

(()=>{//IIFE
    for(i=0;i<sum.length;i++){
         add1 +=sum[i];
    }
    console.log(add);
})();

//d.


const number4 = function(){//anonymous function
    if(array % 2 ==0){
        console.log(array)
    }
}



//e.

let str1 =  "madam";

var string3 = function (){
    let s = str1.split('').reverse().join('');
   // console.log(s);
    let a = s;
    if (str1 == a){
        console.log(a);
    }else{
        console.log("not palindrome string")
    }

}
string3();

//f.


//g.
var arr = ["car", "bus","bike", "car","bicycle", "bike", ]

var duplicates =  arr.filter((element, index) =>{
        return arr.indexOf(element) == index
    });
duplicates.forEach(console.log);

//  2.Do the below programs in arrow functions.
// a.Print odd numbers in an array
// b.Convert all the strings to title caps in a string array
// c.Sum of all numbers in an array
// d.Return all the prime numbers in an array
// e.Return all the palindromes in an array 


//a.
// const array5 = [1,2,3,4,5,6,7,8,9,10];
// var number = ()=>{//arrow function
//     for (i of array){
//         if(i %2 ==0){
//             console.log(i);
//         }
        
//     }
// }
// number();

// //b.
// var str = ()=>{
//     var name = "raja";
//     console.log(name.toUpperCase());
// }
// str();

// //c.
// let adding =0;
// var sum1 =()=>{
//     for(i=0;i<array5.length;i++){
       
//         adding +=array5[i];
//     }
//     console.log(adding);
// }
// sum1(); 