<template>
    <div>
      <h2>Eliminar Paciente</h2>
      <p>¿Estás seguro de que quieres eliminar este paciente?</p>
      <button @click="eliminarPaciente" class="btn btn-danger">Eliminar</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'EliminarPaciente',
    props: ['id'],
    methods: {
      eliminarPaciente() {
        axios.delete(`http://127.0.0.1:8000/api/pacientes/${this.id}`)
          .then(() => {
            this.$emit('eliminado');
          })
          .catch(error => {
            console.error('Error eliminando el paciente:', error);
          });
      }
    }
  };
  </script>
  