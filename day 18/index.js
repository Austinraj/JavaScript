function clickMe(evt){
    // evt.target.inneText = "Clicked";
    console.log(evt);
    console.log("clicked !!");
}

const btn = document.getElementById("btn");
// btn.onclick = clickMe;->  two same
btn.addEventListener("click", clickMe);



// btn.name = "austin"  ->same
// btn.setAttribute("name", "raja");



// function -> 
// function with event
// inline action definition
// inline action with this