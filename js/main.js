var $userSubReddit;
var $reddit = $('#reddit');
var $form = $('.form');
var count = 0;
var $zipcode = $('#zipcode');
var $subreddit = $('#subreddit');

if (window.location.pathname.indexOf('/index.html') !== -1) {
  if (localStorage.getItem('userZip') === null || localStorage.getItem('userSubReddit') === null) {
    location.href = 'settings.html';
  }
}

if (window.location.pathname.indexOf('/settings.html') !== -1) {
  $zipcode.attr('value', localStorage.getItem('userZip'));
  $subreddit.attr('value', localStorage.getItem('userSubReddit') || 'front page');
}

var authenticate = function() {
  'use strict';
  var zip = localStorage.getItem('userZip');
  var mykey = config.key;
  var weatherURL = 'http://api.wunderground.com/api/' + config.key + '/forecast/q/' + zip + '.json';

  if (localStorage.getItem('userSubReddit') === 'front page') {
    var subRedditURL = 'https://www.reddit.com/hot.json';
  }
  else {
    var userSubReddit = localStorage.getItem('userSubReddit');
    var subRedditURL = 'https://www.reddit.com/r/' + userSubReddit + '.json';
  }

  $.ajax({
    type: "GET",
    dataType: "json",
    url: weatherURL,
    success: function(data) {
      if (data.response.error !== undefined) {
        $form.append('<p>Please enter a valid zip code.</p>');
      }
      else {
        count += 1;
      }
    },
    error: function() {
      $form.append('<p>Please enter a valid zip code.</p>');
    }
  }).then(function() {
    $.ajax({
      type: "GET",
      dataType: "json",
      url: subRedditURL,
      success: function(data) {
        count += 1;
      },
      error: function() {
        $form.append('<p>Please enter a valid subreddit.</p>');
      }
    }).then(function() {
      if (count === 2) {
        location.href = 'index.html';
      }
    });
  });
};

$form.on('submit', function() {
  event.preventDefault();
  localStorage.setItem('userZip', $('#zipcode').val());
  localStorage.setItem('userSubReddit', $('#subreddit').val());
  count = 0;
  $form.find('p').remove();
  authenticate();
});
