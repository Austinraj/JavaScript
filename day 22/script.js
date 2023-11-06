function getPost(postId, cb) {
    const htpp = new XMLHttpRequest();
    htpp.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                const post = JSON.parse(this.responseText);
                cb(null, post);
            } else {
                cb("cannot fetch post data");
            }
        }
    };
    htpp.open("GET", `https://jsonplaceholder.typicode.com/posts/${postId}`);
    htpp.send();
}

getPost(1, (error, result)=>{
    if(error){
        console.error(error);
    }else{
        console.log(result);
    }
})

