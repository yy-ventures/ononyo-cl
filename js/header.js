$(document).ready(function () {
    var $magic = $(".magic"),
      magicWHalf = $magic.width() / 2;
    $(document).on("mousemove", function (e) {
      if (e.pageX - magicWHalf >= 0) {
        $magic.css({ "left": e.pageX - magicWHalf });
      } else {
        $magic.css({ "left": 0 });
      }
      // if (e.pageX + magicWHalf > $magic[0].parentElement.clientWidth) {
      //   $magic.css({ "left":"","right": 0 });
      // }
    });
  });