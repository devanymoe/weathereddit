(function (){
  var zip = 98125;
  var weatherURL = "http://api.wunderground.com/api/4fb43427a15866c7/forecast/q/" + zip + ".json";

  $.ajax({
    type: "GET",
    dataType: "json",
    url: weatherURL
  }).then(function(response) {
    var $forecast = response.forecast.txt_forecast.forecastday;
    var $forecastToday = $('.forecastToday');
    var $icon = $('<i class="wi"></i>')
    var $today = $('<div class="today"></div>');
    $today.find('.today').text($forecast[0].fcttext);
    var iconPhrase = $forecast[0].icon;
    switch(iconPhrase) {
      case "chanceflurries":
      case "chancesleet":
      case "chancesnow":
      case "flurries":
      case "sleet":
      case "snow":
        $icon.addClass('wi-day-snow-wind');
        break;
      case "chancerain":
      case "rain":
        $icon.addClass('wi-showers');
        break;
      case "chancestorms":
      case "tstorms":
        $icon.addClass('wi-storm-showers');
        break;
      case "cloudy":
        $icon.addClass('wi-cloud');
        break;
      case "fog":
        $icon.addClass('wi-fog');
        break;
      case "hazy":
        $icon.addClass('wi-day-haze');
        break;
      case "mostlycloudy":
        $icon.addClass('wi-cloudy');
        break;
      case "mostlysunny":
        $icon.addClass('wi-day-sunny-overcast');
        break;
      case "partlycloudy":
      case "partlysunny":
        $icon.addClass('wi-day-cloudy');
        break;
      case "sunny":
      case "clear":
        $icon.addClass('wi-day-sunny');
        break;
      default:
        $icon.addClass('wi-cloud');
    }
    $forecastToday.append($icon);
    $forecastToday.append($today);
  })
})();
