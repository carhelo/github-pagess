<template>
  <h1>
    <div class="contenedor">
      <img src="../img/SIP.jpg" alt="Logo Fundacion">
    </div>
    Misión
  </h1>
    <p>
      Proporcionar a los estudiantes de 1ro a 6to de secundaria todas las herramientas y 
      materiales educativos necesarios para ayudarlos a alcanzar su máximo potencial
      y asi tener un nivel educativo muy alto al momento de ingresar a la Universidad.  <br>
      Nos esforzamos por brindar acceso a información complementaria, como tutores particulares, 
      cursos extra, seminarios, pdfs y eventos que puedan ser de interés para el cuerpo estudiantil.
    </p>
  <h1>
    Visión
  </h1>
  <p>
    Formar una comunidad educativa inclusiva y accesible que empodere a los estudiantes de 1ro a 6to
    de secundaria para que alcancen sus metas académicas y personales. <br>
    Nos esforzamos por ser líderes en la educación y el desarrollo de los estudiantes,
    y esperamos inspirar a otros a seguir nuestro ejemplo.
  </p>
<br>
</template>

<script>
export default {
  mounted() {
    // Enlaza los archivos JavaScript aquí una vez que el componente se haya montado.
    const scriptToastify = document.createElement('script');
    scriptToastify.src = 'https://cdn.jsdelivr.net/npm/toastify-js';
    scriptToastify.async = true;
    document.body.appendChild(scriptToastify);
  },
};
</script>

<style scoped>
  @import '../style2.css';
</style>
