const {connect,Schema,model} = require("mongoose")

// 1ère pour travailler avec une base de données => connecter
const URI ="mongodb+srv://Doranco:aE5rq60KnpIKr2Qe@cluster0.pusvprb.mongodb.net/demo?retryWrites=true&w=majority"
connect(URI ,{useNewurlParser :true})
      .then (() => console.log("connexion à MongoDB Réussie "))
	  .catch((ex) => console.log(ex));


// schema => décrire l'aspect des documents que l'on veut enregistrer
const etudiantSchema = new Schema({
	nom : String,
	age : Number,
	dt_creation :Date
})

// collection => TABLE => Etudiant
const Etudiant =model("etuidants" ,etudiantSchema)
// données
function insert() {
	const cdaEtudiant ={
		nom : "Alain",
		age : 20,
		dt_creation : new Date()
	}
	

	// INSERT
	const insert = new Etudiant(cdaEtudiant) // créer base IF NOT EXIST et créer la table IF NOT EXISTS et INSERER
	insert.save(); // INSERT INTO en SQL
}
insert ()

  // opération asynchrone CRUD en  MongoDB
 async function supprimer (id) {
await	Etudiant.findByIdAndRemove(id) // DELETE FROM etudiaants WHERE id =id
}
supprimer("643fb4b6d24c8a396b3d6ec0"); // l'id vient de la base de données MongoDB

async function read() {
	const resultat = await Etudiant.find () // SELECT * FROM etuidants
	 console.log(resultat);
}
 read()

  async function update(id) { // UPDATE etudiant SET  nom ="Céline",age :40 WHERE id =id
	   await Etudiant.findByIdAndUpdate(id ,{
		$set :{
			nom :"Zerro",
			age : 21
		}
	   })
 }
 update("643fb704fcc8e24569d8aaa0")

 // quel est la différence 