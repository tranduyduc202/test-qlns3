let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let btnLogin = document.querySelector(".btn-login");
// let passwordAll=document.getElementById('passwordAll')
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  let user = {
    username: username.value,
    email: email.value,
    password: password.value,
    // passwordAll:passwordAll.value,
  };
  console.log(user);
  let json = JSON.stringify(user);
  console.log(localStorage.getItem(username.value))
  if (!username.value || !email.value || !password.value ) {
    alert("vui long nhap day du thong tin");
  }
  if(localStorage.getItem(username.value)==json){
    alert("dang nhap thanh cong");
    loading()
    window.location.href = "login.html";
  }else{
    alert("dang nhap that bai");
  }
})
function loading(){
  var loatAll=document.querySelector('.loatAll');
  loatAll.classList.remove('move')
  setTimeout(function(){
     loatAll.classList.add('move')
  },1000);
}
function divOpeningIntro(){
      var divOpeningIntroList=document.querySelector(".divOpeningIntro-list")
      var divOpeningIntro=document.querySelector('.divOpeningIntro');
      divOpeningIntroList.classList.add('move')
      setTimeout(function(){
        divOpeningIntro.classList.add('move')
       
      },8000)
      setTimeout(function(){
        divOpeningIntroList.classList.add('active')
      },8500)
     
      
     
      
}
