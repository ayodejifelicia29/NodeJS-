const _=require("lodash"); // chercher dans les modules natifs
 const moment=require("moment")         
               // chercher le dossier node_modules

const date =new Date();
console.log(date.getDate()+ "/" + (date.getMonth()+ 1)+ "/" + date.getFullYear());
moment.locale("fr")
console.log(moment().format("dddd DD/MM/YYYY"));

const tableau=["lundi" ,"mardi" , "mercredi" ,"jeudi"];

console.log(_.takeRight(tableau,3));

const tableau2 =[];
if (tableau2.length ===0) {
	console.log("tableau2 vide");
}

const texte ="";
if (texte.length ===0) {
	console.log("texte vide");
}
 const etudiant={};
 if (Object.keys(etudiant).length ===0) {
	console.log("etudiant vide");
 }

 if (_.isEmpty(tableau2)) {
     console.log("tablea2 vide");
 }

 if (_.isEmpty(texte)) {
	console.log("texte vide");
}

if (_.isEmpty(etudiant)) {
	console.log("etudiant vide");
}