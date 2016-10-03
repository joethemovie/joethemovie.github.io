$(document).ready(function(){
  

  $('.mediaContent').hide();
  $('.catArea').hide();

  $('#cat1op1').click(function(event){
    $('.mediaContent').hide();
    $('.video1').show();
    document.getElementById('videoCont1').play();
  });

  $('#cat1op2').click(function(event){
    $('.mediaContent').hide();
    $('.image1').show();
    document.getElementById('videoCont1').pause();
  });

  $('.cat1').click(function(event){
    $('.catArea').hide();
    $('#cat1').show();
  });
  $('.cat2').click(function(event){
    $('.catArea').hide();
    $('#cat2').show();
  });
  $('.cat3').click(function(event){
    $('.catArea').hide();
    $('#cat3').show();
  });
  $('.cat4').click(function(event){
    $('.catArea').hide();
    $('#cat4').show();
  });
});
