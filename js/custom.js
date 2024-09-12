(function($) {
    "use strict";
    var NAY = {};
    $.fn.exists = function() {
        return this.length > 0;
    };

    /* ---------------------------------------------- /*
     * Pre load
    /* ---------------------------------------------- */
    NAY.PreLoad = function() {
        document.getElementById("loading").style.display = "none";
    }

    /* ---------------------------------------------- /*
     * Menu Toggle
    /* ---------------------------------------------- */
    NAY.MenuTogglerClose = function() {
        $(".toggler-menu").on('click', function() {
            $(this).toggleClass('open');
            $('.header-left').stop().toggleClass('menu-open menu-open-desk');
        });
        $('.header-left a').on('click', function() {
            var toggle = $('.toggler-menu').is(':visible');
            if (toggle) {
                $('.header-left').removeClass('menu-open');
                $('.toggler-menu').removeClass('open');
            }
        });
    }


    /*--------------------
        * Page Piling
    ----------------------*/
    NAY.PagePailing = function() {
        var id = [];
        var tooltips = [];
        var colors = [];
        $('.pp-section').each(function() {
            id.push(this.id);
            tooltips.push($(this).data("navigation-tooltip"));
            colors.push($(this).data("bg-color"));
        });
        if ($(".pp-main-section").exists()) {
            $('.pp-main-section').pagepiling({
                direction: 'vertical',
                menu: '#pp-menu',
                anchors: id,
                sectionsColor: colors,
                navigation: {
                    'position': 'right',
                    'tooltips': false
                },
                afterRender: function() {
                    $('#pp-menu').addClass('custom');
                },
                afterLoad: function(anchorLink, index) {
                    if (index > 1) {
                        $('#pp-menu').removeClass('custom');
                    } else {
                        $('#pp-menu').addClass('custom');
                    }
                }
            });
        }
    }

    /* ---------------------------------------------- /*
     * Demo
    /* ---------------------------------------------- */
    NAY.Demo = function() {
        $( "body" ).append( "<label class='color_switch'><i class='fas fa-moon'></i></label>" );
        $(".color_switch").click(function(){
            $(this).toggleClass('m-toggle-toggle');
            $('body').toggleClass('theme-light');
        });
    }

    /* ---------------------------------------------- /*
     * All Functions
    /* ---------------------------------------------- */
    // loadScript
    var _arr = {};

    function loadScript(scriptName, callback) {
        if (!_arr[scriptName]) {
            _arr[scriptName] = true;
            var body = document.getElementsByTagName('body')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = scriptName;
            script.onload = callback;
            body.appendChild(script);
        } else if (callback) {
            callback();
        }
    };

    // Window on Load
    $(window).on("load", function() {
        NAY.PreLoad();
        window.location.href = "index.html#home";
    });
    // Document on Ready
    $(document).on("ready", function() {
        NAY.PagePailing(),
        NAY.MenuTogglerClose(),
        NAY.Demo(),
        $('');
    });

    // Document on Scrool
    $(window).on("scroll", function() {
    });

    // Window on Resize
    $(window).on("resize", function() {});


})(jQuery);