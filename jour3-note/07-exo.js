//créer 3 setTimeout
// 1er exécuté au bout de 1 seconde => console.log("ranger sa chambre")
// 1er exécuté au bout de 3 seconde => console.log("faire le repassage")
// 1er exécuté au bout de 1 seconde => console.log("prendre un café")
// ils doivent être emballé dans des Promises 

// dans la console 
// "ranger sa chambre" au bout 1 s
// au bout de 4 s "faire le repassage"
// au bout de 5 s "prendre un café")





function promesse1() {
	return new Promise(function(resolve, reject) {
		setTimeout(function(){
			console.log("ranger sa chambre")
			resolve()
		} , 1000)
	})
}


function promesse2() {
	return new Promise(function(resolve, reject) {
		setTimeout(function(){
			console.log("faire le repassage")
			resolve()
		} , 3000)
	})
}


function promesse3() {
	return new Promise(function(resolve, reject) {
		setTimeout(function(){
			console.log("prendre un café")
			resolve()
		} , 1000)
	})
}

 async function getB() {
	await promesse1() 
	await promesse2 () 
	await promesse3 () 
	
}
getB ()