// "Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"
//   // Utilisateur rentre un nombre (par ex 5)

let numberOfSteps = ""
numberOfSteps = Number(prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"))
let x = 1
let m = numberOfSteps
let r
let step = ""
while (x <= numberOfSteps) {
  r = " ".repeat(m)
  step += "#"
  x ++
  console.log(r + step);
  m -= 1
}