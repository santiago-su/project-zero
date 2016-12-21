$(document).ready(function() {
  generateGameBoard();
  $('.start-buttons').hide();
  $('.start-buttons').fadeIn(2000);
  $('#start-multiplayer').on('click', function() {
    $('#first-page').addClass('animated rotateOutUpLeft').one(
      'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $('#first-page').addClass('hidden');
        $('#game-board').fadeIn(2000).css({ display: 'flex' });
      }
    );
  })
})
