// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require best_in_place
//= require jquery-ui
//= require rails-ujs
//= require popper
//= require cocoon
//= require bootstrap-sprockets
//= require rails-ujs
//= require turbolinks
//= require owl.carousel
//= require ckeditor/init
//= require ckeditor/config
//= require ckeditor/plugins/youtube/plugin
//= require_tree .

$(document).on('turbolinks:load', function() {

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});

$(document).on('turbolinks:load', function() {
    Turbolinks.clearCache();
    $('.owl-carousel').owlCarousel({
        loop:true,
        items:1,
        margin:10,
        autoplay: true,
        dots: true
    });
});
