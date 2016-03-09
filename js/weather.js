(function (){
  var zip = localStorage.getItem('userZip')
  var mykey = config.key;
  var weatherURL = "http://api.wunderground.com/api/" + config.key + "/forecast/q/" + zip + ".json";

  var getIcon = function(iconPhrase) {
    switch(iconPhrase) {
      case "chanceflurries":
      case "chancesleet":
      case "chancesnow":
      case "flurries":
      case "sleet":
      case "snow":
        return 'wi-day-snow-wind';
        break;
      case "chancerain":
      case "rain":
        return 'wi-showers';
        break;
      case "chancestorms":
      case "tstorms":
        return 'wi-storm-showers';
        break;
      case "cloudy":
        return 'wi-cloud';
        break;
      case "fog":
        return 'wi-fog';
        break;
      case "hazy":
        return 'wi-day-haze';
        break;
      case "mostlycloudy":
        return 'wi-cloudy';
        break;
      case "mostlysunny":
        return 'wi-day-sunny-overcast';
        break;
      case "partlycloudy":
      case "partlysunny":
        return 'wi-day-cloudy';
        break;
      case "sunny":
      case "clear":
        return 'wi-day-sunny';
        break;
      default:
        return 'wi-cloud';
    }
  }

  $.ajax({
    type: "GET",
    dataType: "json",
    url: weatherURL
  }).then(function(response) {
    var $forecast = response.forecast.txt_forecast.forecastday;
    var $simpleForecast = response.forecast.simpleforecast.forecastday;
    var $forecastToday = $('.forecastToday');
    var $forecastTomorrow = $('.forecastTomorrow');
    var $forecastNext = $('.forecastNext');
    var $icon = $('<div class="todayIcon"><i class="wi"></i></div>')
    var $iconTwo = $('<i class="iconTwo wi"></i>')
    var $iconThree = $('<i class="iconThree wi"></i>')
    var $today = $('<div class="todayText"></div>');
    var $tomorrow = $('<div class="tomorrow"></div>');
    var $nextDay = $('<div class="nextDay"></div>');
    var $todayContainer = $('<div class="todayContainer"></div>');
    var todayIconPhrase = $forecast[0].icon;
    var tomorrowIconPhrase = $simpleForecast[1].icon;
    var nextDayIconPhrase = $simpleForecast[2].icon;
    var todayIcon = getIcon(todayIconPhrase);
    var tomorrowIcon = getIcon(tomorrowIconPhrase);
    var nextDayIcon = getIcon(nextDayIconPhrase);
    var dayOne = $simpleForecast[0].date.weekday;
    var month = $simpleForecast[0].date.monthname;
    var day = $simpleForecast[0].date.day;
    var dayTwo = $simpleForecast[1].date.weekday;
    var dayThree = $simpleForecast[2].date.weekday;
    var $weekdayOne = $('<h1 class="weekdayToday"></h1>');
    var $weekdayTwo = $('<div class="dayTwoText"><h2 class="weekdayTomorrow"></h2></div>');
    var $weekdayThree = $('<div class="dayThreeText"><h2 class="weekdayNext"></h2></div>');
    $weekdayOne.text(dayOne + ", " + month + " " + day);
    var highOne = $simpleForecast[0].high.fahrenheit;
    var lowOne = $simpleForecast[0].low.fahrenheit;
    var highTwo = $simpleForecast[1].high.fahrenheit;
    var lowTwo = $simpleForecast[1].low.fahrenheit;
    var highThree = $simpleForecast[2].high.fahrenheit;
    var lowThree = $simpleForecast[2].low.fahrenheit;
    var $highLow = ('<div class="highLow">' + highOne + " / " + lowOne + '</div>');
    var $highLowTwo = ('<div class="highLowLater">' + highTwo + " / " + lowTwo + '</div>');
    var $highLowThree = ('<div class="highLowLater">' + highThree + " / " + lowThree + '</div>');
    $weekdayTwo.find('h2').text(dayTwo);
    $weekdayThree.find('h2').text(dayThree);
    $today.text($forecast[0].fcttext);
    $icon.find('i').addClass(todayIcon);
    $iconTwo.addClass(tomorrowIcon);
    $iconThree.addClass(nextDayIcon);
    $forecastToday.append($icon);
    $forecastTomorrow.append($iconTwo);
    $forecastNext.append($iconThree);
    $todayContainer.append($weekdayOne);
    $todayContainer.append($today);
    $todayContainer.append($highLow);
    $forecastToday.append($todayContainer);
    $forecastTomorrow.append($weekdayTwo);
    $forecastNext.append($weekdayThree);
    $('.dayTwoText').append($highLowTwo);
    $('.dayThreeText').append($highLowThree);
  })
})();
