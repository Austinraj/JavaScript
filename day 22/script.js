function getPost(postId, cb) {
    const htpp = new XMLHttpRequest();
    htpp.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                const post = JSON.parse(this.responseText);
                cb({status: "success", data: post});
            } else {
                cb({status:"error", error:"cannot fetch post data"});
            }
        }
    };
    htpp.open("GET", `https://jsonplaceholder.typicode.com/posts/${postId}`);
    htpp.send();
}

getPost(1, (result)=>{
    if(result.status === "error"){
        console.error(result.error);
    }else{
        console.log(result.data);
    }
});

