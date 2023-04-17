//en uilisant la librairie lodash créer un tableau contenu 10 valeurs 
// chaque valeur est un chiffre aléatoire entre 0 et 100   
const _= require("lodash");

 // solution lodash et sa méthode random
const r =[]
for (let i = 0 ; i< 10; i++) {
	r.push (_.random(0,100))	
}
console.log(r);

// solution sans libraire
const r2 =[];
for (let i = 0; i < 10; i++) {
	r2.push(Math.round(Math.random()*100))	
}
console.log(r2);

// ok
console.log(
	_.fill(Array(10),0)
	.map(el=>_.random(0,100))
);
// autre solution possible
console.log(Array.from(new Array(10), function() {return _.random(0,100)}));


const tab =new Set()
 while(tab.size < 10) {
	tab.add(_.random(0,100))	
 }
 console.log(tab);

 const tab2 =new Set()
 tab2.add(10)
 tab2.add(10)
 console.log(tab2);

 // http => créer des serveurs !! 
// express => couche via en glober le module http natif de nodejs 
// idéal pour créer de API 
// permet de créer très très facilement des serveurs http 

// await async => rappeler 
// fetch ()
// CJS module 
// require module.exports
// ES Module 
// npm init --yes