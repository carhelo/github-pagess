<template>
  <h1>Nuestro Equipo</h1>
  <div>
    <div v-for="(item, index) in items" :key="index" class="container">
      <div class="content" :class="{ 'reverse-order': index % 2 !== 0 }">
        <img :src="item.imageUrl" alt="Imagen" class="image" />
        <div class="text">
          <h2>{{ item.title }}</h2>
          <p>{{ item.description }}</p>
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
          imageUrl: "src/img/docente1.jpg",
          title: "Sergio Ramos Sandoval",
          description: "Experto informático en Python con sólida experiencia en desarrollo de software. Destacado por su habilidad para resolver problemas complejos y su profundo conocimiento de Python. Colaborador valioso en proyectos de desarrollo. "
        },
        {
          imageUrl: "src/img/docente2.jpg",
          title: "Jaime Escalante",
          description: "Reconocido educador, es conocido por su pasión contagiosa por las matemáticas. Su enfoque inspirador y métodos didácticos innovadores han llevado a sus estudiantes a logros excepcionales. Su dedicación a la enseñanza ha dejado una marca duradera en la educación matemática. "
        },
        {
          imageUrl: "src/img/docente3.jpg",
          title: "Milena Sandoval Garcia",
          description: "Destacada matemática, es reconocida por sus contribuciones innovadoras en teoría de números y geometría algebraica. Como educadora apasionada, ha inspirado a estudiantes y dejado una huella significativa en el mundo académico."
        },
        {
          imageUrl: "src/img/docente4.jpg",
          title: "Felipe E. Cruz Rondon",
          description: "Licenciado en Física con destacada experiencia en investigación y educación. Sus contribuciones innovadoras en áreas como la mecánica cuántica lo distinguen como un profesional respetado en el campo de la física."
        }
      ]
    };
  }
};
</script>



<style scoped>
  .container {
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    margin-bottom: 20px; 
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between; 
    flex-direction: row; 
  }

  .reverse-order {
    flex-direction: row-reverse;
  }

  .image {
    max-height: 300px;
    margin: 30px 30px 40px 30px; 
  }

  .text {
    flex: 1;
    margin: 30px; 
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
    padding: 10px 20px; 
    margin-top: 10px; 
  }

  @media (max-width: 768px) {
    .content {
      flex-direction: column; 
      text-align: center; 
    }

    .image {
      margin: 10px 0; 
    }
  }
</style>
  