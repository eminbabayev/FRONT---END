if($(".accordion-box").length){
    $(".accordion-box li").click(function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
        } else {
            $(".accordion-box li").removeClass("active");
            $(this).addClass("active")
            // $(this).find(".content").slideDown()
  
  
        }            
    });
  }
  