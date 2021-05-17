window.onload = function() {


const menu = document.querySelector('.menu');
//бургер
const header__burger = document.querySelector('.header__burger');
const menu__nav = document.querySelector('.menu_nav_container');
const menu__link = document.querySelectorAll('.menu__link');
header__burger.addEventListener('click', (event) => { 
  header__burger.classList.toggle('active');
  menu__nav.classList.toggle('active');
  menu.classList.toggle('active');
})
for (i = 0; i < menu__link.length; i++) {
  menu__link[i].addEventListener('click', (event) => { 
  header__burger.classList.toggle('active');
  menu__nav.classList.toggle('active');
  menu.classList.toggle('active');
})
}

//затемнение при прокрутке
window.addEventListener('scroll', function(e) {

if(pageYOffset > 30){
  menu.style.transition = '0.5s';
  menu.style.backgroundColor = '#040D3E';
}else{
  menu.style.backgroundColor = 'rgba(0, 0, 0, 0.0)';
}
});



 //форма
      const form = document.getElementById('form');
      const message = document.getElementById('message');
       let formReq = document.querySelectorAll('._req');
      form.addEventListener('submit', formSend); 




      async function formSend(e){
        e.preventDefault();
        let error = formValidate(form);// проверяем своим валидатором
         if(error === 0){

          message.className = 'message';
         message.classList.add('_success');
         message.innerHTML = 'mail sent';
          for(let index = 0; index < formReq.length; index++){//удоляем все плейсхолдеры если в них были сообщения об ошибках
            const input = formReq[index];
              input.placeholder = '';
          }


     
     }else{

       message.classList.add('_false');
      message.innerHTML = 'Fill in all the fields';
             }
    

        }

      function formValidate(form){
        let error = 0;
       
        for(let index = 0; index < formReq.length; index++){
          const input = formReq[index];
          formRemoveError(input);

          if(input.classList.contains('_email')){

            if(input.value === ''){
              input.placeholder = 'This field is required';
               formAddError(input);
               error++;
            }
            if(input.value != '' && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)){
              input.value = '';
               input.placeholder = 'enter correct e-mail';
              formAddError(input);
              error++;
            }
          } else if(input.classList.contains('_text')){
              if(input.value === ''){
                input.placeholder = 'это поле обязательно для заполнения';
                 formAddError(input);
                 error++;
              }
              if(input.value != '' && input.value.length < 2){
                input.value = '';
                input.placeholder = 'минимальное количество знаков больше 2';
                 formAddError(input);
                 error++;
              }
              if(input.value != '' && input.value.length > 5){
                input.value = '';
                input.placeholder = 'максимально количество знаков не больше 5';
                 formAddError(input);
                 error++;
              }
            }  
      }
      return error;
      }

      function formAddError(input){
        
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
      }

      function formRemoveError(input){
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
      }






















}