//cas pratique créer le fichier 07-exo.js 

// ce fichier contient un serveur qui réponse aux requêtes suivantes 

// "/"  => retourner du html récupérer le contenu du ficheir  07-exemple.html
/* fs.readFile()
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>exo 7</p>
</body>
</html>
*/ 

// si vous appeler l'adresse /cocktails.json 
// [{id : 1 , nom : "margarita" }, {id : 2 , nom : "Vodka citron"}] ;(en format json )

// le serveur écoute sur le port 4001


const { readFile } = require("node:fs")
const { createServer } = require("node:http")
const serveur = createServer();
serveur.on("request", function(request, reponse){
    if(request.url === "/"){
        readFile("07-exemple.html" , "utf-8", function(err, fichier){
            if(err) return console.log(err)
            reponse.writeHead(200, {"Content-type" : "text/html; charset=uft-8"})
            reponse.write(fichier)
            reponse.end()
        })
    }
    if(request.url === "/cocktails.json"){
        readFile("07-data.json" , "utf-8", function(err, fichier){
            if(err) return console.log(err)
            reponse.writeHead(200, {"Content-type" : "application/json"})
            reponse.write(fichier)
            reponse.end()
        })
    }
} )
serveur.listen("4001", "localhost")