let count = 10;
setInterval(()=>{
    
    // console.log("countdown10");
    document.getElementById("countdown").innerText = `Countdown:${count}`;
    if(count>0){
    count--;
    }
    if(count === 0){
    document.getElementById("display").style.display = "block";
        
    }
},1000);
count.style = "display : none"; 

