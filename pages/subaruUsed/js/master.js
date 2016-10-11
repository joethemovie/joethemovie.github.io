$(document).ready(function(){

  var vehicleArray = [];

  function Vehicle(
    stock,
    car,
    trim,
    carColor,
    specialPrice,
    img,
    url,
    engine,
    mpg,
    doors,
    trans,
    mileage
    ){
    this.stock = stock;
    this.car = car;
    this.trim = trim;
    this.carColor = carColor;
    this.specialPrice = specialPrice;
    this.img = img;
    this.url = url;
    this.emailLink = 'mailto:rwood@ramseysubaru.net';
    this.trans = trans;
    this.mpg = mpg;
    this.doors = doors;
    this.engine = engine;
    this.mileage = mileage;
  };

  function listing(thisCar){
    $('#testUl').append(
      '<ul><li class="center sectionTitle">' +

      thisCar.car + '</li><li><img src="'+

      thisCar.img + '" class="vehicleImage" /></li><li class="center">Mileage<span class="pricing">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;'+

      thisCar.mileage + '</span></li><li class="center">Price<span class="pricing">&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;'+

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
  'SUU2687',
  '2013 Subaru Legacy 2.5i',
  '2.5i',
  'Ice Silver',
  '$13,356',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/1491/ee6a14a9f8b037e54940189f5dcfcc25x.jpg',
  'http://www.ramseysubaru.net/certified/Subaru/2013-Subaru-Legacy-ramsey-nj-e55419980a0e0adf4c02a6bc82a46b67.htm?searchDepth=1:1',
  '2.5L H-4 Cyl',
  '21 city/ 28 hwy',
  4,
  '6 Speed Manual',
  '61,268');
vehicleArray[1] = new Vehicle(
  'SUU2686',
  '2014 Subaru Legacy 2.5i',
  '2,5i',
  'Satin White',
  '$15,772',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/1465/ec899be7985a9dca1c150c84102b60f2x.jpg',
  'http://www.ramseysubaru.net/certified/Subaru/2014-Subaru-Legacy-ramsey-nj-e554192f0a0e0adf4c02a6bcb468cb96.htm?searchDepth=1:1',
  '2.5L H-4 Cyl',
  '21 city,29 hwy',
  '4',
  '6 Speed Manual',
  '37,490');
vehicleArray[2] = new Vehicle(
  'SUU2693',
  '2013 Subaru Impreza 2.0i',
  '2.0i',
  'Dark Gray',
  '$14,977',
  'https://pictures.dealer.com//autodata/us/large_stockphoto-color/2013/USC30SUC042A0/DGM.jpg',
  'http://www.ramseysubaru.net/certified/Subaru/2013-Subaru-Impreza-ramsey-nj-0438e0c50a0e0adf065da0a37d7f258f.htm?searchDepth=1:1',
  '2.0L H-4 Cyl',
  '25 city/33 hwy',
  4,
  '5 speed manual',
  '33,762');
vehicleArray[3] = new Vehicle(
  'SUU2698',
  '2013 Subaru Impreza 2.0i',
  '2.0i',
  'Marine Blue',
  '$15,385',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/1671/9e31f34d14bc5ebd049aa26eeb7c575fx.jpg',
  'http://www.ramseysubaru.net/certified/Subaru/2013-Subaru-Impreza-ramsey-nj-0e9161fd0a0e0adf72d8a929902125d7.htm?searchDepth=1:1',
  '2.0L H-4 Cyl',
  '25 city/33 hwy',
  '5',
  '5 speed manual',
  '34,576');
vehicleArray[4] = new Vehicle(
  'SUU2700',
  '2013 Subaru Crosstrek 2.0i',
  '2,0i',
  'Ice Silver',
  '$18,778',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/0501/cded441d8b8d424504e8a31156b51271x.jpg',
  'http://www.ramseysubaru.net/certified/Subaru/2013-Subaru-XV+Crosstrek-ramsey-nj-0e91619d0a0e0adf72d8a92907eff5ec.htm?searchDepth=1:1',
  '2.0L H-4 Cyl',
  '25 city/ 33 hwy',
  '4',
  'Automatic CVT',
  '50,190');
vehicleArray[5] = new Vehicle(
  'SUU2703',
  '2014 Subaru Forester Premium',
  'Premium',
  'Bronze',
  '$20,374',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/1796/aa783ca5d7d370ac439cc86cd0235fb4x.jpg',
  'http://www.ramseysubaru.net/certified/Subaru/2014-Subaru-Forester-ramsey-nj-13b30ea30a0e0adf72d8a9295a144f8a.htm?searchDepth=1:1',
  '2.5L H-4 Cyl',
  '24 city/ 32 hwy',
  4,
  'Automatic CVT',
  '23,425');


for (var i = 0; i < vehicleArray.length; i++) {
  listing(vehicleArray[i]);
}


});
