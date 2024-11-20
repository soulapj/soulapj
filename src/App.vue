<template>
  <nav hidden>
    <router-link to="/">Home</router-link>
  </nav>
  <router-view/>
</template>

<style>
body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* font-size: 62.5%; */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 10px;
  background-color: #ffffff;
  box-shadow: 0px 0px 15px -5px #2c3e50, inset 0px 10px 10px -15px #2c3e50;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #47bbff;
}
</style>
