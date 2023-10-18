//1. Write a “person” class to hold all the details.
//2.write a class to calculate the uber price.

//1.
class Person {
    firstName = "austin";
    lastName  = "raja";
    age = 20;
    place = "theni";

    get printFullDetails(){
        console.log(`${this.firstName} ${this.lastName} ${this.age} ${this.place}`)
    }
}

const print = new Person();
console.log(print);

// error make claver


//2.
class Uber {
    enterLocation = "chenni";
    enterDestion = "tambaram";

}

class km extends Uber {
    Kelameter = "24"
    price = "500"
    price1 = function(){
        console.log("560");
    }
}

const pri = new km();
console.log(pri);


