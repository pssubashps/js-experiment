$(document).ready(function () {
    var pageData = [];
    var E_S_T_J = {
        "their": {
            "h1": [
                {
                    "li": [
                        "Seeking to bring order to the world",
                        "Being goal-oriented and decisive",
                        "Testing the logic of a system through challenge and critique",
                        "Taking charge"
                    ],
                    "title": "What they like"
                },
                {
                    "li": [
                        "An organised and effcient process; if you spend too long exploring possibilities they may get frustrated",
                        "Accuracy - so make sure your facts are correct and don't be too vague or conceptual"
                    ],
                    "title": "What they want"
                },
                {
                    "li": [
                        "Structure and order in the workplace",
                        "A drive for efficient processes, which enables you to make cost savings and quality improvements"
                    ],
                    "title": "Strengths"
                },
                {
                    "li": [
                        "Insensitivity to people issues – remember to factor them in",
                        "A lack of tolerance of people who are  less organised and efficient than you – try to value their flexibility and spontaneity"
                    ],
                    "title": "Blind spots"
                }
            ]
        },
        "yours": {
            "h1": [
                {
                    "li": [
                        "Seeking to bring order to the world",
                        "Being goal-oriented and decisive",
                        "Testing the logic of a system through challenge and critique",
                        "Taking charge"
                    ],
                    "title": "What you like"
                },
                {
                    "li": [
                        "Organisation and planning for every activity",
                        "You may spot mistakes others may overlook"
                    ],
                    "title": "What you give"
                }, {
                    "li": [
                        "Working with you efficiently and telling you what is working and what  is not",
                        "Providing clarity about plans,  organisation and structure"
                    ],
                    "title": "Strengths"
                },
                {
                    "li": [
                        "Frustration with people who spend  a lot of time exploring possibilities or options",
                        "Impatience or an impersonal manner –  so don’t take that personally"
                    ],
                    "title": "Blind spots"
                }
            ]
        }
    };
    pageData['E_S_T_J'] = E_S_T_J;
    var imageUrl = 'assets/img/1-grey.png';
    var imageUrl1 = 'assets/img/1-grey.png';
    var imageUrl2 = 'assets/img/2-grey.png';
    var imageUrl3 = 'assets/img/3-grey.png';
    var imageUrl4 = 'assets/img/4-grey.png';

    var selectedArray = [];
    $('.letter-click').on("click", function () {
        //alert($(this).data('parent'));
        $(this).addClass('css3-animate');
        disableChilds($(this));
    });

    $('a').on("click", function () {
        if (typeof $(this).data('parent') === "undefined") {
            $(this).parent().addClass('css3-animate');
            disableChilds($(this).parent());
        } else {
            $(this).addClass('css3-animate');
            disableChilds($(this));
        }

    });
      // Pattern selected page handlers
    function loadPatternSelectedPage() {
        $.get('template/pageload.html', function (data) {
            $("#page_container").html(data);
        });
    }
    $('body').on("click", "#their", function () {
        loadData("their", $(this));
        $('.card').toggleClass('flipped');
    });

    $('body').on("click", "#yours", function () {
        loadData("yours", $(this));
        $('.card2').toggleClass('flipped');
    });
    $('body').on("click", ".head", function () {
        // alert("test");
        console.log($(this).children(":nth-child(2)"));
        $("ul").slideUp('slow', 'swing');
        $(this).next("ul").slideToggle('slow', 'swing');
    });
    function loadData(who, evt) {
        qParams = getUrlVars();
        console.log(qParams['p']);
      //  page = "template/" + selectedArray[3] + ".txt";
        data = pageData[qParams['p']];
        var appendDataString = '';
        $.each(data[who].h1, function (index, value) {
            title = '<div class="head cf"><h2>' + value.title + '</h2></div>';
            var liAppendString = '  <ul class="unstyle-list list01" style="display:none;">';
            $.each(value.li, function (liIndex, liVal) {
                liAppendString += ' <li><a href="#">' + liVal + '</a></li>'
            });
            liAppendString += ' </ul>';
            appendDataString += title;
            appendDataString += liAppendString;
        });

        $('#' + who + '_back').contents(':not(h1)').remove();
        $('#' + who + '_back').append(appendDataString);
    }
    function getUrlVars() {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    }

});