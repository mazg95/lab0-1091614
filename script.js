function start(){
    var nav_bar = $(".nav")
    var fns =  [say_hi,change_bg, change_color, change_letter, change_font_size, set_to_default] 
    var i = 0;
    console.log(fns);
    fns.forEach(function(fn){
        i += 1;
        var btn = $("<li></li>").append($("<a></a>", {
            text: 'Change ' + i,
            click: fn
        }));
        nav_bar.append(btn);
    });
}

function say_hi(){
    var alert = document.querySelector(".div-alerts > row > alert ")
    if(alert.)
}

function change_letter(){

}

function change_bg(){

}

function change_color(){

}

function change_font_size(){

}

function set_to_default(){

}
/*
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.inner').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.inner').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.inner').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}
*/
$(document).ready(start);