

let i=2;

	
$(document).ready(function(){

  var radius = 200;
  var fields = $('.itemDot');
  var container = $('.dotCircle');
  var width = container.width();
  radius = width/2.5;

  var height = container.height();
  var angle = 0, step = (2*Math.PI) / fields.length;
  fields.each(function() {
    var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
    var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
    if(window.console) {
      console.log($(this).text(), x, y);
    }
    $(this).css({
      left: x + 'px',
      top: y + 'px'
    });
    angle += step;
  });
  
  $('.itemDot').click(function(){
    
    var dataTab= $(this).data("tab");
    $('.itemDot').removeClass('active');
    $(this).addClass('active');
    $('.CirItem').removeClass('active');
    $( '.CirItem'+ dataTab).addClass('active');
    i=dataTab;
    
    $('.dotCircle').css({
      "transform":"rotate("+(360-(i-1)*39)+"deg)",
      "transition":"2s"
    });
    $('.itemDot').css({
      "transform":"rotate("+((i-1)*39)+"deg)",
      "transition":"1s"
    })
    
  });
  
  
});

function checkArrow() {
  var swiperPrev = document.querySelector('.swiper-button-prev');
  var swiperNext = document.querySelector('.swiper-button-next');
  if ( window.innerWidth > 1024  ) {
    console.log('Success', window.innerWidth);
    swiperPrev.style.display = 'block';
    swiperNext.style.display = 'block';
  } else {
    swiperPrev.style.display = 'none';
    swiperNext.style.display = 'none';
  }
}



