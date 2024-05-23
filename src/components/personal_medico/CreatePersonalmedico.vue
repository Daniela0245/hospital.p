<template>
    <div class="container">
      <h1>Crear Personal Médico</h1>
      <form @submit.prevent="guardarPersonalMedico">
        <div class="form-group">
          <label for="nombre" class="form-label">Nombre:</label>
          <input type="text" v-model="personalMedico.nombre" class="form-control" id="nombre" required>
        </div>
  
        <div class="form-group">
          <label for="apellido" class="form-label">Apellido:</label>
          <input type="text" v-model="personalMedico.apellido" class="form-control" id="apellido" required>
        </div>
  
        <div class="form-group">
          <label for="especialidad" class="form-label">Especialidad:</label>
          <input type="text" v-model="personalMedico.especialidad" class="form-control" id="especialidad" required>
        </div>
  
        <div class="form-group">
          <label for="horario" class="form-label">Horario:</label>
          <input type="text" v-model="personalMedico.horario" class="form-control" id="horario" required>
        </div>
  
        <div>
          <button class="btn btn-primary" type="submit">Guardar</button>
          <button class="btn btn-secondary mx-2" @click.prevent="cancelar">Cancelar</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import Swal from 'sweetalert2';
  
  export default {
    name: 'CrearPersonalMedico',
    data() {
      return {
        personalMedico: {
          nombre: '',
          apellido: '',
          especialidad: '',
          horario: ''
        }
      };
    },
    methods: {
      cancelar() {
        this.$router.push({ name: 'PersonalMedico' });
      },
      async guardarPersonalMedico() {
        try {
          const res = await axios.post('http://127.0.0.1:8000/api/personal_medico', this.personalMedico);
          if (res.status === 201) {
            this.$router.push({ name: 'PersonalMedico' });
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Personal médico guardado exitosamente',
              showConfirmButton: false,
              timer: 2000
            });
          }
        } catch (error) {
          console.error('Error creando el personal médico:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudo guardar el personal médico. Por favor, intente de nuevo.'
          });
        }
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
  