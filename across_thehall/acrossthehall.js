var main=function(){
  $('#petsbox').click(function(){

    $('#petsbox').addClass('active')
    $('#kidsbox').removeClass('active')
    $('#choresbox').removeClass('active')
    $(".petsimage").show({},500)
    $(".featureimg").hide({},500)
    $(".kidsimage").hide({},500)
    $(".choresimage").hide({},500)
  });

  $('#kidsbox').click(function(){

    $('#kidsbox').addClass('active')
    $('#petsbox').removeClass('active')
    $('#choresbox').removeClass('active')
    $(".kidsimage").show({},500)
    $(".featureimg").hide({},500)
    $(".petsimage").hide({},500)
    $(".choresimage").hide({},500)
  });


  $('#choresbox').click(function(){

    $('#choresbox').addClass('active')
    $('#kidsbox').removeClass('active')
    $('#petsbox').removeClass('active')
    $(".choresimage").show({},500)
    $(".featureimg").hide({},500)
    $(".kidsimage").hide({},500)
    $(".petsimage").hide({},500)
});




};



$(document).ready(main);
