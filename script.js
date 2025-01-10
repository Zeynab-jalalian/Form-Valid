let form=document.getElementById('form');
let username=document.getElementById('username');
let email=document.getElementById('email');
let password=document.getElementById('password');
let password2=document.getElementById('password2');


form.addEventListener('submit',function(event){
    event.preventDefault();
    validationInputs();

})
let validationInputs=function(){
    let userValid=username.value;
    let emailValid=email.value;
    let passValid=password.value;
    let pass2Valid=password2.value;
   

}