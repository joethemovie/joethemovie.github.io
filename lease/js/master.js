$(document).ready(function(){

// money factor is difference between residual and what you're buying the car for
// residual lease end value


var url2 = window.location.search;
              console.log("captured URL: " + url2);
var pricing = url2.substr(-5, 5);
              console.log("msrp: " + pricing);

$('#msrp').val(pricing);


var xc90_t5_fwd_momentum_residual = "Select Months";
var xc90_t5_fwd_momentum_mf = "Select Months";
var miles = "Select Miles Per Year";

$('#tenK').click(function(){
  miles = 10000;
  console.log("mileage: " + miles);
});
$('#twelveK').click(function(){
  miles = 12000;
  console.log("mileage: " + miles);
});
$('#fifteenK').click(function(){
  miles = 15000;
  console.log("mileage: " + miles);
});
$('#eighteenK').click(function(){
  miles = 18000;
  console.log("mileage: " + miles);
});
$('#twentyK').click(function(){
  miles = 20000;
  console.log("mileage: " + miles);
});
//   // enter/return search submission functionality
$(document).mouseup(function(e){
  var container = $(".commentArea");

  if (!container.is(e.target) // if the target of the click isn't the container...
      && container.has(e.target).length === 0) // ... nor a descendant of the container
  {
          // $("input:text").hideObtrusiveText();
          var searchTerm = $('#searchTerm').val();



          var msrp = parseFloat($('#msrp').val().replace(',',''));

          var url = 'https://taxrates.api.avalara.com/postal?country=usa&postal=' + searchTerm + '&apikey=TUQank8wc4gaOc7WhVUNViPSity%2B7Z3yan4K4YfrTy%2BdlkIBSMiKn2NsqTauS9l%2Bj2OvOiORFKE%2BOnzLOiWUcQ%3D%3D';


          $.getJSON('http://joethemovie.com/volvoTest.json', function(data1){



            $("#twentyFour").click(function(){
                xc90_t5_fwd_momentum_residual = data1.vehicles.XC90.t5_fwd_momentum.months.twentyFour.residual;
                xc90_t5_fwd_momentum_mf = data1.vehicles.XC90.t5_fwd_momentum.months.twentyFour.moneyFactor;

            });
            $("#thirty").click(function(){
                xc90_t5_fwd_momentum_residual = data1.vehicles.XC90.t5_fwd_momentum.months.thirty.residual;
                xc90_t5_fwd_momentum_mf = data1.vehicles.XC90.t5_fwd_momentum.months.thirty.moneyFactor;

            });
            $("#thirtySix").click(function(){
                xc90_t5_fwd_momentum_residual = data1.vehicles.XC90.t5_fwd_momentum.months.thirtySix.residual;
                xc90_t5_fwd_momentum_mf = data1.vehicles.XC90.t5_fwd_momentum.months.thirtySix.moneyFactor;

            });
            $("#thirtyNine").click(function(){
                xc90_t5_fwd_momentum_residual = data1.vehicles.XC90.t5_fwd_momentum.months.thirtyNine.residual;
                xc90_t5_fwd_momentum_mf = data1.vehicles.XC90.t5_fwd_momentum.months.thirtyNine.moneyFactor;

            });
            $("#fourtyEight").click(function(){
                xc90_t5_fwd_momentum_residual = data1.vehicles.XC90.t5_fwd_momentum.months.fourtyEight.residual;
                xc90_t5_fwd_momentum_mf = data1.vehicles.XC90.t5_fwd_momentum.months.fourtyEight.moneyFactor;

            });


          });


          $.getJSON(url, function(info) {

            var getTax = info.totalRate;
            var taxPercent = info.totalRate/Math.pow(10, 2)+1;
            var totalPrice = Math.floor(taxPercent * msrp);
            $('#output').html('<li><p> MSRP: $ ' + msrp + '</p><p> Residual: '+xc90_t5_fwd_momentum_residual+'</p><p>Money Factor: '+xc90_t5_fwd_momentum_mf+'</p><p>Miles Per Year: ' + miles + '</p><p>Your Tax Rate: ' + getTax + '%</p><hr><p>Total Price: $' + totalPrice  + '</p></li>'

);

          });

            return false;
         }
    });

});
