$(document).ready(function () {
    var $magic = $(".magic"),
      magicWHalf = $magic.width() / 2;
    $(document).on("mousemove", function (e) {
    console.log('e.pageX');
    console.log(e.pageX);
    console.log('magicWHalf');
    console.log(magicWHalf);




      if (e.pageX - magicWHalf >= 0) {
        if(e.pageX >=1010){
          $magic.css({ "left":null,right:0 });
        }else{
           $magic.css({ "left": e.pageX - magicWHalf });
        }
        
      } else {
        $magic.css({ "left": 0 });
      }
      // if (e.pageX + magicWHalf > $magic[0].parentElement.clientWidth) {
      //   $magic.css({ "left":"","right": 0 });
      // }
    });
  });