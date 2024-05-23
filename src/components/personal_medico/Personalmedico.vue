<template>
    <div class="container">
      <h1>Listado de Personal Médico</h1>
      <router-link to="/personalmedico/create" class="btn btn-primary mb-3">Crear Personal Médico</router-link>
  
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Especialidad</th>
            <th>Horario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(medico, index) in personalMedico" :key="index">
            <th>{{ index + 1 }}</th>
            <td>{{ medico.nombre }}</td>
            <td>{{ medico.apellido }}</td>
            <td>{{ medico.especialidad }}</td>
            <td>{{ medico.horario }}</td>
            <td>
              <button @click="editarMedico(medico.id)" class="btn btn-warning">Editar</button>
              <button @click="eliminarMedico(medico.id)" class="btn btn-danger">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'PersonalMedicoList',
    data() {
      return {
        personalMedico: []
      };
    },
    mounted() {
      this.fetchPersonalMedico();
    },
    methods: {
      fetchPersonalMedico() {
        axios.get('http://127.0.0.1:8000/api/personal_medico')
          .then(response => {
            this.personalMedico = response.data.personal_medico;
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      },
      editarMedico(id) {
        this.$router.push({ name: 'EditarPersonalMedico', params: { id: id } });
      },
      eliminarMedico(id) {
        axios.delete(`http://127.0.0.1:8000/api/personal_medico/${id}`)
          .then(() => {
            this.fetchPersonalMedico();
          })
          .catch(error => {
            console.error('Error eliminando el personal médico:', error);
          });
      }
    }
  };
  </script>
  
  <style>
  .container {
    padding: 20px;
  }
  .table {
    width: 100%;
    margin-top: 20px;
  }
  </style>
  