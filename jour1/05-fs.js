//const fs=require("fs")=> içmporter toutes les fonctions du module File System
//const{writeFile} =require ("fs"); // récupérer QUE la fonction writeFile

//https://nodejs.org/dist/latest-v18.x/docs/api/fs.html

const{writeFile} =require("node:fs"); // nouvelle manière d'appeller un module
writeFile("O5-text.js" ," console.log ('test')" ,"utf8" , () =>{
	console.log("fichier 05-text.js est créé");
});

