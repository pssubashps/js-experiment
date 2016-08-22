$(document).ready(function () {
    var imageUrl = 'assets/img/1-grey.png';
    var imageUrl1 = 'assets/img/1-grey.png';
    var imageUrl2 = 'assets/img/2-grey.png';
    var imageUrl3 = 'assets/img/3-grey.png';
    var imageUrl4 = 'assets/img/4-grey.png';

    var selectedArray = [];
    $('.letter-click').on("click", function () {
        //alert($(this).data('parent'));
        disableChilds($(this));
    });

    $('a').on("click", function () {
        if (typeof $(this).data('parent') === "undefined") {
            disableChilds($(this).parent());
        } else {
            disableChilds($(this));
        }

    });
    //need to do foreach loop
    function disableChilds(clickedItem) {
        if (typeof clickedItem.data('parent') === "undefined") {
            return false;
        }

        dataParant = clickedItem.data('parent');
        var bg = clickedItem.css('background-image');
        len = clickedItem.data('parent').length;

        if (bg.indexOf("grey") > 0) {
            return false;
        }
        if (clickedItem.css('color') == '#b3b0b3') {
            return false;
        }
        if (len == 1) {
            firstLevelClick(clickedItem);
        }
        if (len == 3) {
            secondLevelClick(clickedItem);
        }
        if (len == 5) {
            thirdLevelClick(clickedItem);
        }
        if (len == 7) {

            fourthLevelClick(clickedItem);
        }
        $("#selected-pattern").text(selectedArray[selectedArray.length - 1]);
        if (selectedArray.length == 4) {
            if (confirm("Your selected pattern is " + selectedArray[selectedArray.length - 1] + " Do you want to continue ?")) {
                loadPatternSelectedPage();
            } else {
                location.reload();
            }
        }
        return;
    }

    function fourthLevelClick(clickedItem) {
        if (selectedArray.length > 3) {
            return false;
        }
        if (selectedArray.length != 3) {
            alert("Please select the parent");
            return false;
        }

        dataParant = clickedItem.data('parent');
        dataParantLength = dataParant.length;
        //  alert(dataParantLength);
        $("[data-parent]").each(function (index) {
            //    console.log(index + ": " + $(this).data('parent'));
            console.log(index + ": " + $(this).data('parent').substr(0, 7));
            if ($(this).data('parent').substr(0, 7) != dataParant) {
                l = $(this).data('parent').length;
                if (dataParantLength <= l) {
                    //     console.log("----" + index + ": " + $(this).data('parent'));

                    if (l == 1) {
                        imageUrl = imageUrl1;
                    } else if (l == 3) {
                        imageUrl = imageUrl2;
                    } else if (l == 5) {
                        imageUrl = imageUrl3;
                    } else if (l == 7) {
                        imageUrl = imageUrl4;
                    }
                    if (l == 7) {
                        $(this).children().css("color", '#b3b0b3');
                    } else {
                        $(this).css("background-image", 'url(' + imageUrl + ')');
                    }
                }


            }
            //console.log(index + ": " + $(this).data('parent'));
        });
        selectedArray[3] = dataParant;
    }
    function thirdLevelClick(clickedItem) {
        if (selectedArray.length > 2) {
            return false;
        }
        if (selectedArray.length != 2) {
            alert("Please select the parent");
            return false;
        }

        dataParant = clickedItem.data('parent');
        dataParantLength = dataParant.length;
        //  alert(dataParantLength);
        $("[data-parent]").each(function (index) {
            //    console.log(index + ": " + $(this).data('parent'));
            console.log(index + ": " + $(this).data('parent').substr(0, 5));
            if ($(this).data('parent').substr(0, 5) != dataParant) {
                l = $(this).data('parent').length;
                if (dataParantLength <= l) {
                    //     console.log("----" + index + ": " + $(this).data('parent'));

                    if (l == 1) {
                        imageUrl = imageUrl1;
                    } else if (l == 3) {
                        imageUrl = imageUrl2;
                    } else if (l == 5) {
                        imageUrl = imageUrl3;
                    } else if (l == 7) {
                        imageUrl = imageUrl4;
                    }
                    if (l == 7) {
                        $(this).children().css("color", '#b3b0b3');
                    } else {
                        $(this).css("background-image", 'url(' + imageUrl + ')');
                    }
                }


            }
            //console.log(index + ": " + $(this).data('parent'));
        });
        selectedArray[2] = dataParant;
    }
    function secondLevelClick(clickedItem) {
        if (selectedArray.length > 1) {
            return false;
        }
        if (selectedArray.length != 1) {
            alert("Please select the parent");
            return false;
        }

        dataParant = clickedItem.data('parent');
        dataParantLength = dataParant.length;
        //  alert(dataParantLength);
        $("[data-parent]").each(function (index) {
            //    console.log(index + ": " + $(this).data('parent'));
            console.log(index + ": " + $(this).data('parent').substr(0, 3));
            if ($(this).data('parent').substr(0, 3) != dataParant) {
                l = $(this).data('parent').length;
                if (dataParantLength <= l) {
                    //     console.log("----" + index + ": " + $(this).data('parent'));

                    if (l == 1) {
                        imageUrl = imageUrl1;
                    } else if (l == 3) {
                        imageUrl = imageUrl2;
                    } else if (l == 5) {
                        imageUrl = imageUrl3;
                    } else if (l == 7) {
                        imageUrl = imageUrl4;
                    }
                    if (l == 7) {
                        $(this).children().css("color", '#b3b0b3');
                    } else {
                        $(this).css("background-image", 'url(' + imageUrl + ')');
                    }
                }


            }
            //console.log(index + ": " + $(this).data('parent'));
        });
        selectedArray[1] = dataParant;
    }

    function firstLevelClick(clickedItem) {

        if (selectedArray.length > 0) {
            return false;
        }

        dataParant = clickedItem.data('parent');
        dataParantLength = dataParant.length;
        //  alert(dataParantLength);
        $("[data-parent]").each(function (index) {
            //    console.log(index + ": " + $(this).data('parent'));
            //    console.log(index + ": " + $(this).data('parent').substr(0, 1));
            if ($(this).data('parent').substr(0, 1) != dataParant) {
                l = $(this).data('parent').length;
                if (dataParantLength <= l) {
                    //     console.log("----" + index + ": " + $(this).data('parent'));

                    if (l == 1) {
                        imageUrl = imageUrl1;
                    } else if (l == 3) {
                        imageUrl = imageUrl2;
                    } else if (l == 5) {
                        imageUrl = imageUrl3;
                    } else if (l == 7) {
                        imageUrl = imageUrl4;
                    }
                    if (l == 7) {
                        $(this).children().css("color", '#b3b0b3');
                    } else {
                        $(this).css("background-image", 'url(' + imageUrl + ')');
                    }
                }


            }
            //console.log(index + ": " + $(this).data('parent'));
        });
        selectedArray[0] = dataParant;
    }

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

    function loadData(who, evt) {
        page = "template/" + selectedArray[3] + ".json";
        $.get(page, function (data) {
            var appendDataString = '';
            $.each(data[who].h1, function (index, value) {
                title = '<div class="head cf"><h2>' + value.title + '</h2></div>';
                var liAppendString = '  <ul class="unstyle-list list01">';
                 $.each(value.li, function (liIndex, liVal) {
                     liAppendString += ' <li><a href="#">'+liVal+'</a></li>'
                 });
                  liAppendString += ' </ul>';
               appendDataString += title;
               appendDataString += liAppendString;
            });
            
            $('#'+who+'_back').contents(':not(h1)').remove();
            $('#'+who+'_back').append(appendDataString);
        });
    }
});