<template>
  <h1>Cursos y Eventos Gratuitos</h1>
    <div>
      <div v-for="(item, index) in items" :key="index" class="container">
        <div class="content" :class="{ 'reverse-order': index % 2 !== 0 }">
          <img :src="item.imageUrl" alt="Imagen" class="image" />
          <div class="text">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <button @click="redirectToWhatsApp">Más Información</button>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script>
  export default {
  mounted() {
    const scriptToastify = document.createElement('script');
    scriptToastify.src = 'https://cdn.jsdelivr.net/npm/toastify-js';
    scriptToastify.async = true;
    document.body.appendChild(scriptToastify);
  },
  data() {
    return {
      items: [
        {
          imageUrl: "src/img/premium1.png",
          title: "Curso de Nivelacion en Matemáticas",
          description: "Incribete a este curso de nivelacion en los que contamos con los mejores docentes con excelente trayectoria y la mejor estadistica de estudiantes aprobados, del 5 agosto al 5 de diciembre, Cupos limitados. Inscribete!!!  "
        },
        {
          imageUrl: "src/img/premium2.jpg",
          title: "Preuniversitario FHCE",
          description: "La Universidad Mayor de San Andres invita a toda la poblacion estudiantil al curso preuniversitario de la facultad de humanidades y ciencias de la educacion, en sus areas de estudio Archivologia, Bibliotecologia y documentacion, Museologia "
        },
        {
          imageUrl: "src/img/premium3.jpg",
          title: "Preuniversitario UNANDES",
          description: "Preparate para estudiar en nuestros modernos ambientes, contamos con todo lo necesario para que refuerces tu aprendizaje y te conviertas en un gran profesional."
        },
        {
          imageUrl: "src/img/premium4.jpg",
          title: "Instituto Pitagoras",
          description: "Reforzamiento para estudiantes en todos los grados de escolaridad, no importa la edad, contactanos para una atencion personalizada."
        },
        {
          imageUrl: "src/img/premium5.jpg",
          title: "Examen de Dispensacion Informatica",
          description: "La Universidad Mayor de San Andres invita a toda la poblacion estudiantil al examen de dispensacion de la facultad de ciencias puras y naturales, carrera con un pensum renovado y 7 nuevas menciones. "
        },
        {
          imageUrl: "src/img/premium6.jpg",
          title: "Seminario de Inducción para Ingresantes a la Facultad de Ciencias Puras y Naturales (FCPN) - U.M.S.A.",
          description: "Evento virtual de inducción para nuevos estudiantes de la Facultad de Ciencias Puras y Naturales (FCPN) en la Universidad Mayor de San Andrés (U.M.S.A.). Descubre detalles sobre inscripciones, becas, servicios médicos, plataformas educativas y más. Organizado por el MgSc. Aldo Valdez Alvarado, el seminario aborda temas esenciales el viernes 30 de julio a las 18:00, transmitido en vivo por Facebook. ¡Únete para iniciar tu viaje académico con información clave!",
          buttonText: "Más Información"
        }
      ]
    };
  },
  methods: {
    redirectToWhatsApp() {
      const phoneNumber = '+59170549700'; // Ajusta el número de WhatsApp
      const message = 'Hola, estoy interesado en obtener más información.';
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappURL, '_blank');
    }
  }
};
</script>



<style scoped>
  .container {
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    margin-bottom: 20px; /* Espacio entre los bloques */
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between; /* Alinear contenido alrededor del botón */
    flex-direction: row; /* Diseño predeterminado en pantallas grandes */
  }

  .reverse-order {
    flex-direction: row-reverse;
  }

  .image {
    max-height: 300px;
    margin: 30px 30px 40px 30px; /* Espacio entre la imagen y el texto, con más espacio arriba y abajo */
  }

  .text {
    flex: 1;
    margin: 30px; /* Espacio alrededor del bloque de texto */
  }

  h2 {
    margin: 0 0 5px 0;
  }

  p {
    margin: 0;
  }

  button {
    background-color: #004996;
    color: #ffffff;
    padding: 10px 20px; /* Ajuste del espaciado del botón */
    margin-top: 10px; /* Espaciado entre el texto y el botón */
  }

  @media (max-width: 768px) {
    .content {
      flex-direction: column; /* Cambio de dirección en dispositivos móviles */
      text-align: center; /* Alineación central en dispositivos móviles */
    }

    .image {
      margin: 10px 0; /* Espaciado entre la imagen y el texto en dispositivos móviles */
    }
  }
</style>