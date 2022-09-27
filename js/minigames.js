function RollDice(nFace) {
	document.getElementById('DiceOutput').value = Math.floor(Math.random() * (nFace)) + 1;
}


function chifoumi(yourSign) {
	var opponentSign = Math.floor(Math.random() * (3)) + 1;
	
	if(yourSign == opponentSign){
		console.log('égalité')
		egalite()
	}
	if(yourSign == 1){
		if(opponentSign == 2){
			console.log('vous avez perdu');
			perdu()
		}
		if(opponentSign == 3){
			console.log('vous avez gagné');
			gagne()
		}
	}
	if(yourSign == 2){
		if(opponentSign == 1){
			console.log('vous avez gagné');
			gagne()
		}
		if(opponentSign == 3){
			console.log('vous avez perdu');
			perdu()
		}
	}
	if(yourSign == 3){
		if(opponentSign == 1){
			console.log('vous avez perdu');
			perdu()
		}
		if(opponentSign == 2){
			console.log('vous avez gagné');
			gagne()
		}
	}
	
	document.getElementById('ChifoumiOutput').value = opponentSign;
}

function perdu(){
	document.getElementById('ResultatChifoumi').innerHTML = "Vous avez perdu !";
}
function gagne(){
	document.getElementById('ResultatChifoumi').innerHTML = "Vous avez gagné !";
}
function egalite(){
	document.getElementById('ResultatChifoumi').innerHTML = "Vous avez fait égalité !";
}