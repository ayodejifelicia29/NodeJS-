let a =0

function promesse1() {
	return new Promise(function(resolve, reject) {
		setTimeout(function(){
			a++ ;
			console.log("promesse1")
			resolve()
		} , 1000)
	})
}


function promesse2() {
	return new Promise(function(resolve, reject) {
		setTimeout(function(){
			a += 5 ;
			console.log("promesse2")
			resolve()
		} , 2000)
	})
}

promesse1()
.then(() => promesse2()) // attend
.then(() => console.log(a)) // attend => affiché a