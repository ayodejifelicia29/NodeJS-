const { Router } = require("express")
const { Article } = require("./model")
const {traitement1,traitement2 ,idValid,isValidArticle,autorisation,isAdmin} = require ("./middleware")


const route = Router();
// fetch("http://localhost:4003", {method: "GET"})=> récupérer du serveur
// fetch("http://localhost:4003", {method: "POST"})=> envoyer du serveur
// fetch("http://localhost:4003", {method: "DELETE"})=> supprimer du serveur
// fetch("http://localhost:4003", {method: "PUT"})=> mis à jour du serveur

route.get("/", function(request, reponse){
    reponse.json({msg : "fonction"})
})

//route.post
route.post("/" ,isValidArticle ,async function(request, reponse){
    const { body } = request; 
    const newArticle = new Article(body) // exos.push(body)
    await newArticle.save() // MongoDB => traitements qui sont asynchrones => await
    reponse.json(newArticle); 
})
    

  // récuperer tous les articles
  // http://localhost:4003/all
  // 1 middleware
route.get("/all" , async(request , reponse) =>{
    const tousLesArticles = await Article.find()
    reponse.json(tousLesArticles)
})


   //  DELETE http://localhost:4003/644028afbe8b2be8ad182b30
   // ajouter 2 middleware pour le DELETE 
   // attention l'ord
route.delete("/:id" , [autorisation,isAdmin,idValid] ,async(request , reponse) => {
    const id = request.params.id ;
     const reponseMongo = await Article.findByIdAndRemove (id) // DELETE
     if (!reponseMongo) return reponse.status(404).json ({msg :`l'article ${id}n'exise pas`})
   reponse.json({msg :`l'article ${id}est bien supprimé`});
});
  
route.get("/:id" , idValid, async (request,reponse) =>{
  const id = request.params.id ;
  //const articleRecherche =await Article.find ({_id :id})
   const articleRecherche= await Article.findById(id)
   if (!reponseMongo) return reponse.status(404).json ({msg :`l'article ${id}n'exise pas`})
    reponse.json(articleRecherche)
})

   // put => update sur TOUS les champs de l'article titre / auteur / contenu
  // patch => update sur certains champs de l'article
  // MEttre a jour http://localhost:4003/6440ea80fba44d4557e5df5e
  route.put("/:id" , [idValid, isValidArticle], async (request,reponse) =>{
    const id = request.params.id ;
    const {body} = request;
    // effectue l'update 
    const articleUpdated = await Article.findByIdAndUpdate(id , { $set : body } , { new : true})
    // { new : true} est facultatif => il permet de récupérer l'article avec les updates 
    // sans cette valeur => findByIdAndUpdate retourne l'ancienne valeur de l'article mis à jour

    if(!articleUpdated) return reponse.status(404).json({ msg : `l'article ${id} n'existe pas` }) ; 

    reponse.json(articleUpdated)
  })
// tester via thunder client 
// POST http://localhost:4003
/**
{
  "titre": "premier article",
  "contenu" : "lorem ipsum",
  "like" : 10 ,
  "auteur" : "Alain"
}
*/


module.exports = route ; 