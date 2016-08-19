$(document).ready(function(){
    $('.letter-click').on("click",function(){
        alert($(this).data('parent'));
        disableChilds($(this));
    });

    $('a').on("click",function(){
        alert($(this).data('parent'));
    });
    //need to do foreach loop
    function disableChilds(clickedItem) {
        dataParant = clickedItem.data('parent');
        alert(dataParant);
        if(dataParant == 'E' || dataParant == 'I') {
         //   $('.letter-click').not('[data-parent^="'+dataParant+'"]').hide();
         imageUrl = 'assets/img/i-grey.png';
           $ ('[data-parent="'+dataParant+'"]').css("background-image", 'url(' + imageUrl + ')');
         //   $("a:not([rel=facebox],[href^=mailto])");
        }
    }
});
