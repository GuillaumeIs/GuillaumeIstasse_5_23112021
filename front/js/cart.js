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
        let pVide = `<p>Votre panier est vide.</p>`;
        cartItems.innerHTML = pVide;
}};
kanapArticle();