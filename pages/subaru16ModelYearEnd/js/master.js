$(document).ready(function(){
  var url = "http://joethemovie.com/pages/subaru16ModelYearEnd/js/modelYear2016.json";
    $.getJSON(url, function(data) {
    var car = data.vehicles.car;
    var stock = data.vehicles.stock;
    var price = data.vehicles.stock;
      $('#testUl').prepend("<li>" + car + "</li><li>" + stock + "</li><li>" + price + "</li>");
    });
});
