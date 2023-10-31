class User {
    constructor(fname , lName , city , age){
        this.fname = fname;
        this.lName = lName;

        this.city = city;
        this.age =age;
    }

    get getName(){
        return `${this.fname} ${this.lName} ${this.city}`
    }
}

// Child, Derived , Sub
class Student extends User {
    constructor(fname ,lName ,city ,age ,course){
        super(fname ,lName ,city ,age);
        this.course = course;
    }

    // get getName(){
    //     return `${this.fname} ${this.lName} ${this.city}`
    // }
}

const student = new Student("austin" ,"raja", "chennai", 21 , "Mern");
console.log(student.getName);
class Mantor extends User {
    constructor(fname ,lName ,city ,age , batch){
        super(fname, lName ,city , age);
        this.batch = batch
    }
}

const mentor = new Mantor("shaker" , "moorthi", "theni", 21,"bw3");
console.log(mentor.getName);












// const user1 = new User("austin", "raja", "chennai", 21);
// console.log(user1.getName());


// const user1 =new User({
//     fname : "austin",
//     lName: "raja",
//     city: "chennai",
//     age: 21,
//     getName(){
//         return `${this.fname} ${this.lName}`
//     }
// });
// console.log(user1.getName);


// const user2 ={
//     fname : "shanker",
//     lNmae: "moorith",
//     city: "coimbatore",
//     age: 22,
//     getName(){
//         return `${this.fname} ${this.lName}`
//     }
// }