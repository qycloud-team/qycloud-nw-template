$(function () {
    var gui = require('nw.gui');
    var win = gui.Window.get();
    win.on('minimize', function () {
        // Hide window
        this.hide();
    });

    $(window).focus(function () {
        console.log("focus");
        focusTitlebars(true);
    }).blur(function () {
        console.log("blur");
        focusTitlebars(false);
    }).resize(function () {
        updateContentStyle();
    });
    $(".fa.fa-times").click(closeWindow);
    $(".fa.fa-minus").click(function () {
        win.minimize();
    });


    console.log("window onload");
    focusTitlebars(true);
    updateContentStyle();

    win.show();


    function closeWindow() {
        window.close();
    }

    function focusTitlebars(focus) {
        // $('#top-titlebar, #bottom-titlebar').css('backgroundColor', focus ? "#3a3d3d" : "#7a7c7c")
    }

    function updateContentStyle() {
        var content = $("#content");
        if (!content.length) return false;

        var left = 0;
        var top = 0;
        var width = window.outerWidth;
        var height = window.outerHeight;

        var titlebar = $('#top-titlebar');
        if (titlebar.length) {
            height -= titlebar.outerHeight();
            top += titlebar.outerHeight();
        }
        titlebar = $("#bottom-titlebar");
        if (titlebar.length) {
            height -= titlebar.outerHeight();
        }

        content.css({
            position: 'absolute',
            left: left,
            top: top,
            width: width,
            height: height
        });
    }
});
