const signUpBtn = document.getElementById('signUpBtn');
const loginBtn = document.getElementById('loginBtn');

// login route
loginBtn.addEventListener("click", (e)=>{
    console.log('-----------------login btn clicked!-------------------------')
    e.preventDefault();
    const userObj = {
        username:document.querySelector("#loginUsername").value,
        password:document.querySelector("#loginPassword").value,
    }
    console.log(userObj);
    fetch("/api/users/login",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            location.reload()
        } else {
            console.log(res);
            alert("Incorrect Username or Password! Try again")
        }
    });
});

// sign up route
signUpBtn.addEventListener("click", e=>{
    console.log('-----------------sign up btn clicked!-----------------')
    e.preventDefault();
    const userObj = {
        username:document.querySelector("#signUpUsername").value,
        password:document.querySelector("#signUpPassword").value,
    }
    fetch("/api/users/",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res =>{
        if(res.ok){
            location.reload()
        } else {
            console.log(res);
            console.log(userObj)
            alert("Something went wrong!")
        }
    });
});