 // si vous avez une autre collection avec des routes dédiées
 // il est conseillé de créer un fichier dédié aux routes
 //pour cette collection

 // (Collection en NoSQL) (collection table en SQL)====model??
const {Router} = require("express")
const{User} =require("./model") // import du model pour communiquer avec MongoDB


const route = Router()
// il faut associer ces  routes dans

route.post("/" , async(request, reponse) =>{
	const {body} = request // récupérer la partie Body de la requête POST

	// faire des vérifivation email valide /password valid
	// si ok 


	// on doit vérifier si il n'existe pas un autre user
    // avec l'email proposé 
    // vérifier si l'email propose n'est pas déjà en

     
	// Attention lorsque l'on stocker en base de données 
	// le password => il faut lee hashé (cryter)
	// traitement hashage du password 
	// ok
	const userACreer = new User(body)
	// new mot clé de js => User (class model)=> objet userAcreer
	// objet userAcreer dispose de la méthode  .save () => INSERT
	 await userACreer.save () //INSERT  => asynchrone (prendre du temps await)
	                          // si await il faut ajouter un async devient le callback

    // quelquesoit la route /quelquesoit la méthode => reponse OBLIGATORIEMENT
   reponse.json(userACreer) // affiché dans Thunder Client 
	                        // status 200 => tout a été traité correctement par Nodejs
})
// test POST  http://localhost:4003/user (le user dans l'url vient de app.js)
 /* {
    "email" :"a@yahoo.fr"
	"password" : "12356"
  }*/

module.exports=route; // route => export default 