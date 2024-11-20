<template>
  <div class="home">
    <div class="body">
      <div class="categories">
        <h1 class="NOM front">SOULA</h1>
        <h2 class="PRENOM front">Pierre-Jean</h2>
        <div class="bandeau1">
          <div class="poste">
          <a class="poste1">Développeur</a><br>
          <a class="poste2">Web et Web Mobile</a>
        </div>
        </div>
        <div class="bandeau2"></div>        
        <div class="contacts">
          <a href="mailto:soulapj@gmail.com">soulapj@gmail.com</a><br>
        </div>
        <div class="grandProjetsOrg">
          <div v-for="(projet, index) in projets" :key="index">
            <div v-if="projet.visualCategory === 1" class="grandProjets">
              <img :src="projet.image" class="grandImage"/>
              <div class="options">
                <h3>{{ projet.name }}</h3>
                <a> {{ projet.description }} </a><br><br>
                <a> {{ projet.techCategory }} </a><br>
                <div class="buttongroup">
                  <a class="button site" :href="projet.lien" target="_blank">Voir le site</a>
                  <a class="button git" :href="projet.git" target="_blank">GIT</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="Texte">
          <p>A 25 ans, je suis actuellement en reconversion professionelle dans le milieu du développement web. Je suis en formation à l'AFPA Digital qui m'a permis d'acquérir les bases du HTML, CSS, SCSS, Javascript, Vue, PHP mais également la gestion de base de données SQL, NoSQL et MongoDB. J'ai également eu l'opportunité de travailler en groupe en utilisant des outils tels que Git Hub et d'être en charge des merges et des commits.</p>
        </div>

        <div class="moyenProjetsOrg">
          <div v-for="(projet, index) in projets" :key="index">
            <div v-if="projet.visualCategory === 2" class="moyenProjets">
              <img :src="projet.image" class="moyenImage"/>
              <div class="options">
                <h3>{{ projet.name }}</h3>
                <a> {{ projet.description }} </a><br><br>
                <a> {{ projet.techCategory }} </a><br>
                <div class="buttongroup">
                  <a class="button site" :href="projet.lien" target="_blank">Voir le site</a>
                  <a class="button git" :href="projet.git" target="_blank">GIT</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="Texte">
          <p class="Textecoté">Intéressés par ce que vous avez-vu jusqu'à present? Contactez-moi!</p>
          <a href="mailto:soulapj@gmail.com">mail: soulapj@gmail.com</a> <br>
        </div>

        <div class="moyenProjetsOrg">
          <div v-for="(projet, index) in projets" :key="index">
            <div v-if="projet.visualCategory === 3" class="moyenProjets">
              <img :src="projet.image" class="moyenImage"/>
              <div class="options">
                <h3>{{ projet.name }}</h3>
                <a> {{ projet.description }} </a><br><br>
                <a> {{ projet.techCategory }} </a><br>
                <div class="buttongroup">
                  <a class="button site" :href="projet.lien" target="_blank">Voir le site</a>
                  <a class="button git" :href="projet.git" target="_blank">GIT</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import {mapState} from "vuex";

export default {
  computed: {
    ...mapState(["categorieProjet", "projets"])
  }
}


</script>


<style>
  .body {
    height: auto;
    width: 55%;
    position: relative;
    background-color: rgb(255, 255, 255);
    left:50%;
    transform: translateX(-50%);
    z-index: 10;
    box-shadow: 0px 0px 50px -25px #2b3d4f;
    display: flex;
    justify-content: center;
    
    /* border: #2b3d4f solid 3px; */
    }

  .bandeau1 {
    background-color: rgb(165, 216, 255);
    position: absolute;
    left: 50%;
    top: 5vh;
    transform: translateX(-33%);
    width: 1000px;
    height: 350px;
    box-shadow: 0px 0px 50px -30px #2c3e50;
    padding: 10px;
    align-content: center;
    justify-items: left;
    z-index:-1;
    }

  .NOM {
    position: absolute;
    font-size: 110px;
    font-weight: 900;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    left: -60px;
    top: 130px;
  }

  .PRENOM {
    position: absolute;
    font-size: 100px;
    top:110px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    left: -60px;
    top: 220px;
  }

  .poste {
    z-index: 3;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-self: center;
    color: rgb(225, 242, 255);
  }

  .poste1{
    position: relative;
    top:-15px;
    left: -5px;
    font-size: 185px;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 900;
    margin: -30px
  }
  .poste2{
    position: relative;
    text-wrap: nowrap;
    top:-20px;
    font-size: 120px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 900;
    margin: -30px
  }

  .contacts {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-self: end;
    top: 385px;
    left: 48vw;
    font-size: 30px;
    font-weight: 900;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #2b3d4f;
  }
  .contacts a {
    color: #2b3d4f;
    text-decoration: none;
    margin: -10px;
  }

  .bandeau2 {
    border: #2c3e50 7px dashed;
    position: absolute;
    left: -10%;
    top: 20.5vh;
    width: 350px;
    height: 25vh;
    padding: 10px;
    align-content: center;
    justify-items: left;
    z-index: -2;
    }

  .Texte {
    background-color: rgb(165, 216, 255) ;
    position:relative;
    display: flex;
    z-index: 3;
    padding: 20px 70px 30px 70px;
    font-size: 14px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #2b3d4f;
    margin-bottom: 25px;
    transform: scale(105%);
    flex-direction: column;
  }


  .Texte a {
    color: #2b3d4f;
    text-decoration: none;
    font-size: 20px;
    margin: -5px;
  }

    
  .grandProjetsOrg {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 50vh;
  }
  
  .grandProjets {
    /* border: #2c3e50 solid 5px; */
    display: flex;
    border-radius: 25px;
    width: 850px;
    height: 325px;
    box-shadow: 0px 0px 50px -20px #2c3e50;
    margin: 40px;
    background-color: white;
  }

  .grandProjets .grandImage {
    width: 550px;
    border-radius: 25px 0 0 25px;
    object-fit: cover;
  }

  .grandProjets .options {
    padding: 40px;
  }

  .grandProjets .buttongroup {
    margin-top: 40px
  }

  .button {
    background-color: #2c3e50;
    padding: 10px;
    margin: 5px;
    color: #ffffff;
    border-radius: 10px;
    text-decoration: none;
  }

  .moyenProjetsOrg {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .moyenProjets {
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    width: 250px;
    height: auto;
    box-shadow: 0px 0px 50px -25px #2c3e50;
    margin: 10px 25px 25px 25px;
    padding-bottom: 25px;
    background-color: white;
    
  }

  .moyenImage {
    height: 175px;
    border-radius: 25px 25px 0 0;
    object-fit: cover;
    border-bottom: #2c3e50 3px solid;
  }

  .moyenProjets .buttongroup {
    margin-top: 4vh
  }

</style>

