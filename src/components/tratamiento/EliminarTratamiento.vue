<template>
    <div>
      <h2>Eliminar Tratamiento</h2>
      <p>¿Estás seguro de que quieres eliminar este tratamiento?</p>
      <button @click="eliminarTratamiento" class="btn btn-danger">Eliminar</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'EliminarTratamiento',
    props: ['id'],
    methods: {
      eliminarTratamiento() {
        axios.delete(`http://127.0.0.1:8000/api/tratamiento/${this.id}`)
          .then(() => {
            this.$emit('eliminado');
          })
          .catch(error => {
            console.error('Error eliminando el tratamiento:', error);
          });
      }
    }
  };
  </script>
  