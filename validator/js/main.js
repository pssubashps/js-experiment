$(document).ready(function() {
    $('.letter-click').on("click", function() {
        //alert($(this).data('parent'));
        disableChilds($(this));
    });

    $('a').on("click", function() {
        //alert($(this).data('parent'));
    });
    //need to do foreach loop
    function disableChilds(clickedItem) {
        imageUrl = 'assets/img/1-grey.png';
        imageUrl1 = 'assets/img/1-grey.png';
        imageUrl2 = 'assets/img/2-grey.png';
        imageUrl3 = 'assets/img/3-grey.png';
        imageUrl4 = 'assets/img/4-grey.png';
        dataParant = clickedItem.data('parent');
       // alert(dataParant);
        $("[data-parent]").each(function(index) {
             console.log(index + ": " + $(this).data('parent'));
            console.log(index + ": " + $(this).data('parent').substr(0,1));
            if($(this).data('parent').substr(0,1) != dataParant) {
                console.log("----"+index + ": " + $(this).data('parent'));
                l = $(this).data('parent').length;
                if( l == 1) {
                    imageUrl = imageUrl1;
                }else if(l == 3) {
                     imageUrl = imageUrl2;
                }else if(l == 5) {
                     imageUrl = imageUrl3;
                }else if(l == 7) {
                     imageUrl = imageUrl4;
                }
                $(this).css("background-image", 'url(' + imageUrl + ')');
            }
            //console.log(index + ": " + $(this).data('parent'));
        });
        if (dataParant == 'E' || dataParant == 'I') {
            //   $('.letter-click').not('[data-parent^="'+dataParant+'"]').hide();
            
            //$ ('[data-parent="'+dataParant+'"]').css("background-image", 'url(' + imageUrl + ')');
            //   $("a:not([rel=facebox],[href^=mailto])");
        }
    }
});