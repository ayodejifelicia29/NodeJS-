const { Schema , model } = require("mongoose")

const articleSchema = new Schema({
    titre : String ,
    contenu : String ,
    like : Number ,
    auteur : String
});

const Article = model("articles", articleSchema) ;

// créer un schema pour la collection (Table) users
// les champs des Documents dans la collection
const userSchema = new Schema({
    email :  String ,
    password : String 
});

// creation du model => class qui va nous permettre .find() .findBIdAndUpdate()
//lien entre notre projet et MongoDB

const User =model("user" ,userSchema)
// "users => nom de la collection (TABLE)"
// "user" => par défaut mongoose va ajouté un s à la fihn
// userSchema => structure de chaque enregistrement dans la collectioin

module.exports.Article = Article ; 
module.exports.User =User; // exporter pour pouvoir l'utiliser dans fichier de route