 module.exports.getId = () => {
	console.log(1);
}

module.exports.a = ["lundi" ,"dimanche"];
module.exports.phrase = "lorém  ipsum" ;
/* 
module.exports = {
    getId : getId ,
    a : a ,
    phrase : phrase
}
*/

module.exports.test =() => {
	 console.log("je suis le test");
}
/* module.exports = { 
    // attention ça écrase les module.exports
    test : test
} */
/* module.exports = {
    getId : getId ,
    a : a ,
    phrase : phrase
}
 */