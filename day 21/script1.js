// CRUD Operation -create, Read, Update, Delete

// create -post
// Read -GET
// Update -put
// Delete - Delete



// GET      URL: https://www.melivecode.com/api/users
// POST     URL: https://www.melivecode.com/api/users/create
// PUT      URL: https://www.melivecode.com/api/users/update
// DELETE   URL: https://www.melivecode.com/api/users/delete

const BASE_URL ="https://www.mecallapi.com/api/users";

function SaveDetail(){
    const http = new XMLHttpRequest();

    http.onreadystatechange = function(){
        const {readyState, status, responseText} = this;
        if(readyState == 4 && status == 200){
            const users =JSON.parse(responseText);
            console.log(users);
        }
        http.open("GET", BASE_URL);
        http.send();
    }
}

SaveDetail();