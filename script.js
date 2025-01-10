let form=document.getElementById('form');
let username=document.getElementById('username');
let email=document.getElementById('email');
let password=document.getElementById('password');
let password2=document.getElementById('password2');


form.addEventListener('submit',function(event){
    event.preventDefault();
    validationInputs();

})

let setError=function(element,message){
 let inputControl=element.parentElement;
 let error_display=inputControl.querySelector('.error');
 error_display.innerHTML=message;
 inputControl.classList.add('error');
 inputControl.classList.remove('success');
  
}
let setSuccess=function(element){
    let inputControl=element.parentElement;
    let error_display=inputControl.querySelector('.error');
    error_display.innerHTML='';
    inputControl.classList.remove('error');
    inputControl.classList.add('success');
     
   }
let validationInputs=function(){
    let userValid=username.value.trim();
    let emailValid=email.value.trim();
    let passValid=password.value.trim();
    let pass2Valid=password2.value.trim();
    
    if(userValid==''){
        setError(username,'نام کاربری نباید خالی باشد')
    }else{
        setSuccess(username)
    }


    if(emailValid==''){
        setError(email,'ایمیل نباید خالی باشد')
    }else if(!isValidEmail(emailValid)){
        setError(email,'فرمت ایمیل نامعتبر است')
    }else{
        setSuccess(email)
    }


    if(passValid==''){
        setError(password,'رمز عبور نباید خالی باشد')
    }else if(passValid.length<8){
        setError(password,'رمز عبور نباید کمتر از 8 کاراکتر باشد')
    }else{
        setSuccess(password)
    }


    if(pass2Valid==''){
        setError(password2,'تکرار رمز عبور نباید خالی باشد')
    }else if(pass2Valid!==passValid){
        setError(password2,'  تکرار رمز عبور شما با رمز عبور یکسان نیست ')
    }else{
        setSuccess(password2)
    }

}
let isValidEmail=function(emailValid){
 const pattern_email=/^[^]+@[^]+\.[a-z]{2,3}$/;
 return pattern_email.test(String(emailValid).toLocaleLowerCase());
}