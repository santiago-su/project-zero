$(document).ready(function() {
  generateGameBoard();

  $('.box').each(function() {
    $(this).on('click', function() {
      turn = !turn
      counter++;
      if (turn) {
        var type = $(this).find('.x');
        type.removeClass('hidden');
        move($(this).data('num'), type.attr('class'));
        winner()
      } else {
        var type = $(this).find('.o');
        type.removeClass('hidden');
        move($(this).data('num'), type.attr('class'));
        winner();
      }
    })
  })
})
