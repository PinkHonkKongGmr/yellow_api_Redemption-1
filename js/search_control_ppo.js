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
     zoom: 13,
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
     }
   });

}

ymaps.ready(init);
