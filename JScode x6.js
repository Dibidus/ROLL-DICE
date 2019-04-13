function rollDice() {
	//target dice1 and dice2 and put them in local var
	const dice1 = document.getElementById('dice1');
	const dice2 = document.getElementById('dice2');
	const dice3 = document.getElementById('dice3');
	const dice4 = document.getElementById('dice4');
	const dice5 = document.getElementById('dice5');
	const dice6 = document.getElementById('dice6');
	//determinate value for dice1 and dice2
	//multiply by 6 for number 1to6!!!
	//add +1, to show number more then 0, up to 6
	const d1 = Math.floor(Math.random() * 6) + 1;
	const d2 = Math.floor(Math.random() * 6) + 1;
	const d3 = Math.floor(Math.random() * 6) + 1;
	const d4 = Math.floor(Math.random() * 6) + 1;
	const d5 = Math.floor(Math.random() * 6) + 1;
	const d6 = Math.floor(Math.random() * 6) + 1;
	//giving the value of random number to dice1 and dice2
	dice1.innerHTML = d1;
	dice2.innerHTML = d2;
	dice3.innerHTML = d3;
	dice4.innerHTML = d4;
	dice5.innerHTML = d5;
	dice6.innerHTML = d6;
}
