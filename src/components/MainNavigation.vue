<template>
  <b-container fluid>
    <b-row class="logoMenu">
      <b-col></b-col>
      <b-col sm="2" class="logoMenu_leftContainer">{{msg}}</b-col>
      <b-col sm="6"><b-link to="/"><b-img src="../assets/marvel_comics_logo2.png" fluid alt="Responsive image" /></b-link></b-col>
      <b-col sm="2" class="logoMenu_marvelMastecard">{{msg}}</b-col>
      <b-col class="logoMenu_Search">{{msg}}</b-col>
      <b-col ></b-col>
    </b-row>
    <b-row class="col-menu">
      <b-col>
        <b-nav class="list-menu" align="center">
          <b-nav-item to="characters">Characters</b-nav-item>
          <b-nav-item to="comics">Comics</b-nav-item>
          <b-nav-item to="creators">Creators</b-nav-item>
          <b-nav-item to="events">Events</b-nav-item>
          <b-nav-item to="series">Series</b-nav-item>
          <b-nav-item to="stories">Stories</b-nav-item>
        </b-nav>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: 'MainNavigation',
  data () {
    return {
      msg: 'Menú'
    }
  }
}
</script>
<style scoped>
  /* div {
    border: solid 1px red;
  } */
  .logoMenu {
    border-bottom: 1px solid #505050;
    color: white;
  }
  .logoMenu div {
    background-color: #393939;
    height: 50px;
  }
  .logoMenu div img {
    height: 100%;
  }
  .logoMenu_leftContainer, .logoMenu_marvelMastecard, .logoMenu_Search {
    border-left: 1px solid #505050;
    border-right: 1px solid #505050;
    padding-top: 12px;
  }
  .col-menu .col {
    background-color: #362d2d;
    height: 40px;
  }

  .col-menu a {
    color: white;
  }

  .list-menu {
    height: inherit;
  }

    .list-menu .nav-item{
    height: inherit;
  }
</style>
