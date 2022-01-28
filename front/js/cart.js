// Fonction qui récupére les élements stockés dans le localstorage //
function kanapLocal(i) {
    //Récupération de la clé du localstorage stocké dans la variable kanapKey
    let kanapKey = localStorage.key(i);
    //Écriture des élements stocké dans le localstorage
    let kanapStorage = JSON.parse(localStorage.getItem(kanapKey));
    return kanapStorage;
};

// Fonction qui affiche les élements stockés dans le localstorage //
function kanapArticle() {
	let cartItems = document.querySelector("#cart__items");
    if (localStorage.length !== 0)  {
        for (let i = 0; i < localStorage.length; i++) {
            //Récupération de la fonction kanapLocal stocké dans la variable kanap
            let kanap = kanapLocal(i);
            //Liaison de l'élement cart__items et ajout de chaque nouveau élement
            cartItems.innerHTML +=
                `<article class="cart__item" data-id="${kanap.id}" data-color="${kanap.couleur}" data-price="${kanap.prix}">
                <div class="cart__item__img">
                <img src="${kanap.imageUrl}" alt="${kanap.altTxt}">
                </div>
                <div class="cart__item__content">
                <div class="cart__item__content__titlePrice">
                <h2>${kanap.name}</h2>
                <p>${kanap.prix} €</p>
                <p>Coloris : ${kanap.couleur}</p>
                </div>
                <div class="cart__item__content__settings">
                <div class="cart__item__content__settings__quantity">
                <p>Qté : </p>
                <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${kanap.quantite}">
                </div>
                <div class="cart__item__content__settings__delete">
                <p class="deleteItem">Supprimer</p>
                </div>
                </div>
                </div>
                </article>`;
        }} else {
        //Annonce du pannier vide stocké dans la variable pVide
        let pVide = `<p>Votre panier est vide.</p>`;
        //Liaison du panier vide et affichage du message
        cartItems.innerHTML = pVide;
}};
kanapArticle();

// Fonction qui actualise le nombre de kanap dans le panier //
function actuKanap() {
    //Stockage de la valeur de base stocké dans la variable ajoutElement
	let ajoutElement = 0;
	for (let i = 0; i < localStorage.length; i++) {
        //Ajout de la valeur quantite (localstorage) à la valeur de base
		ajoutElement += parseInt(kanapLocal(i).quantite);
	}
    //Récupération de l'id totalQuantity stocké dans la variable ajoutQuantite
	let ajoutQuantite = document.querySelector("#totalQuantity");
    //Liaison et affichage de l'id totalQuantity avec la valeur additionné ajoutElement
	ajoutQuantite.innerHTML = ajoutElement;
};
actuKanap();

// Fonction qui actualise le prix en fonction du nombre de kanap dans le panier //
function actuPrix() {
    //Stockage de la valeur de base stocké dans la variable ajoutPrix
	let ajoutPrix = 0;
	for (let i = 0; i < localStorage.length; i++) {
        //Ajout de la valeur quantite (localstorage) multiplier
        //par la valeur prix (localstorage) à la valeur de base
        ajoutPrix += parseInt(kanapLocal(i).prix) * kanapLocal(i).quantite;
	}
    //Récupération de l'id totalPrice stocké dans la variable ajoutPrixQuantite
	let ajoutPrixQuantite = document.querySelector("#totalPrice");
    //Liaison et affichage de l'id totalPrice avec la valeur additionné ajoutPrix
	ajoutPrixQuantite.innerHTML = ajoutPrix;
};
actuPrix();

// Fonction qui permet la suppression d'un kanap dans le panier //
function suppKanap() {
    //Récupération de l'id deleteItem stocké dans la variable suppElement
	let suppElement = document.querySelectorAll(".deleteItem");
	for (let i = 0; i < suppElement.length; i++) {
        //Écoute lors du click sur l'élement deleteItem
		suppElement[i].addEventListener("click", (e) => {
			e.preventDefault();

            //Stockage de l'id du kanap stocké dans la variable localStorageIdCouleur
			let localStorageIdCouleur = [kanapLocal(i).id, kanapLocal(i).couleur];
            //Élement qui permet de supprimer directement un kanap du panier
			localStorage.removeItem(localStorageIdCouleur);
            //Actualisation du panier lors de la suppression d'un kanap
			location.reload();
		});
	}
};
suppKanap();

// Fonction qui permet d'augmenter la quantite de kanap dans le panier //
function actuElement2() {
    //Récupération de l'id itemQuantity et de sa valeur stocké dans la variable actualisationKanap
    let actualisationKanap = document.querySelectorAll(".itemQuantity");
        for (let i = 0; i < actualisationKanap.length; i++) {
            //Écoute lors de l'actualisation du changement de nombre de kanap dans le panier
            actualisationKanap[i].addEventListener("change", (e) => {
            e.preventDefault();

                //Objet qui stocke les informations du localstorage
                //plus la nouvelle valeur quantite
                let addFull = {
                    id: kanapLocal(i).id,
                    quantite: Number(e.target.value),
                    couleur: kanapLocal(i).couleur,
                    name: kanapLocal(i).name,
                    prix: kanapLocal(i).prix,
                    imageUrl: kanapLocal(i).imageUrl,
                    description: kanapLocal(i).description,
                    altTxt: kanapLocal(i).altTxt
                }

                //Stockage de l'id et de la couleur dans la variable idCouleurLocal
                let idCouleurLocal = [kanapLocal(i).id, kanapLocal(i).couleur];

                //Envoi des données dans le localstorage
                localStorage.setItem(idCouleurLocal, JSON.stringify(addFull));
                //Actualisation de la page avec la nouvelle valeur quantite
                location.reload();
	    })
    }
};
actuElement2();

function nouveauFormulaire() {
    //Récupération de la valeur de l'élement firstName stocké dans la varible utiPrenom
    let utiPrenom = document.querySelector("#firstName").value;
    //Récupération de la valeur de l'élement lastName stocké dans la varible utiNom
    let utiNom = document.querySelector("#lastName").value;
    //Récupération de la valeur de l'élement address stocké dans la varible utiAdresse
    let utiAdresse = document.querySelector("#address").value;
    //Récupération de la valeur de l'élement city stocké dans la varible utiVille
    let utiVille = document.querySelector("#city").value;
    //Récupération de la valeur de l'élement email stocké dans la varible utiEmail
    let utiEmail = document.querySelector("#email").value;

    //Regex Nom
    let regexNom = /^[a-zA-Z]/;
    //Regex Prénom
    let regexPrenom = /^[a-zA-Z]/;
    //Regex Adresse
    let regexAdress = /^[a-zA-Z0-9-]/;
    //Regex Ville
    let regexCity = /^[a-zA-Z]/;
    //Regex Email
    let regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/;

    //Récupération de l'élement firstNameErrorMsg stocké dans la varible firstNameErrorMsg
    let firstNameErrorMsg = document.querySelector("#firstNameErrorMsg");
    //Récupération de l'élement lastNameErrorMsg stocké dans la varible lastNameErrorMsg
    let lastNameErrorMsg = document.querySelector("#lastNameErrorMsg");
    //Récupération de l'élement addressErrorMsg stocké dans la varible addressErrorMsg
    let addressErrorMsg = document.querySelector("#addressErrorMsg");
    //Récupération de l'élement cityErrorMsg stocké dans la varible cityErrorMsg
    let cityErrorMsg = document.querySelector("#cityErrorMsg");
    //Récupération de l'élement emailErrorMsg stocké dans la varible emailErrorMsg
    let emailErrorMsg = document.querySelector("#emailErrorMsg");

    if (localStorage.length !== 0) {
    if (regexNom.test(utiPrenom)) {
    firstNameErrorMsg.innerHTML = "";
    if (regexPrenom.test(utiNom)) {
    lastNameErrorMsg.innerHTML = "";
    if (regexAdress.test(utiAdresse)) {
    addressErrorMsg.innerHTML = "";
    if (regexCity.test(utiVille)) {
    cityErrorMsg.innerHTML = "";
    if (regexEmail.test(utiEmail)) {
    emailErrorMsg.innerHTML = "";
    return true;
    } else { emailErrorMsg.innerHTML = "Veuillez entrer une adresse email valide."; }
    } else { cityErrorMsg.innerHTML = "Veuillez entrer un nom de ville."; }
    } else { addressErrorMsg.innerHTML = "Veuillez entrer une adresse postale."; }
    } else { lastNameErrorMsg.innerHTML = "Veuillez entrer un nom."; }
    } else { firstNameErrorMsg.innerHTML = "Veuillez entrer un prénom."; }
    } else { alert("Veuillez ajouter un kanap au panier avant de finaliser votre commande.") }
};

function envoieData() {
    let orderLast = document.querySelector("#order");
    //Écoute lors du clique pour finaliser la commande
    orderLast.addEventListener("click", (e) => {
        e.preventDefault();

        let tabKanapLocalId = [];
        for (let i = 0; i < localStorage.length; i++) {
            //Envoie de l'id dans le tableau (tabKanapLocalId)
            tabKanapLocalId.push(kanapLocal(i).id);
        }
            let formValeur = {
                contact: {
                    firstName: firstName.value,
                    lastName: lastName.value,
                    address: address.value,
                    city: city.value,
                    email: email.value,
                },
                products: tabKanapLocalId,
            };
            fetch("http://localhost:3000/api/products/order", {
                method: "POST",
                body: JSON.stringify(formValeur),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
                .then(res => res.json())
                .then(data => { localStorage.clear(); document.location.href = `./confirmation.html?id=${data.orderId}`; })
                .catch(_error => { alert('Aucune réponse du serveur (API)...'); });
    })
};
envoieData();