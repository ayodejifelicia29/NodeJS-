// vous venez de créer 2 fonction  middleware

const { isValidObjectId } = require("mongoose");
const {schemaArticleJoi} =require ("./verif")

function traitement1(request,reponse,next) {
	console.log("je réalise le traitement 1");
	next();
}

function traitement2(request,reponse,next) {
	// une fonction middleware prendre TOUJOURS 3 paramètres

	//request => intercepter la requete
	//reponse => retourner une réponse si la traitement est faux
	//next => permet de passer au traitement suivant
	
	console.log("je réalise le traitement 2");
	next();
	// https://www.youtube.com/watch?v=22d4_KIqBNc
    // https://grafikart.fr/tutoriels/conteneur-dependance-922
}

function idValid(request,reponse,next) {
	const id = request.paramas.id;
    // si l'id est invalid => dans le middleware que l'on va stooper l'enchainement des middleware
	if(!isValidObjectId(id)) return reponse.status(400).json({msg : `l'id ${id} n'est pas valide pour MongDB`, where : "middleware"})
	// sinon au traitement 
	next();
}
function isValidArticle(request,reponse,next) {
	const { body } = request; 
    const {error} = schemaArticleJoi.validate(body , { abortEarly : false})
    if(error) return  reponse.status(400).json(error.details) // 400 bad Request
     
}

module.exports.traitement1 = traitement1
module.exports.traitement2 = traitement2
module.exports.idValid=idValid
module.exports.isValidArticle = isValidArticle