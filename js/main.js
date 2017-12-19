$(function(){
  //hover event handler on mouseover and mouseleave
  $(".heading").hover(function(){
    $(this).css('color','#ebc000');

  },function(){
    $(this).css('color','#fff');
  });
  $(".inner").mouseover(function(){
    $(".inner h1").css('background-color','#ae5e9b');

  });
  $(".inner").mouseout(function(){
    $(".inner h1").css('background-color','#009fdb');
  });
  $(".btn").click(function(){
      $(".inner").find(".heading").animate({
        height:'toggle'
      });
  });
  $(".box").animate({
    left:'300',
    top:'0'
  },'linear')
  .animate({
    top:'90'
  },'linear')
  .animate({
    left:'-300'
  },'linear')
  .animate({
    top:'-10'
  },'linear')
  .animate({
    left:'0'
  },'linear');
});
