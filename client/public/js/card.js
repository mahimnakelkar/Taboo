function insertCard(color, clues) {
	var container = document.createElement('div');
	container.setAttribute('class', 'flip-container');

	var flip = document.createElement('div');
	flip.setAttribute('class', 'flipper');

	var front = document.createElement('div');
	front.setAttribute('class', 'front');
	var back = document.createElement('div');
	back.setAttribute('class', 'back');

	var frontCard = document.createElement('div');
	frontCard.setAttribute('class', 'card');
	frontCard.style.backgroundColor = color;

	var backCard = document.createElement('div');
	backCard.setAttribute('class', 'card');
	backCard.style.backgroundColor = color;

	for(var i = 0; i < clues.length; i++) {
		var clue = document.createElement('div');
		clue.setAttribute('class','clue');
		clue.innerHTML = clues[i];
		clue.style.lineHeight = 220/clues.length + 'px';
		frontCard.appendChild(clue);
	}
	front.appendChild(frontCard);
	

	var input = document.createElement('div');
	input.innerHTML = "<center> <input type = 'text' class='answerInput'/> </center>";
	input.style.lineHeight = '220px';
	backCard.appendChild(input);
	back.appendChild(backCard);

	flip.appendChild(front);
	flip.appendChild(back);


	container.appendChild(flip);

	// Change this later to append to the container div for all cards instead of body
	document.body.appendChild(container);

}

