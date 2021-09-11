
$(document).ready(function(){
  //menu
    $(window).scroll(function(){
       if(this.scrollY > 20 ){
        $(".navbar").addClass("sticky");
        //gotop btn
        $(".gotop").fadeIn();
        //chat 
        $(".chat").fadeIn();
       } else{
        $(".navbar").removeClass("sticky");  
        //gotop btn
        $(".gotop").fadeOut();
         //chat
        $(".chat").fadeOut();

       }     
    });
    //counter
    $(".num").counterUp({delay:10,time:1000});

    //top 
    $(".gotop").click(function(){scroll(0,0)});
    //button
    $('.menu-toggler').click(function(){
      $(this).toggleClass("active");
      $(".navbar-menu").toggleClass("active");
    });

   // image works
    $(".works").magnificPopup({
      delegate:'a',
      type: 'image',
      gallery:{enabled:true}
    });
});



