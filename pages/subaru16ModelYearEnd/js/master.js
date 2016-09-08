$(document).ready(function(){
  var car;
  var stock;
  var price;
  var outbacks = [];
    $.getJSON('http://joethemovie.com/pages/subaru16ModelYearEnd/js/modelYear2016.json', function(data) {
    outbacks = data.outbacks.ob0;
    var count = Object.keys(outbacks).length;
 console.log(count);

for (var i = 0; i <= count; i++) {
  var vehicle = ob + i;
  car = data.outbacks..car;
  stock = data.outbacks.ob1.stock;
  price = data.outbacks.ob1.price;
  console.log(car);
}
      $('#testUl').append("<li>" + car + "</li><li>" + stock + "</li><li>" + price + "</li>");
    });
});
