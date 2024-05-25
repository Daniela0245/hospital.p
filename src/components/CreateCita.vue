<template>
  <div>
   <div class="container-fluid bg-yellow p-2 d-flex justify-content-end">
     <button @click="irAInicio" class="btn btn-primary">Inicio</button>
   </div>
   <div class="container" style="background-color: #808080;">    
     <h1 class="text-center mb-4">Crear Cita</h1>
     <form @submit.prevent="guardarCita">
       <div class="form-group">
         <label for="paciente_id" class="form-label">Paciente:</label>
         <select class="form-select" v-model="cita.paciente_id" required>
           <option disabled value="">Seleccione un paciente</option>
           <option v-for="paciente in pacientes" :key="paciente.id" :value="paciente.id">
             {{ paciente.nombre }}
           </option>
         </select>
       </div>
 
       <div class="form-group">
         <label for="medico_id" class="form-label">Médico:</label>
         <select class="form-select" v-model="cita.medico_id" required>
           <option disabled value="">Seleccione un médico</option>
           <option v-for="medico in medicos" :key="medico.id" :value="medico.id">
             {{ medico.nombre }}
           </option>
         </select>
       </div>
 
       <div class="row">
         <div class="col-md-6">
           <div class="form-group">
             <label for="tipo" class="form-label">Tipo:</label>
             <select class="form-select" v-model="cita.tipo" required>
               <option disabled value="">Seleccione un tipo</option>
               <option v-for="tipo in tipos" :key="tipo.value" :value="tipo.value">{{ tipo.label }}</option>
             </select>
           </div>
         </div>
         <div class="col-md-6">
           <div class="form-group">
             <label for="estado" class="form-label">Estado:</label>
             <select class="form-select" v-model="cita.estado" required>
               <option disabled value="">Seleccione un estado</option>
               <option v-for="estado in estados" :key="estado.value" :value="estado.value">{{ estado.label }}</option>
             </select>
           </div>
         </div>
       </div>
 
       <div class="form-group">
         <label for="fecha_hora" class="form-label">Fecha y Hora:</label>
         <input class="form-control" type="datetime-local" v-model="cita.fecha_hora" required>
       </div>
 
       <div class="d-grid">
         <button class="btn btn-primary btn-lg" type="submit">Guardar</button>
         <button class="btn btn-secondary btn-lg mt-3" @click.prevent="cancelar">Cancelar</button>
       </div>
     </form>
   </div>
  </div>
 </template>
 
 <script>
 import axios from 'axios';
 import Swal from 'sweetalert2';
 
 export default {
   name: 'CrearCita',
   data() {
     return {
       cita: {
         paciente_id: '',
         medico_id: '',
         tipo: '',
         estado: '',
         fecha_hora: ''
       },
       pacientes: [],
       medicos: [],
       tipos: [
         { value: 'consulta', label: 'Consulta' },
         { value: 'revision', label: 'Revisión' },
         { value: 'urgencia', label: 'Urgencia' }
       ],
       estados: [
         { value: 'programada', label: 'Programada' },
         { value: 'completada', label: 'Completada' },
         { value: 'cancelada', label: 'Cancelada' }
       ]
     };
   },
   methods: {
     cancelar() {
       this.$router.push({ name: 'Citas' });
     },
     async guardarCita() {
       try {
         const res = await axios.post('http://127.0.0.1:8000/api/citas/', this.cita);
         if (res.status === 201) { // Es mejor comprobar si se creó (201 Created)
           this.$router.push({ name: 'Citas' });
           Swal.fire({
             position: 'top-end',
             icon: 'success',
             title: 'Cita guardada exitosamente',
             showConfirmButton: false,
             timer: 2000
           });
         }
       } catch (error) {
         console.error('Error creando la cita:', error);
         Swal.fire({
           icon: 'error',
           title: 'Error',
           text: 'No se pudo guardar la cita. Por favor, intente de nuevo.'
         });
       }
     },
     async mounted() {
       try {
         const resPacientes = await axios.get('http://127.0.0.1:8000/api/pacientes/');
         this.pacientes = resPacientes.data.pacientes;
         const resMedicos = await axios.get('http://127.0.0.1:8000/api/medicos/');
         this.medicos = resMedicos.data.medicos;
       } catch (error) {
         console.error('Error cargando pacientes y médicos:', error);
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
 