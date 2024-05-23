<template>
  <div>
    <div class="container-fluid bg-yellow p-2 d-flex justify-content-end">
      <button @click="irAInicio" class="btn btn-primary">Inicio</button>
    </div>
    <div class="container" style="background-color: #808080;">
      <h1 class="text-center mb-4">Crear Paciente</h1>
      <form @submit.prevent="guardarPaciente">
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

        <div>
          <button class="btn btn-primary" type="submit">Guardar</button>
          <button class="btn btn-secondary mx-2" @click.prevent="cancelar">Cancelar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  name: 'PacienteNuevo',
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
  methods: {
    cancelar() {
      this.$router.push({ name: 'Paciente' });
    },
    async guardarPaciente() {
      try {
        const res = await axios.post('http://127.0.0.1:8000/api/pacientes', this.paciente);
        if (res.status === 201) {
          this.$router.push({ name: 'Pacientes' });
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Paciente guardado exitosamente',
            showConfirmButton: false,
            timer: 2000
          });
        }
      } catch (error) {
        console.error('Error creando el paciente:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo guardar el paciente. Por favor, intente de nuevo.'
        });
      }
    },
    irAInicio() {
      this.$router.push({ name: 'Home' });
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
.bg-yellow {
  background-color: yellow;
}
</style>
