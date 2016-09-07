$(document).ready(function(){
  var url = "http://joethemovie.com/pages/subaru16ModelYearEnd/js/modelYear2016.json"
  $.ajax({
  dataType: "json",
  url: url,
  data: data,
  success: success
});
});
