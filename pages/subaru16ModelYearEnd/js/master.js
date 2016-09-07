$(document).ready(function(){
  var car;
  var stock;
  var price;
  var outbacks = [];

      $.getJSON('http://joethemovie.com/pages/subaru16ModelYearEnd/js/modelYear2016.json', function(data) {
      outbacks = data.vehicles.outbacks;
      outbacks = outbacks.length;
      console.log(outbacks);
      car = data.vehicles.outbacks.car;
      stock = data.vehicles.outbacks.stock;
      price = data.vehicles.outbacks.price;
      console.log(car);
        $('#testUl').append("<li>" + car + "</li><li>" + stock + "</li><li>" + price + "</li>");

    }
});
