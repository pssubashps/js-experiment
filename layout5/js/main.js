$(document).ready(function () {
    var yoursSelectedArray = [];
    var theirsSelectedArray = [];
    var yoursLevelCompleted = [];
    var theirsLevelCompleted = [];
    var yoursColorClass = 'col-blue';
    var theirColorClass = 'col-green';
    // $(".col-white").click(function () {
    //     if ($(this).parent().hasClass('yours')) {
    //         $(this).addClass(yoursColorClass);
    //         yoursSelectedArray.push($(this).text());
    //     } else {
    //         $(this).addClass(theirColorClass);
    //         theirsSelectedArray.push($(this).text());
    //     }

    // });
     $(".go-btn").click(function(){
          $(location).attr('href', 'page2.html?y='+yoursSelectedArray.join(""));
     });

    $(".col-white").click(function () {
        

        if ($(this).parent().parent().data('firstparent') == 'yours') {
            if (isInArray($(this).data('level'), yoursLevelCompleted)) {
                return false;
            }
            yoursLevelCompleted.push($(this).data('level'));
            yoursSelectedArray.push($(this).text());
            console.log(yoursLevelCompleted);
        } else {
            if (isInArray($(this).data('level'), theirsLevelCompleted)) {
                return false;
            }
            theirsLevelCompleted.push($(this).data('level'));
            theirsSelectedArray.push($(this).text());
        }
        $(this).css("background", "#E8E8E8");
    });

    function isInArray(value, array) {
        return array.indexOf(value) > -1;
    }
});