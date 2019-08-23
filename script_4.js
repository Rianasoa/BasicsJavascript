const entrepreneurs = [
 { first: 'Steve', last: 'Jobs', year: 1955 },
 { first: 'Oprah', last: 'Winfrey', year: 1954 },
 { first: 'Bill', last: 'Gates', year: 1955 },
 { first: 'Sheryl', last: 'Sandberg', year: 1969 },
 { first: 'Mark', last: 'Zuckerberg', year: 1984 },
 { first: 'Beyonce', last: 'Knowles', year: 1981 },
 { first: 'Jeff', last: 'Bezos', year: 1964 },
 { first: 'Diane', last: 'Hendricks', year: 1947 },
 { first: 'Elon', last: 'Musk', year: 1971 },
 { first: 'Marissa', last: 'Mayer', year: 1975 },
 { first: 'Walt', last: 'Disney', year: 1901 },
 { first: 'Larry', last: 'Page', year: 1973 },
 { first: 'Jack', last: 'Dorsey', year: 1976 },
 { first: 'Evan', last: 'Spiegel', year: 1990 },
 { first: 'Brian', last: 'Chesky', year: 1981 },
 { first: 'Travis', last: 'Kalanick', year: 1976 },
 { first: 'Marc', last: 'Andreessen', year: 1971 },
 { first: 'Peter', last: 'Thiel', year: 1967 }
];


console.log("liste les entrepreneurs qui sont nés dans les années 70");
let seventiesEntrepreneurs = []
entrepreneurs.forEach(function(element){
  if (element.year >= 1970 && element.year <= 1979){
  seventiesEntrepreneurs.push(element)}
});
console.log(seventiesEntrepreneurs);


console.log("les noms des entrepreneurs");
let entrepreneursNames = []
entrepreneurs.forEach(function(element){
  entrepreneursNames.push(element.first + " " + element.last)
});
console.log(entrepreneursNames);



console.log("âge aurait chaque inventeur aujourd'hui");
let entrepreneursAge = []
entrepreneurs.forEach(function(element){
  entrepreneursAge.push(2019 - element.year)
});
console.log(entrepreneursAge);



console.log("liste par ordre alphabetique");
   let tabb= [];
   for(let t in entrepreneurs)
   {
      tabb[t] = entrepreneurs[t].first;
   }
   console.log(tabb.sort());