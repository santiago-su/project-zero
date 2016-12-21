var turn = false;

var matrix = [0,1,2,
              3,4,5,
              6,7,8];

var answers = Array(9);
var counter = 0;

var rows = function(player, row, matrixLength) {
  var win = [];
  for (var i = row - 1; i < (matrixLength * row); i++) {
    win.push(answers[i] === player);
  }
  return win.every(function(a) { return !!a });
}

var columns = function(player, column, matrixLength) {
  var win = [];
  for (var i = column - 1; i < answers.length; i += matrixLength) {
    win.push(answers[i] === player);
  }
  return win.every(function(a) { return !!a });
}

var forwardDiagonal = function(player, matrixLength) {
  var win = [];
  for (var i = 0; i < answers.length; i += (matrixLength + 1)) {
    win.push(answers[i] === player);
  }
  return win.every(function(a) { return !!a });
}

var backwardsDiagonal = function(player, matrixLength) {
  var win = [];
  for (var i = matrixLength - 1; i < answers.length - (matrixLength - 1); i += (matrixLength - 1)) {
    win.push(answers[i] === player);
  }
  return win.every(function(a) { return !!a });
}

var checkXwin = function() {
  return rows('x', 1, 3) || rows('x', 2, 3) || rows('x', 3, 4) ||
    columns('x', 1, 3) || columns ('x', 2, 3) || columns('x',3 ,3) ||
    forwardDiagonal('x', 3) || backwardsDiagonal('x', 3);
}

var checkOwin = function() {
  return rows('o', 1, 3) || rows('o', 2, 3) || rows('o', 3, 4) ||
    columns('o', 1, 3) || columns ('o', 2, 3) || columns('o',3 ,3) ||
    forwardDiagonal('o', 3) || backwardsDiagonal('o', 3);
}

var winner = function() {
  if (checkXwin()) {
    alert('X won');
    resetBoard();
  } else if (checkOwin()) {
    alert('O won')
    resetBoard();
  } else {
    if (counter > 6) {
      alert('Draw')
      resetBoard();
    }
  }
}

var generateGameBoard = function() {
  for(var i = 0; i < 3; i++) {
    $('#game-board').append('<div class="box" data-num="' + i + '" id="box-' +
      (i+1) + '"><img class="o" src=' + '"./images/o.svg"><img class="x" src="./images/x.svg"></div>')
  }
  for(var i = 3; i < 6; i++) {
    $('#game-board').append('<div class="box" data-num="' + i + '" id="box-' +
      (i+1) + '"><img class="o" src=' + '"./images/o.svg"><img class="x" src="./images/x.svg"></div>')
  }
  for(var i = 6; i < 9; i++) {
    $('#game-board').append('<div class="box" data-num="' + i + '" id="box-' +
      (i+1) + '"><img class="o" src=' + '"./images/o.svg"><img class="x" src="./images/x.svg"></div>')
  }
  $('.x').addClass('hidden');
  $('.o').addClass('hidden');

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
}

var resetBoard = function() {
  $('#game-board').html('');
  answers = Array(9);
  generateGameBoard();
  counter = 0;
  turn = false;
}

var move = function(dataNum, type) {
  answers.splice(dataNum, 1, type);
}
