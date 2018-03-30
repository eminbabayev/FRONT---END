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
      $("nav").css("overflo")
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
      nav:true,
      smartSpeed:950,
      autoplay:true,
      
      
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
  })

  $("#fact").appear(function(){
    $('.timer').countTo();
  });

  



























  
$(".bg-white").click(function(){
  $(".orderNum").css("color","#2fc42b");
})
var img_data=$(".comment-prof-boxes").find(".show").attr("href");

$(".comment-prof-boxes li").click(function(){
    var prof_data=$(this).attr("id");
    $(".profiles").find(".prof-show").removeClass("prof-show");
    $(this).addClass("prof-show");
    $(".comment-text").find(".showing").removeClass("showing");
    console.log($("[data-comment="+prof_data+"]"));
    $("[data-comment="+prof_data+"]").addClass("showing")
    
})

$(".next-comment").click(function(){
    var next_prof=$(".profiles").find(".prof-show").next();
    var prof_data=next_prof.attr("id");
        $(".profiles").find(".prof-show").removeClass("prof-show"); 
    $(".comment-text").find(".showing").removeClass("showing");
    if(prof_data!=undefined){
        $("[data-comment="+prof_data+"]").addClass("showing")
        next_prof.addClass("prof-show");
        
    }
    else{
        $(".comment-prof-text").eq(0).addClass("showing")
        $(".prof-box").eq(0).addClass("prof-show");
    }
})

$(".prev-comment").click(function(){
    var prev_prof=$(".profiles").find(".prof-show").prev();
    var prof_data=prev_prof.attr("id");
        $(".profiles").find(".prof-show").removeClass("prof-show"); 
    $(".comment-text").find(".showing").removeClass("showing");
    if(prof_data!=undefined){
        $("[data-comment="+prof_data+"]").addClass("showing")
        prev_prof.addClass("prof-show");
        
    }
    else{
        $(".comment-prof-text").eq($(".comment-prof-text").length-1).addClass("showing")
        $(".prof-box").eq($(".prof-box").length-1).addClass("prof-show");
    }
})



  

});
    