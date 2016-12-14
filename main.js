$('ul li').each(function(i){
    var t = $(this);
    setTimeout(function(){ t.addClass('animation'); }, (i+1) * 200);
});