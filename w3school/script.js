// learn javascript consept in W3school website 




// document.getElementById('ptag').innerHTML = 4 +10;
// document.write(4+10); 
function clickhande(){
    document.getElementById("result").innerHTML = 4 +10; 
    $("#try").hide();
}

// jquery
//  =>
// Mouse Events   	Keyboard Events	    Form Events	    Document/Window Events
// click	        keypress	        submit	        load
// dblclick 	    keydown	            change	        resize
// mouseenter	    keyup	            focus	        scroll
// mouseleave	 	blur	            unload

$(document).ready(function(){
    $("#hide").click(function(){
        $("#hidemethod").hide()
    }),
    $("#show").click(function(){
        $("#hidemethod").show()
        // $(".p-tage").show(1000)
    })

 
})


// $(document).ready(function(){
//     $("#hide1").click(function(){
//         $(".p-tage").hide(1000)
//     })
// })
$(document).ready(function(){
    $("#hide1").click(function(){
        $(".p-tage").toggle(1000)
    })
})


$(document).ready(function(){
    $("#fade").click(function(){
        $("#div1").fadeToggle(),
        $("#div2").fadeToggle("slow"),
        $("#div3").fadeToggle(3000)
    })
})

