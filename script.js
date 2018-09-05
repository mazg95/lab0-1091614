function start(){
    var nav_bar = $(".nav")
    var fns =  [say_hi,change_bg, change_color, change_letter, change_font_size] 
    var tags = ['Alert Fun', 'Change BG' ,'Change Color', 'Change Font', 'Change Font Size', ]
    var i = 0;
    console.log(fns);
    fns.forEach(function(fn){
        var btn = $("<li></li>").append($("<a></a>", {
            text: tags[i++],
            click: fn
        }));
        nav_bar.append(btn);
    });
}

function say_hi(){
    var alert = $(".div-alerts > .row > .alert ");
    changeClassElement(alert, 'hide');
    
}

function change_letter(){
    var container = $('body');
    changeClassElement(container, 'star-wars');
}

function change_bg(){
    var container = $('.site-wrapper');
    changeClassElement(container, 'expanded');
}

function change_color(){
    var container = $('body');
    changeClassElement(container, 'gold');
}

function change_font_size(){
    var element = $('body');
    changeClassElement(element, 'bf');
}

function changeClassElement(el, c){
    if(el.hasClass(c)){
        el.removeClass(c);
    }
    else{
        el.addClass(c);
    }
}


$(document).ready(start);