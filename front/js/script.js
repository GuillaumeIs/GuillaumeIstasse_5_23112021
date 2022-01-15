// Récupération des données de l'API //
fetch(`http://localhost:3000/api/products`)
  .then(res => res.json())
  .then(data => { viewKanap(data); })
  .catch(_error => { alert('Aucune réponse du serveur (API)...'); });

function viewKanap(data) {
    for (let kanap of data) {
      //Récupération de l'élement .items stocké dans la variable lienItems
      let lienItems = document.querySelector(".items");

      //Création de l'élément a HTML
      let aItems = document.createElement("a");
      //Élement a enfant de items (lienItems)
      lienItems.appendChild(aItems);
      //Création et récupération du lien ._id
      aItems.href = `product.html?id=${kanap._id}`;

      //Création de l'élément article HTML
      let kanapArticle = document.createElement("article");
      //Élement article enfant de items (lienItems)
      let prod0 = lienItems.appendChild(kanapArticle);
      //Élement article enfant de a (aItems)
      aItems.appendChild(prod0);

      //Création de l'élément img HTML
      let kanapImg1 = document.createElement("img");
      //Élement img enfant de items (lienItems)
      let prod1 = lienItems.appendChild(kanapImg1);
      //Élement img enfant de article (kanapArticle)
      kanapArticle.appendChild(prod1);
      //Affichage de l'image de img (kanapImg1)
      kanapImg1.src = `${kanap.imageUrl}`;
      //Affichage de la description de img (kanapImg1)
      kanapImg1.alt = `${kanap.altTxt}`;

      //Création de l'élément h3 HTML
      let kanapH3 = document.createElement("h3");
      //Élement h3 enfant de items (lienItems)
      let prod2 = lienItems.appendChild(kanapH3);
      //Élement h3 enfant de article (kanapArticle)
      kanapArticle.appendChild(prod2);
      //Création de la classe kanapName
      kanapH3.setAttribute("class","kanapName");
      //Affichage du nom de la classe (kanapName)
      kanapH3.innerHTML = `${kanap.name}`;

      //Création de l'élément p HTML
      let kanapImg3 = document.createElement("p");
      //Élement p enfant de items (lienItems)
      let prod3 = lienItems.appendChild(kanapImg3);
      //Élement p enfant de article (kanapArticle)
      kanapArticle.appendChild(prod3);
      //Affichage de la description p (kanapImg3)
      kanapImg3.innerHTML = `${kanap.description}`;
    }
};