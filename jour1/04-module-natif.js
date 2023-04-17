// module.exports => exporter
//const {nom}= require("./nom-fichier.js")// extension du fichier est facultative

const{mulitiplication} =require ("./03-short")
const fs =require("fs") // fs => module gblobal et natif de nodejs
                        // ne pas mettre "./fs"
mulitiplication(10, 20);

//pas besoin de créer un fichier
//ce sont des fonctions/ traitement qui sont disponibles AVEC NOdeJs
// modules natifs 
// 30 modules => qui contiennent 50 fonctions 
// https://nodejs.org/dist/latest-v18.x/docs/api/fs.html

// https://nodejs.org/en/

// je veux créer un fichier 04-exemple.txt 
// dans ce fichier je veux écrire le texte "bonjour !!!"
//

// it's use to create your fille
fs.writeFile("04-exemple.txt" ,"bonjour!!!" ,'utf8' ,function(){
	console.log("le fichier est bien créé");
})

