// $(document).ready(function () {
//     var $magic = $(".magic"),
//         magicWHalf = $magic.width() / 2;
    
//     $(document).on("mousemove", function (e) {
//         if (e.pageX - magicWHalf >= 0) {
//             $magic.css({ "left": e.pageX - magicWHalf });
//         } else {
//             $magic.css({ "left": 0 });
//         }
//         if (e.pageX - magicWHalf > $magic.width()) {
//             $magic.css({ "right": 0 });
//         }
//     });
// });
var $magic = $(".mobile-magic"),
        magicWHalf = $magic.width() / 2;
        $(".header-section-mobile").bind('mousewheel DOMMouseScroll', function (e) { return false; });
        // $magic.mousemove(function(e) {
        //     console.log("OOOLLL");
        // });

        $(".header-section-mobile").mousemove(function(e) {
            console.log("OOO");
        });
let parentElemWidth = $magic[0].parentElement.clientWidth;

// console.log(parentElemWidth);
        
var num = magicWHalf;
let direction = "right";
// function headerAnimation(number) {
//     // console.log(number);
//     if (number - magicWHalf >= 0) {
//         $magic.css({ "left": number - magicWHalf });
//     } else {
//         $magic.css({ "left": 0 });
//     }
//     if (number - magicWHalf > $magic.width()) {
//         $magic.css({ "right": 0 });
//     }
    
//    if(number  + magicWHalf > parentElemWidth) {
//        direction = "left";
//    } else if (number - magicWHalf < 0) {
//        direction = "right";
//    }
//    if(direction ==="right"){
//        num +=1;
//    }else if (direction ==="left") {
//        num-=1;
//    }
// }

// setInterval(()=>headerAnimation(num), 10)


