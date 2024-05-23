<template>
  <div class="container">
    <h1>Editar Paciente</h1>
    <form @submit.prevent="updatePaciente">
      <div class="form-group">
        <label for="nombre" class="form-label">Nombre:</label>
        <input type="text" v-model="paciente.nombre" class="form-control" id="nombre" required>
      </div>
      <div class="form-group">
        <label for="apellido" class="form-label">Apellido:</label>
        <input type="text" v-model="paciente.apellido" class="form-control" id="apellido" required>
      </div>
      <div class="form-group">
        <label for="fecha_nacimiento" class="form-label">Fecha de Nacimiento:</label>
        <input type="date" v-model="paciente.fecha_nacimiento" class="form-control" id="fecha_nacimiento" required>
      </div>
      <div class="form-group">
        <label for="sexo" class="form-label">Sexo:</label>
        <select class="form-select" v-model="paciente.sexo" id="sexo" required>
          <option disabled value="">Seleccione un sexo</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
        </select>
      </div>
      <div class="form-group">
        <label for="direccion" class="form-label">Dirección:</label>
        <input type="text" v-model="paciente.direccion" class="form-control" id="direccion" required>
      </div>
      <div class="form-group">
        <label for="telefono" class="form-label">Teléfono:</label>
        <input type="text" v-model="paciente.telefono" class="form-control" id="telefono" required>
      </div>
      <div class="form-group">
        <label for="email" class="form-label">Email:</label>
        <input type="email" v-model="paciente.email" class="form-control" id="email" required>
      </div>
      <button class="btn btn-primary" type="submit">Actualizar</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  name: 'EditarPaciente',
  data() {
    return {
      paciente: {
        nombre: '',
        apellido: '',
        fecha_nacimiento: '',
        sexo: '',
        direccion: '',
        telefono: '',
        email: ''
      }
    };
  },
  mounted() {
    this.obtenerDatosPaciente();
  },
  methods: {
    obtenerDatosPaciente() {
      const pacienteId = this.$route.params.id;
  axios
    .get(`http://127.0.0.1:8000/api/pacientes/${pacienteId}`)
    .then(response => {
      this.paciente = response.data.paciente;
    })
    .catch(error => {
      if (error.response.status === 404) {
        console.error('El paciente no se encontró en el servidor.');
      } else {
        console.error('Error obteniendo datos del paciente:', error);
      }
    });
    },
    updatePaciente() {
      const pacienteId = this.$route.params.id;
      axios
        .put(`/api/pacientes/${pacienteId}`, this.paciente)
        .then(() => {
          this.$router.push({ name: 'pacientes.index' });
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Paciente actualizado exitosamente',
            showConfirmButton: false,
            timer: 2000
          });
        })
        .catch(error => {
          console.error('Error actualizando el paciente:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudo actualizar el paciente. Por favor, intente de nuevo.'
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
