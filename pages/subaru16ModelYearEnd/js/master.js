$(document).ready(function(){

  var vehicleArray = [];

  function Vehicle(stock, car, trim, carColor, modelCode, msrp, specialPrice, img, url) {
    this.stock = stock;
    this.car = car;
    this.trim = trim;
    this.carColor = carColor;
    this.modelCode = modelCode;
    this.msrp = msrp;
    this.specialPrice = specialPrice;
    this.img = img;
    this.url = url;
    this.emailLink = 'mailto:rwood@ramseysubaru.net';
  };

  function listing(thisCar){
    $('#testUl').append(
      '<ul><li class="center sectionTitle">' +
      thisCar.car + '</li><li><img src="'+
      thisCar.img + '" class="vehicleImage" /></li><li class="center">MSRP<span class="pricing">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;'+
      thisCar.msrp + '</span></li><li class="center">Special Price<span class="pricing">&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;'+
      thisCar.specialPrice + '</span></li><li class="sectionTitle pricingSpacing">Trim</li><li">'+
      thisCar.trim + '</li><li class="sectionTitle sectionSpacing">Color</li><li>'+
      thisCar.carColor + '</li><li class="sectionTitle sectionSpacing">Model Code</li><li>'+
      thisCar.modelCode + '</li><li class="sectionTitle sectionSpacing">Stock Number</li><li>'+
      thisCar.stock + '</li><li class="sectionSpacing"><a href="' +
      thisCar.emailLink + '?subject=I am interested in ' +
      thisCar.stock + '" class="emailLink">Request Info</a></li></ul>'
    );
}

  vehicleArray[0] = new Vehicle('sug2201','2016 Subaru Outback','Premium w/ All Weather and EyeSight Package','Lapis Blue','GDD-14','$30,761','$28,320','https://images.dealer.com/autodata/us/large_stockphoto-color/2016/USC60SUS311B0/LBP.jpg','http://www.ramseysubaru.net/new/Subaru/2016-Subaru-Outback-ramsey-nj-af7ed92a0a0e0ae77ffe1c9a264a5f10.htm?searchDepth=1:1');
  vehicleArray[1] = new Vehicle('sug1707','2016 Subaru Outback','Premium w/ All Weather and EyeSight Package','Red','GDD-14','$30,671','$28,320');
  vehicleArray[2] = new Vehicle('sug1995','2016 Subaru Outback','Premium w/ All Weather and EyeSight Package','Lapis Blue','GDD-14','$30,671','$28,320');
  vehicleArray[3] = new Vehicle('sug2029','2016 Subaru Outback','Limited w/ Moonroof + Nav','Green','GDF-22','$34,361','$31,209');
  vehicleArray[4] = new Vehicle('sug2085','2016 Subaru Outback','Limited w/ Moonroof/Nav/EyeSight','Black','GDF-23','$30,089','$27,788');
  vehicleArray[5] = new Vehicle('sug1004','2016 Subaru Forester','Limited','Red','GFI-21','$31,506','$28,954');
  vehicleArray[6] = new Vehicle('sug2012','2016 Subaru Forester','Limited w/ Navigation','Bronze','GFI-22','$31,506','$28,954');
  vehicleArray[7] = new Vehicle('sug2013','2016 Subaru Forester','Limited w/ Navigation','Silver','GFI-22','$31,506','$28,954');
  vehicleArray[8] = new Vehicle('sug0239','2016 Subaru Forester','Limited w/ Navigation','Black','GFI-22','$31,439','$32,299');
  vehicleArray[9] = new Vehicle('sug0788','2016 Subaru Forester','2.5i Touring','Quartz Blue','GFJ-31','$32,299','$29,629');
  vehicleArray[10] = new Vehicle('sug0538','2016 Subaru Forester','2.0 XT Touring','Silver','GFN-32','$35,251','$32,428');
  vehicleArray[11] = new Vehicle('sug1820','2016 Subaru Forester','2.0 XT Touring','Red','GFN-32','$36,484','$33,631');
  vehicleArray[12] = new Vehicle('sug1503','2016 Subaru Legacy','Premium w/ All Weather Package and Moonroof','Red','GAD-12','$26,806','$24,593');
  vehicleArray[13] = new Vehicle('sug2150','2016 Subaru Legacy','Premium w/ All Weather Package and Moonroof','Red','GAD-12','$26,755','$24,593');
  vehicleArray[14] = new Vehicle('sug1320','2016 Subaru Legacy','Premium w/ All Weather Package and Moonroof','Red','GAD-12','$26,593','$24,593');
  vehicleArray[15] = new Vehicle('sug1981','2016 Subaru Legacy','Premium w/ Moonroof and Nav','Black','GAD-13','$27,355','$25,097');
  vehicleArray[16] = new Vehicle('sug0755','2016 Subaru Legacy','Premium w/ Moonroof and Nav','Black','GAD-13','$27,001','$25,097');
  vehicleArray[17] = new Vehicle('sug1255','2016 Subaru Legacy','2.5i Limited w/ Moonroof and Navigation','Black','GAF-22','$30,762','$28,246');
  vehicleArray[18] = new Vehicle('sug2088','2016 Subaru WRX STI','Limited','Silver','GUW-21','$41,933','$38,607');

for (var i = 0; i < vehicleArray.length; i++) {
  listing(vehicleArray[i]);
}


});
