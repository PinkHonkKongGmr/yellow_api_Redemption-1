function ready(map) {
  $('.adress_wrapper').click(function() {
    $('#map').toggleClass("hide");
    map.container.fitToViewport();
  })
}



function init(place) {
  var loc = place;
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
  searchControl.search(loc);
  searchControl.events.add('load', function(event) {
    if (!event.get('skip') && searchControl.getResultsCount()) {
      $('.adress').val(searchControl.getRequestString());
    }
  });
}

ymaps.ready()
  .then(() => ymaps.geolocation.get({
      autoReverseGeocode: false,
      provider: 'browser'
    })
    .then(res => res.geoObjects.get(0).geometry.getCoordinates()))
  .then(ll => (
    ymaps.geocode(ll, {
      kind: 'locality'
    })))
  .then(res => res.geoObjects.get(0).getLocalities())
  .then(city => init(`${city}`))
  .catch(err => $('#err').append(`Ошибка: ${err.message}`))
