 let count=10;
 const Diwali = (cb)=>{
    setInterval(()=>{
        cb(
    document.getElementById("countdown").innerText = `Countdown:${count}`
        );
    },1000)
 }
 Diwali((result)=>{
    if(count>0){
    count--;
    }
    if(count === 0){
        document.getElementById("display").style.display = "block";
            
        }
 });

