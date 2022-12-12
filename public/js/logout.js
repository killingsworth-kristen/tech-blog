// logout route
const logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener("click", (e)=>{
    fetch("/api/users/logout",{
        method:"POST",
        headers: {
            "Content-Type": "applicaton/json"
        }
    }).then(res=>{
        location.reload()
    })
})