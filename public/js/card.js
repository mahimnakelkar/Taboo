function insertCard() {
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
	var backCard = document.createElement('div');
	backCard.setAttribute('class', 'card');

	frontCard.innerHTML = "Clues Here";
	front.appendChild(frontCard);

	backCard.innerHTML = "Input Box Here";
	front.appendChild(frontCard);


	back.appendChild(backCard);
	flip.appendChild(front);
	flip.appendChild(back);
	container.appendChild(flip);

	// Change this later to append to the container div for all cards instead of body
	document.body.appendChild(container);

}

