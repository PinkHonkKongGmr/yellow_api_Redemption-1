var reg = /[^\sA-Z\sА-я]/gi

window.onload = function() {

  var name = document.querySelector('.name');
  var pass0 = document.querySelectorAll('.pass')[0];
  var pass1 = document.querySelectorAll('.pass')[1];
  var fail0 = document.querySelectorAll('.fail')[0];
  var fail1 = document.querySelectorAll('.fail')[1];
  var adress = document.querySelector('.adress');
  var x = document.querySelector('.x');
  var target = document.querySelector('.target');
  var temp_name = document.querySelector('.temp_name');
  var phone = document.querySelector('.phone');

  name.oninput = function() {
    pass0.classList.remove('hide');
    fail0.classList.add('hide');
    temp_name.innerHTML = 'ready';
    if (name.value.match(reg)) {
      pass0.classList.add('hide');
      fail0.classList.remove('hide');
      temp_name.innerHTML = 'NOTready';
    }

    if (name.value == '') {
      pass0.classList.add('hide');
      fail0.classList.add('hide');
      temp_name.innerHTML = 'NOTready';
    }
  }

  adress.oninput = function() {
    x.classList.remove('hide');
    target.classList.remove('hide');
    if (adress.value == '') {
      x.classList.add('hide');
      target.classList.add('hide');
    }
  }

  x.onclick = function() {
    adress.value = '';
    x.classList.add('hide');
    target.classList.add('hide');
  }

  phone.onclick = function() {

    setInterval(function() {

      if (phone.value.length > 1) {
        pass1.classList.remove('hide');
        fail1.classList.add('hide');
      }
      if (phone.value == '') {
        fail1.classList.remove('hide');
        pass1.classList.add('hide');
      }

    }, 800)

  }

}
