function rollDice() {
	//target dice1 and dice2 and put them in local var
	const dice1 = document.getElementById('dice1');
	const dice2 = document.getElementById('dice2');
	//target status and put in local var
	const status = document.getElementById('status');
	//determinate value for dice1 and dice2
	//multiply by 6 for number 1to6!!!
	//add +1, to show number more then 0, up to 6
	const d1 = Math.floor(Math.random() * 6) + 1;
	const d2 = Math.floor(Math.random() * 6) + 1;
	const diceTotal = d1 + d2;
	//giving the value of random number to dice1 and dice2
	dice1.innerHTML = d1;
	dice2.innerHTML = d2;
	//value of status, showing under the Roll Dice
	status.innerHTML = 'You Rolled ' + diceTotal + '.';
	if (d1 === d2) {
		status.innerHTML += ' DOUBLE! You get a free turn!!';
	}
}

function animateClock (dice1) {
	dice1.className = 'turn';
	setTimeout (function() {
		dice1.className = '555';
	}, 700);
}