$(document).ready(function(){


 new WOW().init();

     	//Hide Loading Box (Preloader)
       function handlePreloader() {
        if($('.preloader').length){
          $('.preloader').delay(200).fadeOut(500);
        }
        }
       
            handlePreloader();

if ($(window).scrollTop() > 20) {
    $("#back-to-top").css("animation-name", "scroll-btn-show");
  }
  else {
    $("#back-to-top").css("animation-name", "scroll-btn-hidden");
  }

$("#back-to-top").click(function(){
      $('html,body').animate({scrollTop:0},1900);
      return false;
    });

    



    $(window).scroll(function(){
    
        if ($(this).scrollTop() > 20) {
    $("#back-to-top").css("animation-name", "scroll-btn-show");
  }
  else {
    $("#back-to-top").css("animation-name", "scroll-btn-hidden");
  }
      
    })
    // $(".search-icon").click(function(){
    //   $(".form-container").toggle();

    
    // }) ;
  

    // if($(window).scrollTop()>0){ 
    //   $("nav").css({
    //     "top":"0",
    //     "transition":"all 0s"});}
    







    navbg();
    $(window).resize(function(){
      navbg();

    })
      $(".search-icon").click(function () {
    $(".form-container").toggle();
  })
  navbg();
  $(window).resize(function () {
    navbg();
  })
     function navbg(e){
      if($(window).width()>1140){
        $("nav").css("margin-top","30px").removeClass("bg-dark");      
        $(window).scroll(function(){
          // console.log(e)  
          if($(window).scrollTop()>0){
            $("nav").css("margin-top","0").addClass("bg-dark");
          }
          else{
            $("nav").css("margin-top","30px").removeClass("bg-dark");
          }
        })
      }
      else{
        $("nav").css("margin-top","0").addClass("bg-dark");
        
      }
    }
    
    


    
   
    $(".mydropdown-toggle").mouseover(function(){
      $("nav").css("overflow")
    });
    // $(".input-text").click(function(){
    //     $(this).css("border", "2px solid red ");
    // });
    // $('.timer').countTo();

    $(".card-button").click(function(){
      $(this).css("color", "#23527c");

    });
    
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin: 10,
      nav:false,
      smartSpeed:950,
      autoplay:true,
      
      dots:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          },
          1600:{
            items:5
          }
      }
  })
  
  if($(".fancybox").length) { 
		$(".fancybox").fancybox({
			openEffect  : 'fade',
            closeEffect : 'fade',
            helpers : {
				media : {}
			}
		});
	}

  $("#fact").appear(function(){
    $('.timer').countTo();
  });

  $('.slides').bxSlider({
    auto: true,
    mode:'fade',
    pagerCustom:'.images',
    nextText:[ '<span class="fa fa-caret-right"></span>' ],
  prevText:[ '<span class="fa fa-caret-left"></span>' ]
});




      




  

});
    