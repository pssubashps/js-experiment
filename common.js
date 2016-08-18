 $(document).ready(function (){
   
       /* $('.flip').click(function(){
        $(this).find('.card').addClass('flipped').mouseleave(function(){
            $(this).removeClass('flipped');
        });
        return false;
    });*/

        $("#1").click(function(){
        	$('.card').toggleClass('flipped');
        	$('.face').html($(this).val());
        });
         $("#2").click(function(){
        	$('.card').toggleClass('flipped');
        	$('.face').html($(this).val());
        });
          $("#3").click(function(){
        	$('.card').toggleClass('flipped');
        	$('.face').html($(this).val());
        });

  } );