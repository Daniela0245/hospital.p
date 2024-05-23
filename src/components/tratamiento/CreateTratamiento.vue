<template>
    <div class="container">
      <router-link to="/tratamiento/create" class="btn btn-primary mb-3">Crear Tratamiento</router-link>
      <form @submit.prevent="guardarTratamiento">
        <div class="form-group">
          <label for="fecha_facturacion" class="form-label">Fecha de Facturación:</label>
          <input type="date" v-model="tratamiento.fecha_facturacion" class="form-control" id="fecha_facturacion" required>
        </div>
        <div class="form-group">
          <label for="total" class="form-label">Total:</label>
          <input type="number" v-model="tratamiento.total" class="form-control" id="total" required>
        </div>
        <div class="form-group">
          <label for="estado" class="form-label">Estado:</label>
          <select class="form-select" v-model="tratamiento.estado" id="estado" required>
            <option disabled value="">Seleccione un estado</option>
            <option value="pendiente">Pendiente</option>
            <option value="pagada">Pagada</option>
          </select>
        </div>
        <button class="btn btn-primary" type="submit">Guardar</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import Swal from 'sweetalert2';
  
  export default {
    name: 'CreateTratamiento',
    data() {
      return {
        tratamiento: {
          fecha_facturacion: '',
          total: null,
          estado: ''
        }
      };
    },
    methods: {
      guardarTratamiento() {
        axios.post('http://127.0.0.1:8000/api/tratamientos', this.tratamiento)
          .then(() => {
            this.$router.push({ name: 'Tratamientos' });
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Tratamiento creado exitosamente',
              showConfirmButton: false,
              timer: 2000
            });
          })
          .catch(error => {
            console.error('Error creando el tratamiento:', error);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'No se pudo crear el tratamiento. Por favor, intente de nuevo.'
            });
          });
      }
    }
  };
  </script>
  
  <style>
  .container {
    padding: 20px;
  }
  .form-group {
    margin-bottom: 15px;
  }
  </style>
  