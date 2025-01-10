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

 
}
let validationInputs=function(){
    let userValid=username.value;
    let emailValid=email.value;
    let passValid=password.value;
    let pass2Valid=password2.value;
    
    if(userValid==''){
        setError(username,'نام کاربری نباید خالی باشد')
    }else{

    }


    if(emailValid==''){
        setError(email,'ایمیل نباید خالی باشد')
    }else if(!isValidEmail(emailValid)){

    }else{

    }


    if(passValid==''){
        setError(password,'رمز عبور نباید خالی باشد')
    }else if(passValid.length<8){

    }else{

    }


    if(pass2Valid==''){
        setError(password2,'تکرار رمز عبور نباید خالی باشد')
    }else if(pass2Valid!==passValid){
    
    }else{

    }

}
let isValidEmail=function(emailValid){
 const pattern_email=/^[^]+@[^]+\.[a-z]{2,3}$/;
 return pattern_email.test(String(emailValid).toLocaleLowerCase());
}