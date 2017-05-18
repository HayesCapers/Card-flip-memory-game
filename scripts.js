
$(document).ready(function(){

	var cards = [
		'<img src="images/monsters-01.png">',
		'<img src="images/monsters-02.png">',
		'<img src="images/monsters-03.png">',
		'<img src="images/monsters-04.png">'
	];

	var gridSize = 8;
	var memoryGameHTML = '';

	for (let i = 0; i < gridSize; i++){
		if (i < 2){
			card = cards[0];
		}else if (i < 4){
			card = cards[1];
		}else if (i < 6){
			card = cards[2];
		}else{
			card = cards[3];
		}

		memoryGameHTML += '<div class="card col-sm-3">';
			memoryGameHTML += '<div class="card-holder">';
				memoryGameHTML += `<div class="card-front">${card}</div>`;
				memoryGameHTML += `<div class="card-back"></div>`;
			memoryGameHTML += `</div>`;
		memoryGameHTML += `</div>`;
	}
	$('.mg-contents').html(memoryGameHTML);

	$('.card-holder').click(function(){
		$(this).toggleClass('flip');

		// user has flipped card, if there is another flipped over see
		// if they match. Otherwise, do nothing
		var cardsUp = $('.flip');
		if (cardsUp.length % 2 == 0){
			var card1 = cardsUp[0].children[0].children[0].src;
			var card2 = cardsUp[1].children[0].children[0].src;

			// var cardUpImages = cardsUp.find('.card-front img');
			// fancy pants way^
			if (card1 == card2){

			}else{
				// they are not the same. flip them back over
				setTimeout(function(){
					cardsUp.removeClass('flip');
				},2000);
			}
		}
	})

});