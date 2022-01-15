// Récupération de l'URL et de l'identifiant du produit depuis le lien URL //
let params = new URLSearchParams(window.location.search);
let id = params.get('id');

// Récupération des données de l'API et liaison de l'id produit avec l'API //
fetch(`http://localhost:3000/api/products/${id}`)
  .then(res => res.json())
  .then(data => { affichageElement(data); ajoutLocalstorage(data); })
  .catch(_error => { alert('Aucune réponse du serveur (API)...'); });

// Fonction qui récupére et insère les éléments (DOM) dans la page //
function affichageElement(data) {
  //Récupération de l'élement .item__img stocké dans la variable lienItems
  let lienItems = document.querySelector(".item__img");

  //Création de l'élément img HTML
  let imgProduct = document.createElement("img");
  //Élement img enfant de .item__img (lienItems)
  lienItems.appendChild(imgProduct);
  //Affichage de l'image de img (imgProduct)
  imgProduct.src = `${data.imageUrl}`;
  //Affichage de la description de img (imgProduct)
  imgProduct.alt = `${data.altTxt}`;

  //Affichage du nom du produit (data.name)
  document.querySelector('#title').innerHTML = `${data.name}`;
  //Affichage du prix du produit (data.price)
  document.querySelector('#price').innerHTML = `${data.price}`;
  //Affichage de la description du produit (data.description)
  document.querySelector('#description').innerHTML = `${data.description}`;

  //Récupération de l'élement couleur (colors) stocké dans la variable option
  let option = data.colors;

  for (let color of option){
    //Récupération de l'élement #colors stocké dans la variable lienItems2
    let lienItems2 = document.querySelector("#colors");

    //Création de l'élement option stocké dans la variable elementOption
    let elementOption = document.createElement("option");
    //Élement option enfant de #colors (lienItems2)
    lienItems2.appendChild(elementOption);
    //Ajout de la valeur (value) et de la couleur (color) à l'élement option (elementOption) 
    elementOption.setAttribute("value", `${color}`);
    //Affichage du choix de l'option de la couleur (elementOption)
    elementOption.innerHTML = `${color}`;
}
};

// Fonction qui permet de stocké les élements dans le panier (localStorage) //
function ajoutLocalstorage(data) {
    //Récupération de l'élément addToCart stocké dans une variable (addToCart)
    let addTocart = document.querySelector("#addToCart");
    //Écoute de l'élément addToCart (évenement click)
    addTocart.addEventListener("click", () => {
  
      //Stockage des données dans un objet
      let addFull = {
        id: data._id,
        quantite: quantity.value,
        couleur: colors.value,
        name: data.name,
        prix: data.price,
        imageUrl: data.imageUrl,
        description: data.description,
        altTxt: data.altTxt
      }
  
      //Vérification du choix d'au moins une couleur (string)
      if (colors.value === "") {
          alert("Veuillez choisir au moins une couleur.");
      //Vérification du choix d'au moins d'un kanap (number)
      } else if (quantity.value == 0) {
          alert("Veuillez choisir au moins un ou plusieurs kanap.");
      } else {
        //Ajout de l'id et de la couleur dans un tableau stocké dans une variable (addIdCouleur)
        let addIdCouleur = [data._id, colors.value];
        //Envoie des données dans le localstorage
        localStorage.setItem(addIdCouleur, JSON.stringify(addFull));
          alert(`Votre panier contient ${quantity.value} ${data.name} ${colors.value} !`);
  
      }
  }
  )};