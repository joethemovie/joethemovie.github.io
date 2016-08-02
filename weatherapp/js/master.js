$(document).ready(function(){
  $('#celciusSection').hide();
  $(function(){
    $('#fahrenheitSection').click(function(){
          $('#fahrenheitSection').hide();
          $('#celciusSection').show();
    });
  });
  $(function(){
    $('#celciusSection').click(function(){
          $('#celciusSection').hide();
          $('#fahrenheitSection').show();
    });
  });
$(function(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getLocation);
    } else {
        // Sorry..!! Geolocation is not supported by your browser.
    }

   function getLocation(loc) {
        	var latitude = loc.coords.latitude;
                var longitude = loc.coords.longitude;
                console.log("latitude="+latitude);
                console.log("longitude="+longitude);

   var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=82f1ca5d17b6bd47708b0c0c71288994';
  $.getJSON(api, function(info) {
  // alert(data.coord.lat);
    var weatherType = info.weather[0].description;
    var kelvin = info.main.temp;
    var farTemp = Math.floor((kelvin - 273.15)* 1.8000 + 32.00);
    var celTemp = Math.floor(kelvin - 273.15);
    var windspeed = info.wind.speed;
    var city = info.name;
    var precip = info.weather[0].main;
    var tempImage = [
      '<img src="images/rain.svg" alt="rain" />',
      '<img src="images/cloudy.svg" alt="cloudy" />',
      '<img src="images/snow.svg" alt="snow" />',
      '<img src="images/cold.svg" alt="cold" />',
      '<img src="images/warm.svg" alt="warm" />',
      '<img src="images/hot.svg" alt="hot" />',
      '<img src="images/blank.svg" alt="blank" />'
    ];
    var feedback = [
      "It be rainin yo",
      "It be cloudy yo",
      "Do you want to build a snowman!?",
      "Brrrr",
      "Awwwww yeee, it's amazing outside",
      "Legit Hell on Earth.",
      "Weather. You like it or not."
    ];


    console.log("Precip: " + precip);
    var imageDisplay = "";
    var fbDisplay ="";

    console.log("K: " + kelvin);
    console.log("F: " + farTemp);
    console.log("C: " + celTemp);
    console.log("CITY: " + city);
    console.log("API: " + api);

    $("#fahrenheitSection") .html(farTemp + "º F");
    $("#celciusSection") .html(celTemp + "º C");



    if (precip == "Rain") {
      imageDisplay = tempImage[0];
      fbDisplay= feedback[0];
    } else if (precip == "Clouds") {
        imageDisplay = tempImage[1];
        fbDisplay= feedback[1];
    } else {
      if (kelvin <= 340.15) {
        imageDisplay = tempImage[2];
        fbDisplay= feedback[2];
      } else if (kelvin > 340.15 && kelvin <= 288.706) {
        imageDisplay = tempImage[3];
        fbDisplay= feedback[3];
      } else if (kelvin > 288.706 && kelvin <= 299.817) {
        imageDisplay = tempImage[4];
        fbDisplay= feedback[4];
      } else if (kelvin > 299.817) {
        imageDisplay = tempImage[5];
        fbDisplay= feedback[5];
      } else {
        imageDisplay = tempImage[6];
        fbDisplay= feedback[6];
      }
    }

    $("#imageArea") .html(imageDisplay);
    $("#fbArea") .html('"' + fbDisplay + '"');
    $(".info") .html("click to change");


    });
   }

 });
});
