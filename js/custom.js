$(document).ready(function () {
    // Wow JS================================
var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       70,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();
  
/* When the user scrolls down,then change  the navbar color.*/
  
$(window).on('scroll',function() {
    if($(window).scrollTop()){
        $('.my-header').addClass('shrink');
       }
      else{
       $('.my-header').removeClass('shrink');
      }
      
    });
 

// Lightbox video play======================
    $(".video-play").modalVideo();


 // owl carousel start======================
 $('.features-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay: true,
    autoplaySpeed:3000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:2,
            
        },
        1000:{
            items:3,
           
        }
    }
});
 // owl carousel end=========================
 // sceenshot carousel start===================
 $('.sceenshots-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay: true,
    autoplaySpeed:3000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:3,
            
        },
        1000:{
            items:4,
           
        }
    }
});
 // sceenshot carousel end===================
 // client carousel start===================
 $('.client-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay: true,
    autoplaySpeed:3000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:2,
            
        },
        1000:{
            items:3,
           
        }
    }
});
 // client carousel end===================

 // team carousel start===================
 $('.team-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay: true,
    autoplaySpeed:3000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:2,
            
        },
        1000:{
            items:3,
           
        }
    }
});
 // team carousel end===================
 
//  page crollIt animation=================
$(function(){
    $.scrollIt({
        topOffset:-30,
        crollTime:1000,
        upKey:1000,
        downKey:1000,
    });
  });

//   navbar collapes================
$(".nav-link").on("click",function() {
    $(".navbar-collapse").collapse("hide");
    
});


// Toogle Theme Night & Dark Mood====================
function toggleTheme() {
    if(localStorage.getItem("app-Theme") !== null){
    if(localStorage.getItem("app-Theme") === "dark"){ 
        $("body").addClass("dark");
    }
    else{
        $("body").removeClass("dark");

    }
}
updateIcon();
}
toggleTheme();


$(".toggle-theme").on("click", function () {
    $("body").toggleClass("dark");
    if($("body").hasClass("dark")){
        localStorage.setItem("app-Theme", "dark");
    }
    else{
        localStorage.setItem("app-Theme", "light");
    }
    updateIcon();
    
});



function updateIcon () {
    if($("body").hasClass("dark")){
        $(".toggle-theme i").removeClass("fa-moon");
        $(".toggle-theme i").addClass("fa-sun");

    }
    else{
        $(".toggle-theme i").removeClass("fa-sun");
        $(".toggle-theme i").addClass("fa-moon");
    }
    
    
}

/*========== Loading  ==========*/
$('.preloader').delay(200).fadeOut(700, function () {
    $(this).remove();
});





//End Jq Code==========================
});


 