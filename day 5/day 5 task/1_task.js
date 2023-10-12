//1. for the given JSON iterate over all for loops(for ,for in , for of, forEach)


var array = [1,2,3,4,5];

//for
for(var i = 0; i< array.length;i= i+2){
    console.log(array[i]);
}


var student ={ name: "Austin", age: 20,phone: 7708268176}
for (var i in student){
    console.log( student[i]);

}

for (var i of array){
    console.log(i);
}



array.forEach(function(va, index,array){
    console.log(index,va);
});

function iterate(val,index,array){
    console.log(array);
}

array.forEach(iterate);


//2.create your own resume data in JSON fromat

//Go see my 1_task2.json file about 2.Question
