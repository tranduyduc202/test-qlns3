let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let btnSignup = document.querySelector(".btn-signup");
let passwordAll=document.getElementById('passwordAll')
btnSignup.addEventListener('click',function(e){
       e.preventDefault();
       let user={
        username:username.value,
        email:email.value,
        password:password.value,
       
       }
       let json=JSON.stringify(user)
       console.log(json)
       if(!username.value || !email.value || !password.value || !passwordAll.value){
        alert("vui long nhap thong tin")

       }else if(password.value != passwordAll.value){
              alert("mat khau ko khop")
       }else{
        localStorage.setItem(username.value,json)
        alert("dang ky thanh cong")
        
       }
})