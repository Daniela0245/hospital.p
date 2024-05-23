<template>
  <div class="container">
    <h1>Listado de Citas</h1>
    <!-- Botón para redirigir a la página de creación de citas -->
    <router-link to="/citas/create" class="btn btn-primary mb-3">Crear Cita</router-link>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Paciente</th>
          <th scope="col">Médico</th>
          <th scope="col">Tipo</th>
          <th scope="col">Estado</th>
          <th scope="col">Fecha y Hora</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cita, index) in citas" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ cita.paciente_nombre }}</td>
          <td>{{ cita.personal_medico_nombre }}</td>
          <td>{{ cita.tipo }}</td>
          <td>{{ cita.estado }}</td>
          <td>{{ cita.fecha_hora }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Citas',
  data() {
    return {
      citas: []
    };
  },
  mounted() {
    this.fetchCitas();
  },
  methods: {
    fetchCitas() {
      axios
        .get('http://127.0.0.1:8000/api/citas')
        .then(response => {
          this.citas = response.data.citas;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
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
