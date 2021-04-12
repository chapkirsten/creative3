<template>
<div id="app">
  <div class="header">
    <h1>Lifestyle by Kirsten</h1>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/skincare">Skincare</router-link> |
        <router-link to="/ask">Ask the Editor</router-link> |
        <router-link to="/questions">Your Questions</router-link> |
        <router-link to="/favorites">Your Favorites</router-link>
      </div>
  </div>
  <div class="content">
    <router-view />
  </div>

  <div class="footer">
    <a href='https://github.com/chapkirsten/creative3'>https://github.com/chapkirsten/creative3</a>
  </div>

</div>
</template>



<style>
body {
  margin: 0px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


.header {
  display: flex;
  justify-content: space-between;
  background: #687864;
  padding: 10px 100px;
  color: white;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a.router-link-exact-active {
  color: black;
}

.content {
  padding: 10px 100px;
}

.footer{
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: #31708E;
  color: white;
  text-align: center;
  width: 100%;
}

a:hover{
  color: peru;
}

a:visited{
  color: white;
}

a:active{
  color: peru;
}
</style>
