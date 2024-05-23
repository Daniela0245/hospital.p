import { createRouter, createWebHistory } from 'vue-router';
import Citas from '../components/Cita.vue';
import CreateCita from '../components/CreateCita.vue';
import Paciente from '../components/pacientes/Paciente.vue';
import CreatePaciente from '../components/pacientes/CreatePaciente.vue';
import EditarPaciente from '../components/pacientes/EditarPaciente';
import EliminarPaciente from '../components/pacientes/EliminarPaciente';
import Personalmedico from '../components/personal_medico/Personalmedico.vue';
import CreatePersonalmedico from '../components/personal_medico/CreatePersonalmedico.vue';
import EditarPersonalmedico from '../components/personal_medico/EditarPersonalmedico.vue';
import EliminarPersonalmedico from '../components/personal_medico/EliminarPersonalmedico.vue';
import Tratamiento from  '../components/tratamiento/Tratamiento.vue';
import CreateTratamiento from '../components/tratamiento/CreateTratamiento.vue';
import EditarTratamiento from '../components/tratamiento/EditarTratamiento.vue';
import EliminarTratamiento from '../components/tratamiento/EliminarTratamiento.vue';

const routes = [
  { path: '/citas', name: 'Citas', component: Citas },
  { path: '/citas/create', name: 'CreateCita', component: CreateCita },
  { path: '/pacientes', name: 'Paciente', component: Paciente },
  { path: '/pacientes/create', name: 'CreatePaciente', component: CreatePaciente},
  { path: '/pacientes/:id/edit', name: 'EditarPaciente', component: EditarPaciente},
  { path: '/pacientes/eliminar', name: 'EliminarPaciente', component: EliminarPaciente},
  { path: '/personalmedico', name: 'Personalmedico', component: Personalmedico},
  { path: '/personal_medico/create', name: 'CreatePersonalmedico', component: CreatePersonalmedico},
  { path: '/personal_medico/:id/edit', name: 'EditarPersonalmedico', component: EditarPersonalmedico},
  { path: '/personal_medico/:id/eliminar', name: 'EliminarPersonalmedico', component: EliminarPersonalmedico},
   {path: '/tratamiento', name: 'Tratamiento', component: Tratamiento },
   { path: '/tratamiento/create', name: 'CreateTratamiento', component: CreateTratamiento },
  { path: '/tratamiento/:id/edit', name: 'EditarTratamiento', component: EditarTratamiento},
  { path: '/tratamiento/eliminar', name: 'EliminarTratamiento', component: EliminarTratamiento},


 
  
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
