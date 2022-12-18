const newPostBtn = document.getElementById('new-post-btn')
const submitNewPostBtn = document.getElementById('submit-new-post-btn')
const newPostForm = document.getElementById('new-post-form')

newPostBtn.addEventListener("click", function () {
    console.log("clicked")
    newPostForm.setAttribute("class", "")
})

submitNewPostBtn.addEventListener("click", function (e) {
    e.preventDefault()
    console.log("clicked submit btn")
    const postTitle = document.getElementById('post-title').value
    const postBody = document.getElementById('post-body').value
    const postObj = {title: postTitle, body: postBody}
    fetch("/api/posts",{
        method:"POST",
        body:JSON.stringify(postObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res =>{
        if(res.ok){
            location.reload()
            console.log(res)
        } else {
            console.log(res);
            console.log(postObj)
            alert("Something went wrong!")
        }
    });
});


document.addEventListener("click", (e)=>{
    if (e.target.classList.contains("card")) {
        console.log("clicked card")
        e.target.setAttribute("class","hidden");
        let editCard = document.getElementById(`edit-${e.target.id}`)
        editCard.setAttribute("class","")
    }
});

const updateBtn = document.getElementsByClassName('update-btn');

updateBtn.addEventListener("click", function (e) {
    console.log("clicked!")
})

