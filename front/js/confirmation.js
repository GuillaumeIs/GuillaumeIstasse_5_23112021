// Récupération de l'id commande passer en paramètre par l'URL //
let params = new URLSearchParams(window.location.search);

//Stockage du paramètre id commande URL dans la variable id
let id = params.get("id");

//Assosiation et affichage de l'id commande passer en paramètre URL
document.querySelector("#orderId").innerText = `${id}`;