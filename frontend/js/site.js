$(document).ready(function(){
    menu = $('li a').not('.exclude');
    menu.click(function(e){
        $('.content').fadeOut('fast').load($(this).attr('href'));
        $('.content').fadeIn();
        return false;
    });
});
