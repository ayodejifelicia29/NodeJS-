
// créer un fichier 02-exo.js => ce fichier contient une variable 
// un tableau qui s'appelle semaine qui contient les valeurs suivantes 

// ["lundi", "mardi", "mercredi "]

// ajotuer à la fin de la variable le mot "jeudi"
// pouvez transformer le tableau  ["lundi", "mardi", "mercredi ", "jeudi"]
// pouvez transformer le tableau  ["LUNDI", "MARDI", "MERCREDI ", "JEUDI"]
// afficher dans le terminal le tableau transformé

const semaine =["lundi", "mardi", "mercred"];
semaine.push ("jeudi")
console.log(semaine);
//clear MacOS

// solution1
console.log("solution 1") 
const semaineMajuscule =semaine.map(function (jour) {
	return jour.toUpperCase()
})
  console.log(semaineMajuscule);

  //solution 2

  console.log("solution 2") 
const resultat = [];
for(let jour of semaine){
    resultat.push( jour.toUpperCase());
}
console.log(resultat); 

/*
Autre solution JA
let semaine=["lundi", "mardi", "mercredi"];
console.log(semaine, " avant ajout");
semaine=[...semaine, "jeudi"]; // on préfère travailler sur une copie du tableau et ensuite l'affecter à la variable (qui doit donc être en let)
console.log(semaine, " après ajout");
const semaineToUppercase=semaine.map(jour=>jour.toUpperCase());
console.log(semaineToUppercase, " en majuscule");
*/
 
/*
Solution Cédric
const semaine = ["lundi", "mardi", "mercredi"];
console.log(semaine);
semaine.push("jeudi");
console.log(semaine);
for (let index in semaine) {
    semaine[index] = semaine[index].toUpperCase();
}
console.log(semaine);
*/
/*
Solution Faouzi 
const semaine = ["lundi", "mardi", "mercredi"];
semaine.push("jeudi");
let i = 0
semaine.forEach((item)=>{
    semaine[i++] = item.toUpperCase();
})
console.log(semaine);
*/