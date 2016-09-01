$(document).ready(function () {
    var yoursSelectedArray = [];
    var theirsSelectedArray = [];
    var yoursColorClass = 'col-blue';
    var theirColorClass = 'col-green';
    $(".col-white").click(function () {
        if ($(this).parent().hasClass('yours')) {
            $(this).addClass(yoursColorClass);
            yoursSelectedArray.push($(this).text());
        } else {
            $(this).addClass(theirColorClass);
            theirsSelectedArray.push($(this).text());
        }

    });
    $(".go-btn").click(function(){
         $(location).attr('href', 'page2.html?y='+yoursSelectedArray.join(""));
    });
});