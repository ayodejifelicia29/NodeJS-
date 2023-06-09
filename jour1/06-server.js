const http =require("http");

//Permet  de creer un serveur
//https://nodejs.org/dist/latest-v18.x/docs/api/http.html
// créer un serveur http

const serveur = http.createServer()

// déterminer qu'est ce qu'il doit répondre en fonction des requêtes que l'on va réaliser

// document.querySelector("div").addEventListener("click" , function (){})

serveur.on ("request", function (request, response) {
	// dans le callback vous allez stocker les différentezs réponses du serveur
	if (request.url === "/") {
		response.write("bonjour les amis");
		response.end()	
	}
	if (request.url === "/contact") {
		const html = `<input type= 'text' placeholder=votre email>`
		response.write(html);
		response.end()	
	}
	if (request.url === "/contact-2") {
		// d'abord en tête
		const html = `<input type= 'text' placeholder=votre email>`
		response.writeHead(200, {"Content-type" : "text/html; charest=utf-8"})// en tête http => consigne données par le serveur au client sur comment traiter la réponse <
		// puis le body
		response.write(html); // body de la réponse (affiché dans l'écran)
      // ce n'est pas <head></head> réponse http
		response.end()	// réponse est finie MAIS le serveur reste à l'écoute pour une future requête
	}

	if (request.url ==="/client.json") {
		const clients= [
			{id:1, nom: "Alain" ,age:20},
			{id:2, nom: "Céline" ,age:32}
		]
		response.writeHead(200, {"Content-type" : "application/json"})
		response.write (JSON.stringify(clients));
		response.end()
	}
});
serveur.listen(4000, "localhost");
// node 06-server.js Enter => le terminal est bloqué => attend des requêtes
//http://localhost:4000
////http://localhost:4000