$(document).ready(function(){
  var url = "http://joethemovie.com/pages/subaru16ModelYearEnd/js/modelYear2016.json";
    $.getJSON(url, function(data) {
    var car = data.car;
      $('#testUl').prepend("<li>" + car + "</li>");
    });
});
