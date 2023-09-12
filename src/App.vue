<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link :to="{ name: 'about'}">About</router-link> 
    <router-link :to="{ name: 'jobs'}">jobs</router-link>
  </nav>
  <div>
      <button class="boton" @click="back">go back </button>
      <button class="boton" @click="redirect">redirect</button>
      <button class="boton" @click="forward">go forward</button>
    </div>
  <router-view/>
</template>

<script>
export default{
  methods: {
    redirect(){
      this.$router.push({name:'home'})
    },
    back(){
      this.$router.go(-1)
    },
    forward(){
      this.$router.go(1)
    }
  },
}</script>

<style>
:root {
    --color1: #69e7db;
    --color2: #4fbbb0;
    --color3: #358f85;
    --color4: #1a625b;
    --color5: #003630;
}

/* Estilos para los botones */
  .boton {
      padding: 10px 20px;
      margin: 16px 8px;
      border: none;
      border-radius: 5px;
      color: white;
      font-weight: bold;
      cursor: pointer;
      background-color: var(--color4);
      transition: background-color 0.2s ease-in-out;
  }

  /* Cambia el color de fondo en hover */
  .boton:hover {
      background-color: var(--color1);
      color: black;
  }


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--color5);
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: var(--color5);
  text-decoration: none;
  margin: 10px;
  padding: 8px 16px;
}

nav a.router-link-exact-active {
  color: white;
  background-color: var(--color3);
  border-radius: 10px;

}
</style>
