const { Schema , model } = require("mongoose")

const articleSchema = new Schema({
    titre : String ,
    contenu : String ,
    like : Number ,
    auteur : String
});

const Article = model("articles", articleSchema) ;

// créer un schema pour la collection (Table) user
const userSchema = new Schema({
    email :  String ,
    password : String 
});



module.exports.Article = Article ; 