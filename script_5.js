const books = [
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

function isRented(){
  for(let indexBooks in books){
      if(books[indexBooks]['rented'] > 1){
      console.log("Tous les livres ont été au moins empruntés une fois");
    }
  }
}
isRented();

//Le livre le plus emprunté
let maxRented = 0;

function isMax(){
  for(let index in books){
    if(maxRented <= books[index].rented){
      maxRented = books[index].rented;
      var bookMaxRented = books[index];
    }
  }
  console.log(`Le livre le plus emprunté est : ${bookMaxRented.title}`);
}
isMax();

//le moins emprunté
function isMin(){
  for(let index in books){
    if(maxRented >= books[index].rented){
      maxRented = books[index].rented;
      var bookMinRented = books[index];
    }
  }
  console.log(`Le livre le plus moins est : ${bookMinRented.title}`);
}
isMin();

//livre avec ID: 873495

function searchById(){
  for(let index in books)
    if(books[index].id === 873495){
      console.log(`Le livre avec l'ID: 873495 est :  ${books[index].title}`);
    }
}
searchById();

console.log(books.length);
function deleteById(){
      let del = books.findIndex(k => k.id === 133712);
      books.splice(del,1);
      console.log("Le livre avec cet ID 133712 a été supprimé");

    console.log(books);
    
}
deleteById();

function orderByAlpha(){
  console.log(books.sort((a, b) => (a['title'] || "").toString().localeCompare((b['title'] || "").toString())));

}
orderByAlpha();