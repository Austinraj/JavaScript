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
// mousedown
// mouseup
// hover


// The on() Method
$(document).ready(function(){
    $(".on").on({
      mouseenter: function(){
        $(".on").css("background-color", "lightgray");
      },  
      mouseleave: function(){
        $(".on").css("background-color", "lightblue");
      }, 
      click: function(){
        $(".on").css("background-color", "yellow");
      }  
    });
  });


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



// Fade Effects 
// fadeIn() 
// fadeOut()
// fadeIn , fadeOut => feadeToggle()
// fadeTo = fadeTo("slow", 0.15) => 2nd parameter is opacity ( 0 to 1)
$(document).ready(function(){
    $("#fade").click(function(){
        $("#div1").fadeToggle(),
        $("#div2").fadeToggle("slow"),
        $("#div3").fadeToggle(3000)
    })
})


//  Sliding Effects
// slideDown()
// slideUp()
// slideToggle()
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow")
    });
})

// The animate() Method
$(document).ready(function(){
    $(".div4").hover(function(){
        $(".div4").animate({
            // left: "300px",
            height : "toggle",
            width : "300px",
        })
    })
})

// stop() Method