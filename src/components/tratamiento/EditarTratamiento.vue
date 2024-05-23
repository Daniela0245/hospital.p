<template>
    <div class="container">
      <h1>Editar Tratamiento</h1>
      <form @submit.prevent="actualizarTratamiento">
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
        <button class="btn btn-primary" type="submit">Actualizar</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import Swal from 'sweetalert2';
  
  export default {
    name: 'EditarTratamiento',
    data() {
      return {
        tratamiento: {
          Id :0,
          fecha_facturacion: '',
          total: null,
          estado: ''
        }
      };
    },
    mounted() {
      this.obtenerDatosTratamiento();
    },
    methods: {
      obtenerDatosTratamiento() {
        const tratamientoId = this.$route.params.id;
        axios.get(`http://127.0.0.1:8000/api/tratamiento/${tratamientoId}`)
          .then(response => {
            this.tratamiento = response.data.tratamiento;
          })
          .catch(error => {
            console.error('Error obteniendo datos del tratamiento:', error);
          });
      },
      actualizarTratamiento() {
        const tratamientoId = this.$route.params.id;
        axios.put(`http://127.0.0.1:8000/api/tratamiento/${tratamientoId}`, this.tratamiento)
          .then(() => {
            this.$router.push({ name: 'Tratamiento' });
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Tratamiento actualizado exitosamente',
              showConfirmButton: false,
              timer: 2000
            });
          })
          .catch(error => {
            console.error('Error actualizando el tratamiento:', error);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'No se pudo actualizar el tratamiento. Por favor, intente de nuevo.'
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
  