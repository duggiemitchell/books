$(window).load(function(){
    // var $container = $('.categoryContainer');
    var $container = $('.categoryContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    $('.categoryFilter a').click(function(){
        $('.categoryFilter .current').removeClass('current');
        $(this).addClass('current');
// Assigning anchor tags in filter section as value for filter key
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    });
});
