<template>
    <div class="container">
      <h1>Editar Personal Médico</h1>
      <form @submit.prevent="updateMedico">
        <div class="form-group">
          <label for="id" class="form-label">id</label>
          <input type="text" v-model="medico.id" class="form-control" id="id" required>
        </div>
        <div class="form-group">
          <label for="nombre" class="form-label">Nombre:</label>
          <input type="text" v-model="medico.nombre" class="form-control" id="nombre" required>
        </div>
        <div class="form-group">
          <label for="apellido" class="form-label">Apellido:</label>
          <input type="text" v-model="medico.apellido" class="form-control" id="apellido" required>
        </div>
        <div class="form-group">
          <label for="especialidad" class="form-label">Especialidad:</label>
          <input type="text" v-model="medico.especialidad" class="form-control" id="especialidad" required>
        </div>
        <div class="form-group">
          <label for="horario" class="form-label">Horario:</label>
          <input type="text" v-model="medico.horario" class="form-control" id="horario" required>
        </div>
        <button class="btn btn-primary" type="submit">Actualizar</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import Swal from 'sweetalert2';
  
  export default {
    name: 'EditarPersonalMedico',
    data() {
      return {
        medico: {
          id:0,
          nombre: '',
          apellido: '',
          especialidad: '',
          horario: ''
        }
      };
    },
    mounted() {
      this.obtenerDatosMedico();
    },
    methods: {
      obtenerDatosMedico() {
        const medicoId = this.$route.params.id;
        axios
          .get(`http://127.0.0.1:8000/api/personalmedico/${medicoId}`)
          .then(response => {
            this.medico = response.data.personal_medico;
          })
          .catch(error => {
            if (error.response.status === 404) {
              console.error('El personal médico no se encontró en el servidor.');
            } else {
              console.error('Error obteniendo datos del personal médico:', error);
            }
          });
      },
      updateMedico() {
        const medicoId = this.$route.params.id;
        axios
          .put(`http://127.0.0.1:8000/api/personalmedico/${medicoId}`, this.medico)
          .then(() => {
            this.$router.push({ name: 'Personalmedico' });
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Personal médico actualizado exitosamente',
              showConfirmButton: false,
              timer: 2000
            });
          })
          .catch(error => {
            console.error('Error actualizando el personal médico:', error);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'No se pudo actualizar el personal médico. Por favor, intente de nuevo.'
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
  