$(window).scroll(function(){
    if ($(document).scrollTop() > 45){
        $(".navigation-bar").css({'background-color':'white', 'box-shadow': '10px 10px 10px gray', 'transition': "0.5s"});
    }
    else{
        $(".navigation-bar").css({'background-color': 'rgba(87, 87, 87, 0.267)', 'box-shadow': 'none'});
    }
});

$('.menuBtn').click(function(){
  $('.unorderdNav').toggleClass('unorderdNavActive');
});

$('.anchor').click(function(){
    $('.unorderdNavActive').removeClass('unorderdNavActive');

});
$('.moreAbt').hide();


$('#abtLearnMore').hide();
$('.abtLearnMore').click(function(){
    $('.moreAbt').show(1000).css({'margin-top':'0'});
    $(this).hide();
    
$('#abtLearnMore').show();
});

$('#abtLearnMore').click(function(){
    $('.moreAbt').hide(1000);
    $(this).hide();
    $('.abtLearnMore').show();
});

$('.moreWork').hide();


$('#wrkLearnMore').hide();
$('.wrkLearnMore').click(function(){
    $('.moreWork').show(1000).css({'margin-top':'0'});
    $(this).hide();
    
$('#wrkLearnMore').show();
});

$('#wrkLearnMore').click(function(){
    $('.moreWork').hide(1000);
    $(this).hide();
    $('.wrkLearnMore').show();
});


$('.moreSkills').hide();


$('#sklLearnMore').hide();
$('.sklLearnMore').click(function(){
    $('.moreSkills').show(1000).css({'margin-top':'0'});
    $(this).hide();
    
$('#sklLearnMore').show();
});

$('#sklLearnMore').click(function(){
    $('.moreSkills').hide(1000);
    $(this).hide();
    $('.sklLearnMore').show();
});