// CRUD Operation -create, Read, Update, Delete

// create -post
// Read -GET
// Update -put
// Delete - Delete



// GET      URL: https://www.melivecode.com/api/users
// POST     URL: https://www.melivecode.com/api/users/create
// PUT      URL: https://www.melivecode.com/api/users/update
// DELETE   URL: https://www.melivecode.com/api/users/delete

const BASE_URL ="https://www.melivecode.com/api/users";

function loadUser(){

const http = new XMLHttpRequest();

http.onreadystatechange = function (){
    const { readyState,status,responseText } = this;
    if(readyState == 4 && status == 200){ 
            let user =JSON.parse(responseText);
           user = user.map(u =>{
            return(`
            <tr>
            <td>${u.id}</td>
            <td>
                <img width="10%" src="${u.avatar}" class="avatar">
            </td>
            <td>${u.fname}</td>
            <td>${u.lname}</td>
            <td>${u.username}</td>
            <td>
                <button class="btn btn-sm btn-primary">edit</button>
                <button class="btn btn-sm btn-danger">Delete</button>
            </td>
        </tr>
        `);
           });
         document.getElementById("content").innerHTML = user.join("");
        }  
   
}

http.open("GET", BASE_URL);
http.send();
}

loadUser();

