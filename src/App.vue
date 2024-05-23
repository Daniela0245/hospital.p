<template>
  <div id="app">
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
/* Estilos que se aplicarán solo a este componente */
#nav {
  background-color: #333;
  padding: 10px;
  display: flex;
  justify-content: space-around;
}

#nav a {
  color: white;
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
