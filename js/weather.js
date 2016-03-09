(function (){
  var mykey = config.key;
  var zip = 98125;
  var weatherURL = "http://api.wunderground.com/api/" + config.key + "/forecast/q/" + zip + ".json";

// FAKE response

// var response = {
//   "response": {
//   "version":"0.1",
//   "termsofService":"http://www.wunderground.com/weather/api/d/terms.html",
//   "features": {
//   "forecast": 1
//   }
// 	}
// 		,
// 	"forecast":{
// 		"txt_forecast": {
// 		"date":"2:06 PM PST",
// 		"forecastday": [
// 		{
// 		"period":0,
// 		"icon":"chancerain",
// 		"icon_url":"http://icons.wxug.com/i/c/k/chancerain.gif",
// 		"title":"Tuesday",
// 		"fcttext":"Cloudy with a few showers. High 51F. Winds S at 5 to 10 mph. Chance of rain 30%.",
// 		"fcttext_metric":"Cloudy with occasional rain showers. High 11C. Winds S at 10 to 15 km/h. Chance of rain 40%.",
// 		"pop":"30"
// 		}
// 		,
// 		{
// 		"period":1,
// 		"icon":"nt_chancerain",
// 		"icon_url":"http://icons.wxug.com/i/c/k/nt_chancerain.gif",
// 		"title":"Tuesday Night",
// 		"fcttext":"Considerable cloudiness with occasional rain showers. Low 41F. Winds SE at 5 to 10 mph. Chance of rain 40%.",
// 		"fcttext_metric":"Showers this evening becoming less numerous overnight. Low near 5C. Winds SSE at 10 to 15 km/h. Chance of rain 40%.",
// 		"pop":"40"
// 		}
// 		,
// 		{
// 		"period":2,
// 		"icon":"rain",
// 		"icon_url":"http://icons.wxug.com/i/c/k/rain.gif",
// 		"title":"Wednesday",
// 		"fcttext":"A few showers in the morning becoming a steady rain in the afternoon. High 52F. Winds E at 10 to 20 mph. Chance of rain 100%. Rainfall around a half an inch.",
// 		"fcttext_metric":"Showers early becoming a steady rain later in the day. High 11C. Winds E at 15 to 30 km/h. Chance of rain 100%. Rainfall around 12mm.",
// 		"pop":"100"
// 		}
// 		,
// 		{
// 		"period":3,
// 		"icon":"nt_rain",
// 		"icon_url":"http://icons.wxug.com/i/c/k/nt_rain.gif",
// 		"title":"Wednesday Night",
// 		"fcttext":"Periods of rain. Low 47F. Winds SSE at 15 to 25 mph. Chance of rain 100%. Rainfall around a half an inch. Winds could occasionally gust over 40 mph.",
// 		"fcttext_metric":"Cloudy with periods of rain. Low 8C. Winds SSE at 25 to 40 km/h. Chance of rain 100%. Rainfall around 12mm. Winds could occasionally gust over 65 km/h.",
// 		"pop":"100"
// 		}
// 		,
// 		{
// 		"period":4,
// 		"icon":"chancerain",
// 		"icon_url":"http://icons.wxug.com/i/c/k/chancerain.gif",
// 		"title":"Thursday",
// 		"fcttext":"Showers early becoming a steady light rain later in the day. High 53F. Winds SSW at 15 to 25 mph. Chance of rain 70%.",
// 		"fcttext_metric":"Rain showers in the morning becoming a steady light rain in the afternoon. High 11C. Winds SSW at 25 to 40 km/h. Chance of rain 70%.",
// 		"pop":"70"
// 		}
// 		,
// 		{
// 		"period":5,
// 		"icon":"nt_partlycloudy",
// 		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
// 		"title":"Thursday Night",
// 		"fcttext":"A few clouds. Low 39F. Winds ESE at 5 to 10 mph.",
// 		"fcttext_metric":"A few clouds. Low 4C. Winds ESE at 10 to 15 km/h.",
// 		"pop":"20"
// 		}
// 		,
// 		{
// 		"period":6,
// 		"icon":"chancerain",
// 		"icon_url":"http://icons.wxug.com/i/c/k/chancerain.gif",
// 		"title":"Friday",
// 		"fcttext":"Partly cloudy skies early. A few showers developing later in the day. High 57F. Winds N at 5 to 10 mph. Chance of rain 30%.",
// 		"fcttext_metric":"Partly cloudy skies during the morning hours will become overcast in the afternoon. High 14C. Winds N at 10 to 15 km/h.",
// 		"pop":"30"
// 		}
// 		,
// 		{
// 		"period":7,
// 		"icon":"nt_rain",
// 		"icon_url":"http://icons.wxug.com/i/c/k/nt_rain.gif",
// 		"title":"Friday Night",
// 		"fcttext":"Rain likely. Low 44F. Winds SSE at 5 to 10 mph. Chance of rain 90%. Rainfall near a quarter of an inch.",
// 		"fcttext_metric":"Rain. Low 7C. Winds SSE at 10 to 15 km/h. Chance of rain 90%. Rainfall near 6mm.",
// 		"pop":"90"
// 		}
// 		]
// 		},
// 		"simpleforecast": {
// 		"forecastday": [
// 		{"date":{
// 	"epoch":"1457492400",
// 	"pretty":"7:00 PM PST on March 08, 2016",
// 	"day":8,
// 	"month":3,
// 	"year":2016,
// 	"yday":67,
// 	"hour":19,
// 	"min":"00",
// 	"sec":0,
// 	"isdst":"0",
// 	"monthname":"March",
// 	"monthname_short":"Mar",
// 	"weekday_short":"Tue",
// 	"weekday":"Tuesday",
// 	"ampm":"PM",
// 	"tz_short":"PST",
// 	"tz_long":"America/Los_Angeles"
// },
// 		"period":1,
// 		"high": {
// 		"fahrenheit":"51",
// 		"celsius":"11"
// 		},
// 		"low": {
// 		"fahrenheit":"41",
// 		"celsius":"5"
// 		},
// 		"conditions":"Chance of Rain",
// 		"icon":"chancerain",
// 		"icon_url":"http://icons.wxug.com/i/c/k/chancerain.gif",
// 		"skyicon":"",
// 		"pop":30,
// 		"qpf_allday": {
// 		"in": 0.04,
// 		"mm": 1
// 		},
// 		"qpf_day": {
// 		"in": 0.00,
// 		"mm": 0
// 		},
// 		"qpf_night": {
// 		"in": 0.04,
// 		"mm": 1
// 		},
// 		"snow_allday": {
// 		"in": 0.0,
// 		"cm": 0.0
// 		},
// 		"snow_day": {
// 		"in": 0.0,
// 		"cm": 0.0
// 		},
// 		"snow_night": {
// 		"in": 0.0,
// 		"cm": 0.0
// 		},
// 		"maxwind": {
// 		"mph": 10,
// 		"kph": 16,
// 		"dir": "S",
// 		"degrees": 187
// 		},
// 		"avewind": {
// 		"mph": 8,
// 		"kph": 13,
// 		"dir": "S",
// 		"degrees": 187
// 		},
// 		"avehumidity": 59,
// 		"maxhumidity": 0,
// 		"minhumidity": 0
// 		}
// 		,
// 		{"date":{
// 	"epoch":"1457578800",
// 	"pretty":"7:00 PM PST on March 09, 2016",
// 	"day":9,
// 	"month":3,
// 	"year":2016,
// 	"yday":68,
// 	"hour":19,
// 	"min":"00",
// 	"sec":0,
// 	"isdst":"0",
// 	"monthname":"March",
// 	"monthname_short":"Mar",
// 	"weekday_short":"Wed",
// 	"weekday":"Wednesday",
// 	"ampm":"PM",
// 	"tz_short":"PST",
// 	"tz_long":"America/Los_Angeles"
// },
// 		"period":2,
// 		"high": {
// 		"fahrenheit":"52",
// 		"celsius":"11"
// 		},
// 		"low": {
// 		"fahrenheit":"47",
// 		"celsius":"8"
// 		},
// 		"conditions":"Rain",
// 		"icon":"rain",
// 		"icon_url":"http://icons.wxug.com/i/c/k/rain.gif",
// 		"skyicon":"",
// 		"pop":100,
// 		"qpf_allday": {
// 		"in": 0.97,
// 		"mm": 25
// 		},
// 		"qpf_day": {
// 		"in": 0.41,
// 		"mm": 10
// 		},
// 		"qpf_night": {
// 		"in": 0.56,
// 		"mm": 14
// 		},
// 		"snow_allday": {
// 		"in": 0.0,
// 		"cm": 0.0
// 		},
// 		"snow_day": {
// 		"in": 0.0,
// 		"cm": 0.0
// 		},
// 		"snow_night": {
// 		"in": 0.0,
// 		"cm": 0.0
// 		},
// 		"maxwind": {
// 		"mph": 20,
// 		"kph": 32,
// 		"dir": "E",
// 		"degrees": 98
// 		},
// 		"avewind": {
// 		"mph": 15,
// 		"kph": 24,
// 		"dir": "E",
// 		"degrees": 98
// 		},
// 		"avehumidity": 75,
// 		"maxhumidity": 0,
// 		"minhumidity": 0
// 		}
// 		,
// 		{"date":{
// 	"epoch":"1457665200",
// 	"pretty":"7:00 PM PST on March 10, 2016",
// 	"day":10,
// 	"month":3,
// 	"year":2016,
// 	"yday":69,
// 	"hour":19,
// 	"min":"00",
// 	"sec":0,
// 	"isdst":"0",
// 	"monthname":"March",
// 	"monthname_short":"Mar",
// 	"weekday_short":"Thu",
// 	"weekday":"Thursday",
// 	"ampm":"PM",
// 	"tz_short":"PST",
// 	"tz_long":"America/Los_Angeles"
// },
// 		"period":3,
// 		"high": {
// 		"fahrenheit":"53",
// 		"celsius":"12"
// 		},
// 		"low": {
// 		"fahrenheit":"39",
// 		"celsius":"4"
// 		},
// 		"conditions":"Chance of Rain",
// 		"icon":"chancerain",
// 		"icon_url":"http://icons.wxug.com/i/c/k/chancerain.gif",
// 		"skyicon":"",
// 		"pop":70,
// 		"qpf_allday": {
// 		"in": 0.15,
// 		"mm": 4
// 		},
// 		"qpf_day": {
// 		"in": 0.14,
// 		"mm": 4
// 		},
// 		"qpf_night": {
// 		"in": 0.00,
// 		"mm": 0
// 		},
// 		"snow_allday": {
// 		"in": 0.0,
// 		"cm": 0.0
// 		},
// 		"snow_day": {
// 		"in": 0.0,
// 		"cm": 0.0
// 		},
// 		"snow_night": {
// 		"in": 0.0,
// 		"cm": 0.0
// 		},
// 		"maxwind": {
// 		"mph": 25,
// 		"kph": 40,
// 		"dir": "SSW",
// 		"degrees": 201
// 		},
// 		"avewind": {
// 		"mph": 18,
// 		"kph": 29,
// 		"dir": "SSW",
// 		"degrees": 201
// 		},
// 		"avehumidity": 71,
// 		"maxhumidity": 0,
// 		"minhumidity": 0
// 		}
// 		,
// 		{"date":{
// 	"epoch":"1457751600",
// 	"pretty":"7:00 PM PST on March 11, 2016",
// 	"day":11,
// 	"month":3,
// 	"year":2016,
// 	"yday":70,
// 	"hour":19,
// 	"min":"00",
// 	"sec":0,
// 	"isdst":"0",
// 	"monthname":"March",
// 	"monthname_short":"Mar",
// 	"weekday_short":"Fri",
// 	"weekday":"Friday",
// 	"ampm":"PM",
// 	"tz_short":"PST",
// 	"tz_long":"America/Los_Angeles"
// },
// 		"period":4,
// 		"high": {
// 		"fahrenheit":"57",
// 		"celsius":"14"
// 		},
// 		"low": {
// 		"fahrenheit":"44",
// 		"celsius":"7"
// 		},
// 		"conditions":"Chance of Rain",
// 		"icon":"chancerain",
// 		"icon_url":"http://icons.wxug.com/i/c/k/chancerain.gif",
// 		"skyicon":"",
// 		"pop":30,
// 		"qpf_allday": {
// 		"in": 0.29,
// 		"mm": 7
// 		},
// 		"qpf_day": {
// 		"in": 0.02,
// 		"mm": 1
// 		},
// 		"qpf_night": {
// 		"in": 0.27,
// 		"mm": 7
// 		},
// 		"snow_allday": {
// 		"in": 0.0,
// 		"cm": 0.0
// 		},
// 		"snow_day": {
// 		"in": 0.0,
// 		"cm": 0.0
// 		},
// 		"snow_night": {
// 		"in": 0.0,
// 		"cm": 0.0
// 		},
// 		"maxwind": {
// 		"mph": 10,
// 		"kph": 16,
// 		"dir": "N",
// 		"degrees": 5
// 		},
// 		"avewind": {
// 		"mph": 7,
// 		"kph": 11,
// 		"dir": "N",
// 		"degrees": 5
// 		},
// 		"avehumidity": 69,
// 		"maxhumidity": 0,
// 		"minhumidity": 0
// 		}
// 		]
// 		}
// 	}
// }

// END FAKE RESPONSE
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
