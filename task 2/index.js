$(window).scroll(function () { 
    if($(window).scrollTop()>100)
        $('#scrolltop').removeClass('hidden');
    else
        $('#scrolltop').addClass('hidden');
});

$('#scrolltop').click(function (e) { 
    $("html, body").animate({ scrollTop: 0 }, "slow");
});