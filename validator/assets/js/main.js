var Metronic = function () {
    var handleInstructorBanner = function () {

        if ($(".banner").length) {
            var wHeight = $(window).height();
            $(".banner .container").height(wHeight);
        };
    };
    var windowResize = function () {
        $(window).resize(function () {
            handleInstructorBanner();
        });
    };

    return {
        init: function () {
            handleInstructorBanner();
            windowResize();
        }
    };
}();