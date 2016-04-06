
$(function() {
  // $
  // multiple bools with a shared class //
  $('.read-book').booklet({
    // options
    width: '100%',
    height: 200,
    arrows: true,
    arrowsHide: true,
    next: '#next',
    previous: '#previous',
  });
  var readBook = $('.read-book').booklet(config);
  $('.readBook').click(function(e) {
    e.preventDefault();
    $(this).booklet();
  });

  $('#removeBook').click(function(e) {
    e.preventDefault();
    $('.readBook').booklet('Destroyed');
    display.text('Thanks for reading!');
  });
});
