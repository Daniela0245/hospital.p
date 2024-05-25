<template>
  <div id="app">
    <header>
      <img src="../src/assets/hospi.png" alt="Logo" class="logo">
      <h1>Administración para Hospitales</h1>
    </header>
    <nav id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/citas">Citas</router-link>
      <router-link to="/pacientes">Pacientes</router-link>
      <router-link to="/personalmedico">Personal Medico</router-link>
      <router-link to="/tratamiento">Tratamiento</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
body {
  background-color: #e0e7ff; /* Gris azulado */
  margin: 0;
  font-family: Arial, sans-serif;
}

#app {
  text-align: center;
  padding: 20px;
}

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
}

header .logo {
  width: 100px;
  position: absolute;
  top: 10px;
  right: 10px;
}

header h1 {
  margin: 20px 0;
  color: #333;
}

#nav {
  display: flex;
  justify-content: center;
  gap: 10px; /* Espacio entre los elementos */
}

#nav a {
  display: inline-block;
  color: white;
  background-color: #333;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

#nav a:hover {
  background-color: #555;
}

#nav a.router-link-exact-active {
  background-color: #4CAF50;
}
</style>
