const email = document.getElementById("email");
const password = document.getElementById("password");
const showPassword = document.getElementById("showPassword");
const btnSubmit = document.getElementById("btnSubmit");


showPassword.onclick= ()=>{
    if(password.type==="password"){
        password.type="text";
    }
    else{
        password.type="password";
    }
}

btnSubmit.onclick = (event)=>{
    event.preventDefault();
    alert("Email: "+email.value+" Password: "+password.value);
    email.value="";
    password.value="";
}