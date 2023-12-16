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

// $(document).ready(function(){
//     $("#flip").click(function(){
//         $("#panel").slideToggle("slow")
//     });
// })

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
$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideDown(5000);
    });
    $("#stop").click(function(){
      $("#panel").stop();
    });
  });


// chaining

$(document).ready(function(){
    $("#btn").click(function(){
        $("#p1").css("color" , "red").hide(2000).show(2000)
    })
})

// Get Content - text(), html(), and val()
// attr()
// value or content get pannurathu




// Set Content - text(), html(), and val() 

// value or content set pannurathu


$(document).ready(function(){
    $("#btn1").click(function(){
        $("#test1").text(function(i,result){
            return  "text:" + result +" (index"+i+")"
        })
    }),
    $("#btn2").click(function(){
        $("#test2").html(function(i,result){
            return  "text:" + result +" (index"+i+")"
        })
    })
})
// attr()

$(document).ready(function(){
    $("#btn3").click(function(){
        $("#w3s").attr({
            "href" : "https://www.w3schools.com/jquery/",
            "title" : "W3Schools jQuery Tutorial"
        })
    })
})


// Remove Elements/Content

// remove () => totle element remove agum

// $(document).ready(function(){
//     $("#btn4").click(function(){
//         $("#div5").remove()
//     })
// })

// empty() => content remove agum
$(document).ready(function(){
    $("#btn4").click(function(){
        $("#div5").empty()
    })
})


// jQuery Manipulating CSS
// addClass()
// removeClass() 
// toggleClass() => addClass() and removeClass() 

$(document).ready(function(){
    $("#btn5").click(function(){
        $("#div6").toggleClass("important blue")
    })
})


// jQuery - css() Method
// .css() => all the css include pannalam