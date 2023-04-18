// index.js => fichier principal (le pointn d'entrée dev votre application)
//en html => il faut 0BLIGATOIREMENT que le fichier d'entrée dans votre projet s'appelle index.htlm(Apache)

const express = require("express");
 // import la librairie express depuis le doisser node_modules

// dans le monde de nodejs => main.js => main.js/ serveur.js / aap.js
console.log("serveur");
//node index.js 

const serveur = express();
// avec le module http(natif de nodejs)
// serveur. on("request" ,function(request,reponse){
//         if(request.url === "/"){
//         reponse.write("bonjour les amis!");
//          reponse.end();
//} }) this is the same thing as the one undere they do the same thing (http and express)

// express 
	serveur.get ("/" ,function (request,reponse) { // route
		reponse.send ("bonjour les amis !");	
	})

  serveur.get("/produits" , (request,reponse)=> { //http://localhost:4002/produits
	 const p =[
		   {id : 1 , nom : "PS4"},
		   {id : 2 , nom : "PS5"},
	    ]
	  reponse.json(p);
   })
  serveur.listen("4002" ,()=> console.log("le serveur express est démarre"))
//node .(to get the file you are working on )
// node index.js
//http://localhost:4002 => 

