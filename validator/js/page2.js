$(document).ready(function () {
    var pageData = [];
    var ESTJ = {"their":{"h1":[{"li":["Seeking to bring order to the world","Being goal-oriented and decisive","Testing the logic of a system through challenge and critique","Taking charge"],"title":"What they like"},{"li":["An organised and effcient process; if you spend too long exploring possibilities they may get frustrated","Accuracy - so make sure your facts are correct and don't be too vague or conceptual"],"title":"What they want"},{"li":["Structure and order in the workplace","A drive for efficient processes, which enables you to make cost savings and quality improvements"],"title":"Strengths"},{"li":["Insensitivity to people issues – remember to factor them in","A lack of tolerance of people who are  less organised and efficient than you – try to value their flexibility and spontaneity"],"title":"Blind spots"}]},"yours":{"h1":[{"li":["Seeking to bring order to the world","Being goal-oriented and decisive","Testing the logic of a system through challenge and critique","Taking charge"],"title":"What you like"},{"li":["Organisation and planning for every activity","You may spot mistakes others may overlook"],"title":"What you give"},{"li":["Working with you efficiently and telling you what is working and what  is not","Providing clarity about plans,  organisation and structure"],"title":"Strengths"},{"li":["Frustration with people who spend  a lot of time exploring possibilities or options","Impatience or an impersonal manner –  so don’t take that personally"],"title":"Blind spots"}]}    };
    pageData['ESTJ'] = ESTJ;


    // Pattern selected page handlers

    $('body').on("click", "input[name='optradio']", function () {
        checkedItem = $("input[name='optradio']:checked").val();
        loadData(checkedItem, 0);

    });


    $('body').on("click", ".link01", function () {
        checkedItem = $("input[name='optradio']:checked").val();
        loadData(checkedItem, 0);
        $('.link04').css('background','#818285');
        $('.link02').css('background','#818285');
        $('.link03').css('background','#818285');
        actOnLinkClick($(this));

    });
    $('body').on("click", ".link02", function () {
        checkedItem = $("input[name='optradio']:checked").val();
        loadData(checkedItem, 1);
        $('.link01').css('background','#818285');
        $('.link03').css('background','#818285');
        $('.link04').css('background','#818285');
        actOnLinkClick($(this));

    });
    $('body').on("click", ".link03", function () {
        checkedItem = $("input[name='optradio']:checked").val();
        loadData(checkedItem, 2);
        $('.link01').css('background','#818285');
        $('.link02').css('background','#818285');
        $('.link04').css('background','#818285');
        actOnLinkClick($(this));

    });
    $('body').on("click", ".link04", function () {

        checkedItem = $("input[name='optradio']:checked").val();
        loadData(checkedItem, 3);
        $('.link01').css('background','#818285');
        $('.link02').css('background','#818285');
        $('.link03').css('background','#818285');
        actOnLinkClick($(this));

    });
    function actOnLinkClick(clickedLink){
        clickedLink.css('background','#5fa4d9');
    }
    function loadData(who, heading) {
        console.log(who);
        qParams = getUrlVars();
        console.log(qParams['p']);
        //  page = "template/" + selectedArray[3] + ".txt";
        data = pageData[qParams['p']];
        dataLetter = qParams['p'].split("");
        var appendDataString = '<h2>'+$("input[name='optradio']:checked").data('text')+' <span class="color1">'+dataLetter[0]+'</span><span class="color2">'+dataLetter[1]+'</span><span class="color2">'+dataLetter[2]+'</span><span class="color3">'+dataLetter[3]+'</span></h2>';

        var liAppendString = '  <ul class="unstyle-list list02" >';
        $.each(data[who].h1[heading].li, function (liIndex, liVal) {
            liAppendString += ' <li><a href="#">' + liVal + '</a></li>'
        });
        liAppendString += ' </ul>';
        // $('#' + who + '_back').contents(':not(h1)').remove();
        $('.inner-contents').html(appendDataString+liAppendString);
        $('.inner-contents').addClass('animated rotateIn');
        removeAnimationClass();
    }
    $('.inner-contents').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $('.inner-contents').removeClass('animated rotateIn');
    });
    function removeAnimationClass() {
        $('.inner-contents').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $('.inner-contents').removeClass('animated rotateIn');
        });
    }
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
    function init() {
        checkedItem = $("input[name='optradio']:checked").val();
        loadData(checkedItem, 0);
    }
    init();
});