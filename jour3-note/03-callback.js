// pour faire en sorte 

let clients ;

function getClient(callback) { // paramètre qui va être une fonction
	fetch("https://jsonplaceholder.typicode.com/users") 
        .then(reponse => reponse.json())
        .then(data => {
            clients = data
            console.log("fin fetch")
			callback() //
        })
}

getClient(() =>{
	console.log("recupérer les clients" ,clients);
}) 


