
let n;
n =  prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
console.log(`Tu as choisi ${n} étages. Voici votre pyramide `)
function pyramid(n) {
 for(let i=1; i<= n; i++){
   let blank = ' '.repeat(n-i);
   let full = '#'.repeat(i)
   console.log(blank + full);
 }
}
pyramid(n);