<template>
  <div class="home">
    <div class="content">
      <div class="text">
        <h2>Bienvenido a la Administración para Hospitales</h2>
        <p>
          Con nuestra aplicación, podrás llevar a cabo todas las operaciones necesarias para la gestión eficiente de tu centro médico. Desde la administración de pacientes hasta la coordinación del personal médico, pasando por la gestión de citas médicas, tratamientos y facturación, todo está cubierto.
        </p>
        <p>
          Con un diseño intuitivo y amigable, podrás acceder y gestionar la información de pacientes, programar citas médicas de manera eficiente, asignar tratamientos específicos y llevar un seguimiento detallado de la facturación. Además, nuestro sistema está diseñado para proporcionar una experiencia fluida y segura, garantizando la confidencialidad y privacidad de los datos sensibles de los pacientes y la información crítica del hospital.
        </p>
        <p>
          Ya sea que estés administrando un pequeño consultorio médico o una gran institución hospitalaria, nuestro sistema está diseñado para adaptarse a tus necesidades específicas y simplificar tus procesos administrativos. Únete a nosotros y descubre cómo nuestro sistema de administración hospitalaria puede optimizar la eficiencia y mejorar la atención médica en tu institución.
        </p>
      </div>
      <div class="image">
        <img src="../assets/ula.png" alt="Imagen" style="max-width: 100%; max-height: 400px;">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.home {
  padding: 20px;
  background-color: #e0e7ff; /* Fondo gris azulado */
  color: #333;
}

.content {
  display: flex;
  justify-content: space-between;
}

.text {
  flex: 1;
  margin-right: 20px; /* Margen a la derecha para separar del contenido de la imagen */
  text-align: justify; /* Justifica el texto */
}

.image img {
  max-width: 100%;
  max-height: 300px; /* Altura máxima deseada para la imagen */
}
</style>
