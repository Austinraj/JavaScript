// Fetch

// fetch function use panni promies return pannum

fetch("https://jsonplaceholder.typicode.com/posts")
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);

})
