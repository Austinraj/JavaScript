//XMLHTTP request 
//2 website connet panni data ues pannuratu

var xhttp = new XMLHttpRequest();// XMLHTTP class object return pannum

xhttp.onreadystatechange = function() {
    //this.responseText
    //this.status
    if(this.readyState == 4 ){
        if(this.status == 200){
           // console.log(this.responseText);// string response text , XML response XML
            var user = JSON.parse(this.responseText);
            console.log(user);
            console.log(JSON.stringify(user));
        }else{
            console.error("404 Not Found ")
        }
      
    }
}

xhttp.open("GET","https://jsonplaceholder.typicode.com/posts");
xhttp.send();

/* readyState
0 - request  not Initialized
1 - connection success
2- server received request
3- Proceesing Request
4- Response Came  */
