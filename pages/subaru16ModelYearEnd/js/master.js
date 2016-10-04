$(document).ready(function(){

  var vehicleArray = [];

  function Vehicle(stock, car, trim, carColor, modelCode, msrp, specialPrice, img, url, engine, mpg, doors, trans) {
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
    this.trans = trans;
    this.mpg = mpg;
    this.doors = doors;
    this.engine = engine;
  };

  function listing(thisCar){
    $('#testUl').append(
      '<ul><li class="center sectionTitle">' +

      thisCar.car + '</li><li><img src="'+

      thisCar.img + '" class="vehicleImage" /></li><li class="center">MSRP<span class="pricing">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;'+

      thisCar.msrp + '</span></li><li class="center">Special Price<span class="pricing">&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;'+

      thisCar.specialPrice + '</span></li><li><div class="imageContainer"><div class="imageArea"><img src="http://joethemovie.com/images/engineIcon.svg" class="iconSizing"/></div><div class="imageInfo"><span class="sectionTitle">Engine</span><br/>' + thisCar.engine + '</div><div class="imageArea"><img src="http://joethemovie.com/images/gearIcon.svg" class="iconSizing"/></div><div class="imageInfo"><span class="sectionTitle">Transmission</span><br/>' + thisCar.trans + '</div><div class="imageArea"><img src="http://joethemovie.com/images/gaugeIcon.svg" class="iconSizing"/></div><div class="imageInfo"><span class="sectionTitle">MPG</span><br/>' + thisCar.mpg + '</div><div class="imageArea"><img src="http://joethemovie.com/images/carFrontIcon.svg" class="iconSizing"/></div><div class="imageInfo"><span class="sectionTitle">Exterior Color</span><br/>' + thisCar.carColor + '</div><div class="imageArea"><img src="http://joethemovie.com/images/carSideIcon.svg" class="iconSizing"/></div><div class="imageInfo"><span class="sectionTitle">Doors</span><br/>' + thisCar.doors + '</div></div></li><li class="sectionTitle pricingSpacing">Trim</li><li">'+

      thisCar.trim + '</li><li class="sectionTitle sectionSpacing">Color</li><li>'+

      thisCar.carColor + '</li><li class="sectionTitle sectionSpacing">Model Code</li><li>'+

      thisCar.modelCode + '</li><li class="sectionTitle sectionSpacing">Stock Number</li><li>'+

      thisCar.stock + '</li><li class="sectionSpacing"><a href="' +

      thisCar.emailLink + '?subject=I am interested in ' +

      thisCar.stock + '" class="emailLink">Request Info</a></li></ul>'
    );
}

  vehicleArray[0] = new Vehicle(
    'SUG2201',
    '2016 Subaru Outback',
    'Premium w/ All Weather and EyeSight Package',
    'Lapis Blue','GDD-14','$30,761','$28,320',
    'https://images.dealer.com/autodata/us/large_stockphoto-color/2016/USC60SUS311B0/LBP.jpg',
    'http://www.ramseysubaru.net/new/Subaru/2016-Subaru-Outback-ramsey-nj-af7ed92a0a0e0ae77ffe1c9a264a5f10.htm?searchDepth=1:1',
    '2.5L 4-cyl AWD',
    '25 city/33 hwy',
    4,
    'Automatic');
  vehicleArray[1] = new Vehicle(
    'SUG1707',
    '2016 Subaru Outback',
    'Premium w/ All Weather and EyeSight Package',
    'Venetian Red',
    'GDD-14',
    '$30,671',
    '$28,320',
    'https://images.dealer.com/ddc/vehicles/2017/Subaru/Outback/SUV/trim_25_i_Premium_785e78/color/Venetian%20Red%20Pearl-VRP-111%2C0%2C23-640-en_US.jpg',
    'missing',
    '2.5L 4-cyl AWD',
    '25 city/33 hwy',
    4,
    'Automatic');
  vehicleArray[2] = new Vehicle(
    'SUG1995',
    '2016 Subaru Outback',
    'Premium w/ All Weather and EyeSight Package',
    'Lapis Blue',
    'GDD-14',
    '$30,671',
    '$28,320',
    'https://images.dealer.com/autodata/us/large_stockphoto-color/2016/USC60SUS311B0/LBP.jpg',
    'http://www.ramseysubaru.net/new/Subaru/2016-Subaru-Outback-ramsey-nj-33e653570a0e0a6b6c0e2aed6533a6db.htm?searchDepth=1:1',
    '2.5L 4-cyl AWD',
    '25 city/33 hwy',
    4,
    'Automatic');
  vehicleArray[3] = new Vehicle(
    'SUG2029',
    '2016 Subaru Outback',
    'Limited w/ Moonroof + Nav',
    'Wilderness Green',
    'GDF-22',
    '$34,361','$31,209',
    'img',
    'mising',
    '2.5L 4-cyl AWD',
    '25 city/33 hwy',
    4,
    'Automatic');
  vehicleArray[4] = new Vehicle(
    'SUG2085',
    '2016 Subaru Outback',
    'Limited w/ Moonroof/Nav/EyeSight',
    'Crystal Black',
    'GDF-23',
    '$30,089',
    '$27,788',
    'https://images.dealer.com/autodata/us/large_stockphoto-color/2016/USC60SUS311C0/CBS.jpg',
    'http://www.ramseysubaru.net/new/Subaru/2016-Subaru-Outback-ramsey-nj-2b1788680a0e0ae86dafef0e9e50996e.htm?searchDepth=1:1',
    '2.5L 4-cyl AWD',
    '25 city/33 hwy',
    4,
    'Automatic');
  vehicleArray[5] = new Vehicle(
    'SUG1004',
    '2016 Subaru Forester',
    'Limited',
    'Venetian Red',
    'GFI-21',
    '$31,506',
    '$28,954',
    'https://pictures.dealer.com/r/ramseysubaruramseysoa/1851/ad8c6481b37a2a3af26a5d723573a38ax.jpg',
    'http://www.ramseysubaru.net/new/Subaru/2016-Subaru-Forester-ramsey-nj-966c66690a0e0ae70446575972018974.htm?searchDepth=1:1',
    '2.5L 4-cyl AWD',
    '24 city/32 hwy',
    4,
    'Automatic');
  vehicleArray[6] = new Vehicle(
    'SUG2012',
    '2016 Subaru Forester',
    'Limited w/ Navigation',
    'Burnished Bronze',
    'GFI-22',
    '$31,506',
    '$28,954',
    'img',
    'missing',
    '2.5L 4-cyl AWD',
    '24 city/32 hwy',
    4,
    'Automatic');
  vehicleArray[7] = new Vehicle(
    'SUG2013',
    '2016 Subaru Forester',
    'Limited w/ Navigation',
    'Ice Silver',
    'GFI-22',
    '$31,506',
    '$28,954',
    'https://images.dealer.com/ddc/vehicles/2016/Subaru/Forester/SUV/trim_25i_Limited_360499/color/Ice%20Silver%20Metallic-IS1-188%2C192%2C196-640-en_US.jpg',
    'http://www.ramseysubaru.net/new/Subaru/2016-Subaru-Forester-ramsey-nj-2ebff9390a0e0a173d1042ed9eccb842.htm?searchDepth=1:1',
    '2.5L 4-cyl AWD',
    '24 city/32 hwy',
    4,
    'Automatic');
  vehicleArray[8] = new Vehicle(
    'SUG0239',
    '2016 Subaru Forester',
    'Limited w/ Navigation',
    'Crystal Black',
    'GFI-22',
    '$31,439',
    '$32,299',
    'img',
    'missing',
    '2.5L 4-cyl AWD',
    '24 city/32 hwy',
     4,
     'Automatic');
  vehicleArray[9] = new Vehicle(
    'SUG0788',
    '2016 Subaru Forester',
    '2.5i Touring',
    'Quartz Blue',
    'GFJ-31',
    '$32,299',
    '$29,629',
    'https://pictures.dealer.com/r/ramseysubaruramseysoa/1669/463e3053ef3f8ac3e621531bf90509bfx.jpg',
    'http://www.ramseysubaru.net/new/Subaru/2016-Subaru-Forester-ramsey-nj-200074730a0e0ae827064cd455fe3f3b.htm?searchDepth=1:1',
    '2.5L 4-cyl AWD',
    '24 city/32 hwy',
    4,
    'Automatic');
  vehicleArray[10] = new Vehicle(
    'SUG0538',
    '2016 Subaru Forester',
    '2.0 XT Touring',
    'Ice Silver',
    'GFN-32',
    '$35,251',
    '$32,428',
    'https://pictures.dealer.com/r/ramseysubaruramseysoa/1930/3857b4b541d7597192cf8988c7385d6bx.jpg',
    'http://www.ramseysubaru.net/new/Subaru/2016-Subaru-Forester-ramsey-nj-857a8ba00a0e0ae7487386d7818955b2.htm?searchDepth=1:1',
    '2.0L 4-cyl AWD',
    '23 mpg/28 hwy',
    4,
    'Automatic');
  vehicleArray[11] = new Vehicle(
    'SUG1820',
    '2016 Subaru Forester',
    '2.0 XT Touring',
    'Venetian Red',
    'GFN-32',
    '$36,484',
    '$33,631',
    'https://images.dealer.com/ddc/vehicles/2016/Subaru/Forester/SUV/trim_20XT_Touring_ce638a/color/Venetian%20Red%20Pearl-VRP-111%2C0%2C23-640-en_US.jpg',
    'http://www.ramseysubaru.net/new/Subaru/2016-Subaru-Forester-ramsey-nj-d7645b1a0a0e0a6b43cc0b660e6e748a.htm?searchDepth=1:1',
    '2.0L 4-cyl AWD',
    '23 mpg/28 hwy',
    4,
    'Automatic');
  vehicleArray[12] = new Vehicle(
    'SUG1503',
    '2016 Subaru Legacy',
    'Premium w/ All Weather Package and Moonroof',
    'Venetian Red',
    'GAD-12',
    '$26,806',
    '$24,593',
    'https://images.dealer.com/ddc/vehicles/2016/Subaru/Legacy/Sedan/trim_25i_Premium_712a60/color/Venetian-Red-Pearl-VRP-111%2C0%2C23-640-en_US.jpg',
    'http://www.ramseysubaru.net/new/Subaru/2016-Subaru-Legacy-ramsey-nj-0e5be6ff0a0e0a1704ec476a85623681.htm?searchDepth=1:1',
    '2.5L H-4 Cyl AWD',
    '26 city/36 hwy',
    4,
    'Automatic');
  vehicleArray[13] = new Vehicle(
    'SUG2150',
    '2016 Subaru Legacy',
    'Premium w/ All Weather Package and Moonroof',
    'Venetian Red','GAD-12','$26,755','$24,593',
    'https://images.dealer.com/ddc/vehicles/2016/Subaru/Legacy/Sedan/trim_25i_Premium_712a60/color/Venetian-Red-Pearl-VRP-111%2C0%2C23-640-en_US.jpg',
    'http://www.ramseysubaru.net/new/Subaru/2016-Subaru-Legacy-ramsey-nj-a5323a830a0e0adf3970e087e31c6083.htm?searchDepth=1:1',
    '2.5L H-4 Cyl AWD',
    '26 city/36 hwy',
    4,
    'Automatic');
  vehicleArray[14] = new Vehicle(
    'SUG1320',
    '2016 Subaru Legacy',
    'Premium w/ All Weather Package and Moonroof',
    'Venetian Red','GAD-12','$26,593','$24,593',
    'https://images.dealer.com/ddc/vehicles/2016/Subaru/Legacy/Sedan/trim_25i_Premium_712a60/color/Venetian-Red-Pearl-VRP-111%2C0%2C23-640-en_US.jpg',
    'http://www.ramseysubaru.net/new/Subaru/2016-Subaru-Legacy-ramsey-nj-6469e1c00a0e0ae77546168adc1cc239.htm?searchDepth=1:1',
    '2.5L H-4 Cyl AWD',
    '26 city/36 hwy',
    4,
    'Automatic');
  vehicleArray[15] = new Vehicle(
    'SUG1981',
    '2016 Subaru Legacy',
    'Premium w/ Moonroof and Nav',
    'Crystal Black',
    'GAD-13','$27,355','$25,097',
    'https://pictures.dealer.com/r/ramseysubaruramseysoa/1183/8e98a7eadbe7a3a5100d3fbe48b97c36x.jpg',
    'http://www.ramseysubaru.net/new/Subaru/2016-Subaru-Legacy-ramsey-nj-43595d910a0e0a6b6c0e2aed7fd3d020.htm?searchDepth=1:1',
    '2.5L H-4 Cyl AWD',
    '26 city/36 hwy',
    4,
    'Automatic');
  vehicleArray[16] = new Vehicle(
    'SUG0755',
    '2016 Subaru Legacy',
    'Premium w/ Moonroof and Nav',
    'Crystal Black',
    'GAD-13',
    '$27,001',
    '$25,097',
    'img',
    'missing',
    '2.5L H-4 Cyl AWD',
    '26 city/36 hwy', 4, 'Automatic');
  vehicleArray[17] = new Vehicle(
    'SUG1255',
    '2016 Subaru Legacy',
    '2.5i Limited w/ Moonroof and Navigation',
    'Crystal Black',
    'GAF-22',
    '$30,762',
    '$28,246',
    'img',
    'missing',
    '2.5L H-4 Cyl AWD',
    '26 city/36 hwy', 4, 'Automatic');
  vehicleArray[18] = new Vehicle(
    'SUG2088',
    '2016 Subaru WRX STI',
    'Limited',
    'Ice Silver',
    'GUW-21',
    '$41,933',
    '$38,607',
    'https://pictures.dealer.com/r/ramseysubaruramseysoa/0173/723b2fcc8e12c87893e3318f1729745cx.jpg',
    'http://www.ramseysubaru.net/new/Subaru/2016-Subaru-WRX-ramsey-nj-81259b200a0e0ae74ba6f1893d33cad4.htm?searchDepth=1:1',
    '2.5L H-4 Cyl AWD',
    '17city/23 hwy',
    4,
    'Manual');

for (var i = 0; i < vehicleArray.length; i++) {
  listing(vehicleArray[i]);
}


});
