$(document).ready(function () {
    var $magic = $(".magic"),
      magicWHalf = $magic.width() / 2;
    // $(document).on("mousemove", function (e) {
      $('.header-section').on("mousemove", function (e) {
      
      if (e.pageX - magicWHalf >= 0) {
        
        console.log('e.pageX =>' + e.pageX);
        console.log('magicWHalf =>' + magicWHalf);
        console.log('screen_width =>' + screen.width);
        console.log('screen_width_modified =>' + (screen.width-340));

        if(e.pageX >=(screen.width-354)){
          $magic.css({ "left":null,right:0 });
          // $magic.css({ "left": e.pageX - magicWHalf });
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