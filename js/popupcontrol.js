document.addEventListener("DOMContentLoaded", popupActive);

function popupActive() {

  var body = document.body,
    html = document.documentElement,
    order = document.querySelector('.order'),
    temp_name = document.querySelector('.temp_name'),
    popup = document.querySelector('.popup');
  var close = document.querySelector('.cross');
  var form_wrapper = document.querySelector('.form_wrapper');
  var adress=document.querySelector('.adress');
  var validators = document.querySelectorAll('.validator');
  var phone = document.querySelector('.phone');
  var name = document.querySelector('.name');
  var target=document.querySelector('.target');
  var x = document.querySelector('.x');
  var temp_name = document.querySelector('.temp_name');

  var scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );

  popup.style.height = scrollHeight-200 + 'px';

  order.onclick = function() {
    if (temp_name.innerHTML == 'ready'&&adress.value!=""&&phone.value!='') {
      popup.classList.add('popup_on');
      setTimeout(
        function() {
          popup.style.opacity = '1';
          form_wrapper.classList.add('hide');
        }, 2000
      )
    }
     if (temp_name.innerHTML=="NOTready"||temp_name.innerHTML==""||name.value.substring(0,1)==" ") {
        validators[0].classList.add('hide');
        validators[2].classList.remove('hide');
     }

     if (phone.value=="") {
        validators[1].classList.add('hide');
        validators[3].classList.remove('hide');
     }
    }


  close.onclick = function() {

    popup.classList.remove('popup_on');
    popup.style.opacity = '0';
    form_wrapper.classList.remove('hide');
    name.value='';
    adress.value ='';
    phone.value='';
    target.classList.add('hide');
    x.classList.add('hide');
    for (val of validators) {
      val.classList.add('hide');
    }

  }

}
