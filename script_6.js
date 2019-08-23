let proteine = [
{
	"Sérine": ["UCU","UCC","UCA","UCG","AGU","AGC"],
	"Proline": ["CCU","CCC","CCA","CCG"],
	"Leucine": ["UUA","UUG"],
	"Phenylaline": ["UUU","UUC"],
	"Arginine": ["CGU","CGC","CGA","CGG","AGA","AGG"],
	"Tyrosine": ["UAU","UAC"]
}
	
];

let arn = "CCGUCGUUGCGCUACAGC";

let arn1 = "CCUCGCCGGUACUUCUCG";

let newValue = "";
for(let i = 0; i<arn.length;i+=3){
	newValue += arn.substr(i,3) + '-';
}

let result = "";

proteine.map(p => {
	newValue.split('-').map(s => {
		for(let key in p){
			if(p[key].includes(s)){
				result += key + '-';
			}
		}
	})
})

let newValue2 = "";
for(let i = 0; i<arn1.length;i+=3){
	newValue2 += arn1.substr(i,3) + '-';
}

let result1 = "";

proteine.map(p => {
	newValue2.split('-').map(s => {
		for(let key in p){
			if(p[key].includes(s)){
				result1 += key + '-';
			}
		}
	})
})
console.log(`Voici la transcription de l'ARN ${arn} : ${result}`);
console.log(`Voici la transcription de l'ARN ${arn1} : ${result1}`);