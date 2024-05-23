<template>
  <div class="container">
    <h1>Listado de Pacientes</h1>
    <router-link to="/pacientes/create" class="btn btn-primary mb-3">Crear Paciente</router-link>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Fecha de Nacimiento</th>
          <th scope="col">Sexo</th>
          <th scope="col">Dirección</th>
          <th scope="col">Teléfono</th>
          <th scope="col">Email</th>
          <th scope="col">Acciones</th> <!-- Agregar columna de acciones -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="(paciente, index) in pacientes" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ paciente.nombre }}</td>
          <td>{{ paciente.apellido }}</td>
          <td>{{ paciente.fecha_nacimiento }}</td>
          <td>{{ paciente.sexo }}</td>
          <td>{{ paciente.direccion }}</td>
          <td>{{ paciente.telefono }}</td>
          <td>{{ paciente.email }}</td>
          <td>
            <button @click="editarPaciente(paciente.id)" class="btn btn-warning">Editar</button>
            <button @click="eliminarPaciente(paciente.id)" class="btn btn-danger">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Pacientes',
  data() {
    return {
      pacientes: []
    };
  },
  mounted() {
    this.fetchPacientes();
  },
  methods: {
    fetchPacientes() {
      axios
        .get('http://127.0.0.1:8000/api/pacientes')
        .then(response => {
          this.pacientes = response.data.pacientes;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
    editarPaciente(id) {
  console.log(id); // Verifica si el ID se está pasando correctamente
  this.$router.push({ name: 'EditarPaciente', params: { id: id } });
},
    eliminarPaciente(id) {
      axios.delete(`http://127.0.0.1:8000/api/pacientes/${id}`)
        .then(() => {
          // Eliminación exitosa, puedes actualizar la lista de pacientes si es necesario
          this.fetchPacientes();
        })
        .catch(error => {
          console.error('Error eliminando el paciente:', error);
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
