<template>
    <div class="container">
      <h1>Listado de Tratamientos</h1>
      <router-link to="/tratamientos/create" class="btn btn-primary mb-3">Crear Tratamiento</router-link>
  
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Fecha de Facturación</th>
            <th scope="col">Total</th>
            <th scope="col">Estado</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(tratamiento, index) in tratamientos" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ tratamiento.fecha_facturacion }}</td>
            <td>{{ tratamiento.total }}</td>
            <td>{{ tratamiento.estado }}</td>
            <td>
              <button @click="editarTratamiento(tratamiento.id)" class="btn btn-warning">Editar</button>
              <button @click="eliminarTratamiento(tratamiento.id)" class="btn btn-danger">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: 'Tratamientos',
    data() {
      return {
        tratamientos: []
      };
    },
    mounted() {
      this.fetchTratamientos();
    },
    methods: {
      fetchTratamientos() {
        axios
          .get('http://127.0.0.1:8000/api/tratamientos')
          .then(response => {
            this.tratamientos = response.data.tratamientos;
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      },
      editarTratamiento(id) {
        this.$router.push({ name: 'EditarTratamiento', params: { id: id } });
      },
      eliminarTratamiento(id) {
        axios.delete(`http://127.0.0.1:8000/api/tratamientos/${id}`)
          .then(() => {
            this.fetchTratamientos();
          })
          .catch(error => {
            console.error('Error eliminando el tratamiento:', error);
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
  