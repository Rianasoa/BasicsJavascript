 let number;
function factorielle(number){
	let f = 1;
	number = prompt("De quel nombre tu veux calculer la factorielle ?");
	for(let i = 1; i<=number; i++){
		f = f * i;
	}
	console.log(`Le résultat est : ${f}`);
}
factorielle(number);