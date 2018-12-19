document.addEventListener("DOMContentLoaded", popupActive);

function popupActive() {

  var body = document.body,
    html = document.documentElement,
    order = document.querySelector('.order'),
    temp_name = document.querySelector('.temp_name'),
    popup = document.querySelector('.popup');
  var close = document.querySelector('.cross');

  var scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );

  popup.style.height = scrollHeight + 'px';

  order.onclick = function() {
    if (temp_name.innerHTML == 'ready') {
      popup.classList.add('popup_on');
      setTimeout(
        function() {
          popup.style.opacity = '1';
        }, 2000
      )
    }
  }

  close.onclick = function() {

    popup.classList.remove('popup_on');
    popup.style.opacity = '0';

  }

}
