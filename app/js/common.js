$(function(){

		$(".subnav>a").addClass('not_select')
         .first().removeClass('not_select').addClass('select');

         $(".subnav>a").click(function(){
                   $(this).removeClass("not_select").addClass('select')
                   .siblings().removeClass('select')
                   .addClass('not_select');

         }).mouseover(function(){
                   $(this).addClass('hover');
         }).mouseout(function(){
                   $(this).removeClass("hover");
         });

     // $(window).scroll(function(){
     //  // alert($(window).height())
     //  // alert($(window).scrollTop())

     //  var ht = $(window).scrollTop() - $(window).height()

     //  if(ht < 500){
     //    $(".subnav>a").addClass("hover")
     //      .siblings().removeClass("hover")
     //  }

     // })    
});

