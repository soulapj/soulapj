import { createStore } from 'vuex'

export default createStore({
  state: {
    categorieProjet: [
      {
        id: 1,
        name: "First Tier",
        description: "Pour projets a mettre en avant"
      },
      {
        id: 2,
        name: "Second Tier",
        description: "Pour les autres projets"
      },
      {
        id: 3,
        name: "Third Tier",
        description: "Pour exercices et petite tech"
      },
    ],
    projets: [
      {
        id: 3,
        name: "Webwares",
        image: require("@/assets/previews/ecf3.avif"),
        description: "Crée dans le cadre d'un ECF, front et back du site de vente de meuble pour professionnels. Compte Admin SIRET: 75008 mdp: motdepasseB ",
        visualCategory: 1,
        techCategory: "VueJS",
        lien: "https://webwares.netlify.app/",
        git: "https://github.com/soulapj/WebWares.git"
      },
      {
        id: 1,
        name: "Georgia Restaurant",
        image: require("@/assets/previews/ecf1.avif"),
        description: "Crée dans le cadre d'un ECF, front du site d'un restaurant avec version desktop et mobile.",
        visualCategory: 1,
        techCategory: "Html / CSS",
        lien: "https://eventgrids-exo.netlify.app/",
        git: "https://github.com/soulapj/aoutsolo.git"
      },
      {
        id: 2,
        name: "Event Grids",
        image: require("@/assets/previews/ecf2.avif"),
        description: "Crée dans le cadre d'un ECF, front du site d'organisation d'évenements avec version desktop et mobile. Travail de Groupe",
        visualCategory: 1,
        techCategory: "Html / CSS",
        lien: "https://georgiarestaurant-exo.netlify.app/",
        git: "https://github.com/soulapj/aoutgroup.git"
      },

      {
        id: 4,
        name: "Menu",
        image: require("@/assets/previews/vue1.avif"),
        description: "Front pour menu de fastfood intéractif",
        visualCategory: 2,
        techCategory: "VueJS",
        lien: "https://celadon-tapioca-c30810.netlify.app/",
        git: "https://github.com/soulapj/menu"
      },
      {
        id: 5,
        name: "Liste Produits",
        image: require("@/assets/previews/vue2.avif"),
        description: "Back pour création, modification et suppression de produits",
        visualCategory: 2,
        techCategory: "VueJS",
        lien: "https://candid-croissant-3a8982.netlify.app/",
        git: "https://github.com/soulapj/listeProduit"
      },
      {
        id: 6,
        name: "To-Do List",
        image: require("@/assets/previews/vue3.avif"),
        description: "Liste de tâche à faire intéractive avec ajout, complété et suppression.",
        visualCategory: 2,
        techCategory: "VueJS",
        lien: "https://rad-parfait-44c9b2.netlify.app/",
        git: "https://github.com/soulapj/toDoList"
      },
      {
        id: 7,
        name: "Jeu question",
        image: require("@/assets/previews/vue4.avif"),
        description: "Jeu de culture générale qui comptabilise les points contre l'ordinateur. Utilise Axios et la base de donnée d'OpenTrivia",
        visualCategory: 2,
        techCategory: "VueJS",
        lien: "https://jeuquestion.netlify.app/",
        git: "https://github.com/soulapj/questionnaire"
      },
      {
        id: 8,
        name: "Panier Produit",
        image: require("@/assets/previews/vue5.avif"),
        description: "Liste de Produit et Panier intéractif",
        visualCategory: 2,
        techCategory: "VueJS",
        lien: "https://panierproduit.netlify.app/",
        git: "https://github.com/soulapj/produitpanier"
      },
      {
        id: 9,
        name: "Dés",
        image: require("@/assets/previews/js1.avif"),
        description: "Dé en 3d pivotable. Réalisé en utilisant ThreeJS",
        visualCategory: 3,
        techCategory: "Javascript",
        lien: "https://deft-treacle-2d1371.netlify.app/",
        git: "https://github.com/soulapj/dice"
      },
      {
        id: 10,
        name: "Drawing Canvas",
        image: require("@/assets/previews/js2.avif"),
        description: "Tableau blanc sur lequel on peut dessiner en noir et effaçable.",
        visualCategory: 3,
        techCategory: "Javascript",
        lien: "https://peaceful-naiad-a54ccf.netlify.app/",
        git: "https://github.com/soulapj/drawing_canvas"
      },
      {
        id: 11,
        name: "IMC",
        image: require("@/assets/previews/js3.avif"),
        description: "Calcul de l'IMC.",
        visualCategory: 3,
        techCategory: "Javascript",
        lien: "https://delightful-tanuki-a663f8.netlify.app/",
        git: "https://github.com/soulapj/IMC"
      },
      {
        id: 12,
        name: "Liste Utilisateur",
        image: require("@/assets/previews/js4.avif"),
        description: "Liste Utilisateur filtrable.",
        visualCategory: 3,
        techCategory: "Javascript",
        lien: "https://sensational-khapse-5920e8.netlify.app/",
        git: "https://github.com/soulapj/ListeUsers"
      },
      {
        id: 13,
        name: "Liste Livres",
        image: require("@/assets/previews/js5.avif"),
        description: "Liste de livres. Option d'ajout, suppression et modification des livres.",
        visualCategory: 3,
        techCategory: "Javascript",
        lien: "https://fastidious-peony-3eca02.netlify.app/",
        git: "https://github.com/soulapj/listeCrud"
      },
      {
        id: 14,
        name: "Meteo locale",
        image: require("@/assets/previews/js6.avif"),
        description: "Bouton qui, lorsque l'on entre le nom d'une ville, donne la météo actuelle.",
        visualCategory: 3,
        techCategory: "Javascript",
        lien: "https://snazzy-sorbet-f68ea3.netlify.app/",
        git: "https://github.com/soulapj/meteoGeo"
      },
      {
        id: 15,
        name: "Shifumi",
        image: require("@/assets/previews/js7.avif"),
        description: "Jeu de Pierre-Papier-Ciseau contre l'ordinateur.",
        visualCategory: 3,
        techCategory: "Javascript",
        lien: "https://silver-otter-a01d12.netlify.app/",
        git: "https://github.com/soulapj/Shifumi"
      },
      {
        id: 16,
        name: "Validation Form",
        image: require("@/assets/previews/js8.avif"),
        description: "Formulaire d'inscription en Javascript.",
        visualCategory: 3,
        techCategory: "Javascript",
        lien: "https://willowy-sunburst-2b3aca.netlify.app/",
        git: "https://github.com/soulapj/validationForm"
      },
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
