const { Router } = require("express")
const { Article } = require("./model")
const{isValidObjectId} =require("mongoose")
const Joi = require("joi"); // librairie qui permet de réaliser des vérifications super if 

const schemaArticleJoi = Joi.object({ // 19 vérifications 
    titre : Joi.string().min(5).max(255).required(),
    contenu : Joi.string().min(5).max(10000).required(),
    like : Joi.number().min(0).required(),
    auteur : Joi.string().min(5).max(255).required(),
})

const route = Router();

route.get("/", function(request, reponse){
    reponse.json({msg : "fonction"})
})

route.post("/" , async function(request, reponse){
    const { body } = request; 

    /* console.log(error);
    return reponse.json("stop"); */
    const {error} = schemaArticleJoi.validate(body , { abortEarly : false})
    if(error) return  reponse.status(400).json(error.details) // 400 bad Request

    const newArticle = new Article(body) // exos.push(body)
    await newArticle.save()
    reponse.json(newArticle); 
})
    

  // récuperer tous les articles
route.get("/all" , async(request , reponse) =>{
    const tousLesArticles = await Article.find()
    reponse.json(tousLesArticles)
})
   //  DELETE http://localhost:4003/644028afbe8b2be8ad182b30
route.delete("/:id" , async(request , reponse) => {
    const id = request.params.id ;
     if(!isValidObjectId(id)) return reponse .status(400).json ({msg : `l'id ${id} n'est pas valide pour MongoDB`})
     const reponseMongo = await Article.findByIdAndRemove (id) // DELETE
     if (!reponseMongo) return reponse.status(404).json ({msg :`l'article ${id}n'exise pas`})
   reponse.json({msg :`l'article ${id}est bien supprimé`});
});
  
route.get("/:id" , async (request,reponse) =>{
    const id = request.params.id ;
    if(!isValidObjectId(id)) return reponse .status(400).json ({msg : `l'id ${id} n'est pas valide pour MongoDB`})
    //const articleRecherche =await Article.find ({_id :id})
     const articleRecherche= await Article.findById(id)
     if (!reponseMongo) return reponse.status(404).json ({msg :`l'article ${id}n'exise pas`})
      reponse.json(articleRecherche)
})


  // MEttre a jour http://localhost:4003/6440ea80fba44d4557e5df5e
  route.put("/:id" ,async (request,reponse) =>{
    const id = request.params.id ;
    if(!isValidObjectId(id)) return reponse .status(400).json ({msg : `l'id ${id} n'est pas valide pour MongoDB`})
    const {body} = request;
    const {error} =schemaArticleJoi.validate(body ,{abortEarly :false })
    if(error) return reponse.status(400).json(error,details) //400 Bad Request
   
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