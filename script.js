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
    
    if(userValid==''){

    }else{

    }


    if(emailValid==''){

    }else if(!isValidEmail(emailValid)){

    }else{

    }


    if(passValid==''){

    }else if(passValid.length<8){

    }else{

    }


    if(pass2Valid==''){

    }else if(pass2Valid!==passValid){
    
    }else{

    }

}
let isValidEmail=function(emailValid){
 const pattern_email=/^[^]+@[^]+\.[a-z]{2,3}$/;
 return pattern_email.test(String(emailValid).toLocaleLowerCase());
}