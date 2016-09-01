$(document).ready(function () {
    var queryParams = [];

    $("li").click(function () {
        $('.popup').show();
        $('.popup').addClass('animated flipInX');
        removeInAnimationClass();
    });
    $(".close-btn").click(function () {
        $('.popup').addClass('animated flipOutX');
        removeOutAnimationClass();
        
    });
    function getUrlVars() {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1].replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, ' ');
        }
        return vars;
    }
    function removeInAnimationClass() {
        $('.popup').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $('.popup').removeClass('animated flipInX');
        });
    }
    function removeOutAnimationClass() {
        $('.popup').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $('.popup').removeClass('animated flipOutX');
            $('.popup').hide(); 
        });
    }
    function init() {
        queryParams = getUrlVars();
        $(".left-panel h2").text("Your Type : " + queryParams.y.split("").join("-"));
        $(".right-panel h2").text("Their Type : " + queryParams.t.split("").join("-"));
        console.log(queryParams);
    }
    init();
});