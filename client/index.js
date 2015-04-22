'use strict';
$(document).ready(init);

var source;
var target;

function init(){
  console.log('this is an init console log');
  $('#begin').click(startGame);
  $('.base').on('click', '.disc', selectDisc);
  $('.base').click(selectBase);
}

function startGame(){
  var userChoice = $('select').val();
  console.log(userChoice);
  // var disc = $('<div>');
  for(var i=1; i<= userChoice; i++){

    var width = i * 60;
    var $div = $('<div>');
    $div.attr('id', i);
    $div.addClass('disc');
    $div.css('width', + width + 'px');
    $div.css('height', '40px');
    $div.css('background-color', '#C1E0FF');
    $div.css('border', 'solid black 1px');
    $div.css('border-radius', '21px');
    $('#tower1').append($div);
  }
}

function selectDisc(){
source = $(this);
console.log('here i am');

}

function selectBase(){
  target = $(this);
  console.log(this + 'is selectBase function');
  moveDisc();
}


function moveDisc(){
  target.prepend(source);
}

// function setUpBoard(){
//   console.log('this is a console log');
//   var $disc = $('<div>');
//   $disc.addClass('discs1');
//   $('#tower1').append($disc);
// }
