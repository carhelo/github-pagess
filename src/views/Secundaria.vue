<template>
  <h1>Cursos de Pago</h1>
  <div>
    <div v-for="(item, index) in items" :key="index" class="container">
      <div class="content" :class="{ 'reverse-order': index % 2 !== 0 }">
        <img :src="item.imageUrl" alt="Imagen" class="image" />
        <div class="text">
          <h2>{{ item.title }}</h2>
          <p>{{ item.description }}</p>
          <h2>{{ item.precio }}</h2>
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
          imageUrl: "src/img/cursosecundaria1.jpg",
          title: "Fundamentos de Programacion",
          description: "Domina la programación desde cero con nuestro curso premium. Aprende los fundamentos esenciales de manera práctica y eficiente para impulsar tu carrera como programador.",
          precio: "Inversion 70 Bs"
        },
        {
          imageUrl: "src/img/cursosecundaria2.jpg",
          title: "Fundamentos de Matemática",
          description: "Explora los Fundamentos de Matemáticas con nuestro curso premium. Desde conceptos básicos hasta aplicaciones avanzadas, adquiere sólidos conocimientos matemáticos de la mano de expertos. Desarrolla habilidades esenciales para resolver problemas y potencia tu comprensión de las bases matemáticas con nuestro enfoque premium en la enseñanza.",
          precio: "Inversion 120 Bs"
        },
        {
          imageUrl: "src/img/cursosecundaria3.jpg",
          title: "Fisica Para Todos",
          description: "Sumérgete en el fascinante mundo de la física con nuestro curso 'Física Para Todos'. Desde principiantes hasta entusiastas avanzados, este curso ofrece un enfoque accesible y comprensible para todos. Descubre los principios fundamentales de la física y su aplicación en la vida cotidiana. ¡Desbloquea el poder de entender el universo a tu alrededor con lecciones envolventes y ejemplos prácticos!",
          precio: "Inversion 100 Bs"
        },
        {
          imageUrl: "src/img/cursosecundaria4.jpg",
          title: "Pack de Desarrollo Creativo (6 cursos)",
          description: "Desata tu potencial creativo con nuestro exclusivo Pack de Desarrollo Creativo. Con 6 cursos especializados, explorarás desde el diseño hasta la programación creativa, potenciando tus habilidades para destacar en el mundo digital. Descubre una experiencia educativa única que fusiona la creatividad y la técnica para impulsar tu desarrollo profesional y personal.",
          precio: "Inversion 90 Bs"
        },
        {
          imageUrl: "src/img/cursosecundaria5.jpg",
          title: "Aprende a tocar Guitarra",
          description: "Descubre el arte de la música y aprende a tocar la guitarra. Desde principiantes hasta aficionados, este curso te guiará a través de las bases, acordes y técnicas esenciales. Desarrolla tu destreza musical de manera práctica y disfruta del camino hacia la maestría en la guitarra con lecciones accesibles y divertidas.",
          precio: "Inversion 90 Bs"
        },
        {
          imageUrl: "src/img/cursosecundaria6.jpg",
          title: "Edicion de Video en Premiere Pro",
          description: 
"Domina el arte de la edición de video con nuestro curso 'Edición en Premiere Pro'. Desde los conceptos básicos hasta las técnicas avanzadas, adquiere las habilidades esenciales para crear contenido visual impactante. Aprende a utilizar Premiere Pro de Adobe de manera efectiva y eleva tus proyectos audiovisuales a un nivel profesional con este curso práctico y completo.",
          precio: "Inversion 180 Bs",
          buttonText: "Más Información"
        }
      ]
    };
  },
  methods: {
    redirectToWhatsApp() {
      const phoneNumber = '+59170549700'; 
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

