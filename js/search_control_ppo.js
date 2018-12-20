function ready(map)
{
  $('.adress_wrapper').click(function () {
    $('#map').toggleClass();
    map.container.fitToViewport();
  })
}


function init() {


  var myMap = new ymaps.Map('map', {
     center: [55.74, 37.58],
     zoom: 2,
     controls: []
   });

ready(myMap);
   var searchControl = new ymaps.control.SearchControl({
     options: {
       provider: 'yandex#search'
     }
   });

   myMap.controls.add(searchControl);
   searchControl.search('Петергоф');
   searchControl.events.add('load', function(event) {
     if (!event.get('skip') && searchControl.getResultsCount()) {
       $('.adress').val(searchControl.getRequestString());
       $('.x').removeClass('hide');
       $('.target').removeClass('hide');
       $('.ad_val:first').removeClass('hide');
       $('.ad_val:last').addClass('hide');
     }
   });

}

ymaps.ready(init);
