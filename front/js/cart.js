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
    //Récupération de #cart__items stocké dans la varible cartItems
    let cartItems = document.querySelector("#cart__items");
    if (localStorage.length !== 0)  {
        for (let i = 0; i < localStorage.length; i++) {
            //Récupération de la fonction kanapLocal stocké dans la variable kanap
            let kanap = kanapLocal(i);
            //Liaison de l'élement cart__items et affichage de chaque nouveau élement
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
};
nouveauFormulaire();