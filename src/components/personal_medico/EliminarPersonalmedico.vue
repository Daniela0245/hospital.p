<template>
    <div>
      <h2>Eliminar Personal Médico</h2>
      <p>¿Estás seguro de que quieres eliminar este personal médico?</p>
      <button @click="eliminarMedico" class="btn btn-danger">Eliminar</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import Swal from 'sweetalert2';
  
  export default {
    name: 'EliminarPersonalMedico',
    props: ['id'],
    methods: {
      eliminarMedico() {
        Swal.fire({
          title: '¿Estás seguro?',
          text: "¡No podrás revertir esto!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sí, eliminarlo'
        }).then((result) => {
          if (result.isConfirmed) {
            axios.delete(`http://127.0.0.1:8000/api/personal_medico/${this.id}`)
              .then(() => {
                Swal.fire(
                  'Eliminado!',
                  'El personal médico ha sido eliminado.',
                  'success'
                );
                this.$emit('eliminado');
                this.$router.push({ name: 'PersonalMedicoList' });
              })
              .catch(error => {
                console.error('Error eliminando el personal médico:', error);
                Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: 'No se pudo eliminar el personal médico. Por favor, intente de nuevo.'
                });
              });
          }
        });
      }
    }
  };
  </script>
  