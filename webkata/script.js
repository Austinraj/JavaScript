// 2.
// function calculateLength(){
//     const value = document.getElementById("myLength").value.length;
//     document.getElementById("sid").innerHTML  = value;
// //    document.getElementById("sid").innerText = evt.target.value.length;
// }
// calculateLength();


// 3.
// function calculateSum(){
//     const inp1EL = document.getElementById("in1").value ;
//     const inp2EL = document.getElementById("in2").value ;

//     const resultEl = parseInt(inp1EL)+parseInt(inp2EL);
//     document.getElementById("result").innerHTML = resultEl;
// }

// calculateSum();

// 8.
// function getSelectedOption(){
//     const vale = document.querySelector("select").value;

//     document.getElementById("selectedOption").innerHTML = vale;
// }
// getSelectedOption();


/* 9.Display the value of selected radio button in paragraph tag
with id 'selectedOption' using Javascript. 
Note: Values are changed dynamically for evaluation */

function displaySelectedOption() {
    const vale1 = document.getElementsByName("option");
    console.log(vale1);
    // console.log(vale1);
    document.getElementById("selectedOption").innerHTML = vale1;
}
displaySelectedOption();