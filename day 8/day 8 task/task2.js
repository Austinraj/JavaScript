
const htpp = new XMLHttpRequest();

htpp.onreadystatechange = function (){
    if (this.readyState == 4){
        if(this.status == 200){
            const user = JSON.parse(this.responseText);
            
             user.forEach(country => {
                
                
            //    var only  = country.region;
            //    var only;
            //   only.filter(element =>{
            //     return element.region === "Asia";
            //   });

            //   console.log(only);
                
            //                             //console.log(region);
            // //    if (region ==Asia){
            // //     console.log(region);
            // //    }
            });
            only.filter(element =>{
                return element.region === "Asia";
              });
            // user.filter(country1 =>{
            //     var only = country1.region == Asia;
            //     console.log(only);
            // });

           // console.log(AsiaOnly);



    }else{
        console.error(`404 Not Found`);
    }
}
}
htpp.open("GET","https://restcountries.com/v3.1/all");
htpp.send();





