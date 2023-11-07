// Fetch

// fetch function use panni promies return pannum
// next then throw pannaum na return use panni value throw panalam



fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((res)=>{
    // validation
    if(!res.ok){
        throw new Error(`request falied with ${res.status}`);
    }else{
        return res.json();
    }
})
.then((res)=>{
    console.log("Response==>");
    console.log(res);
    
})
.catch((err)=>{
    console.error(err);

})
