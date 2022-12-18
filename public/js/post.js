const commentBtn = document.getElementById('commentBtn')


commentBtn.addEventListener('click',function(e){
    e.preventDefault()
    const commentTxt = document.getElementById('comment-text').value
    fetch("/api/posts/",{
        method:"POST",
        body:JSON.stringify(commentTxt),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res =>{
        if(res.ok){
            location.reload()
        } else {
            console.log(res);
            console.log(commentTxt)
            alert("Something went wrong!")
        }
    });
});
