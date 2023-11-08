// Fetch

// fetch function use panni promies return pannum
// next then throw pannaum na return use panni value throw panalam



// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then((res)=>{
//     // validation
//     if(!res.ok){
//         throw new Error(`request falied with ${res.status}`);
//     }else{
//         return res.json();
//     }
// })
// .then((res)=>{
//     console.log("Response==>");
//     console.log(res);
    
// })
// .catch((err)=>{
//     console.error(err);

// })




function handleResponse(res2){
    if(!res2.ok){
        throw new Error (`Request failed with ${res2.status}`);
    }
    return res2.json();
}

function handleError(err){
    console.log("Error ===>");
    console.log(err);
}
const getPost = (postId)=> fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(handleResponse);
const getUser = (userId)=> fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(handleResponse);
const getComment = (postId)=> fetch(`https://jsonplaceholder.typicode.com/post/${postId}/comments`).then(handleResponse);




// Async Await is real time la use pannurom

const getData = async () =>{
    try {
        const post = await getPost(1);
        const user = await getUser(post.userId);
        const comment = await getComment(post.id);
    
        console.log(post,user,comment);
    }catch(err){
        console.error(err);
    }
};

getData();
