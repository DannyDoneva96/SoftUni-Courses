
function validate(){

let input = document.getElementById('email');

let email = input.value;
 input.addEventListener('change',onChange)

 function onChange(){  
      const regPattern = /^[a-z]+\@[a-z]+\.[a-z]+$/g;
       if(!regPattern.test(email)){
        input.classList.add('error');
       }else{
        input.classList.remove('error');
       }
 }
}
























