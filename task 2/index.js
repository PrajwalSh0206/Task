$(window).scroll(function () { 
    if($(window).scrollTop()>100)
        $('#scrolltop').removeClass('hidden');
    else
        $('#scrolltop').addClass('hidden');
});

$('#scrolltop').click(function (e) { 
    $("html, body").animate({ scrollTop: 0 }, "slow");
});

$('#hamburger').click(function(e){
    $('#sidebar').removeClass('-translate-x-full').addClass('translate-x-0 ')
})

$(document).mouseup(function(e) 
{
    if (!$('#sidebar').is(e.target) && $('#sidebar').has(e.target).length === 0) 
    {
        $('#sidebar').removeClass('translate-x-0').addClass('-translate-x-full ')
    }
})