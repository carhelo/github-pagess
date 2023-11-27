<template>
    <div class="wrapper">
      <header class="header-mobile">
        <h1 class="logo">Sistema Integral Preuniversitario</h1>
        <button class="open-menu" id="open-menu">
          <i class="bi bi-list"></i>
        </button>
      </header>
      <aside>
        <button class="close-menu" id="close-menu">
          <i class="bi bi-x"></i>
        </button>
        <header>
          <img src="./img/SIP.jpg" alt="SistemaIntegralPreuniversitario">
        </header>
        <nav>
          <ul class="menu">
            <li>
              <router-link to="/" class="boton-menu boton-categoria" :class="{ active: $route.path === '/' }">
              - Página Principal
              </router-link>
            </li>
            <li>
              <router-link to="/grados" class="boton-menu boton-categoria" :class="{ active: $route.path === '/grados' }">
              - Grados
              </router-link>
            </li>
            <li>
              <router-link to="/eventos" class="boton-menu boton-categoria" :class="{ active: $route.path === '/eventos' }">
              - Cursos y Eventos
              </router-link>
            </li>
            <li>
              <router-link to="/secundaria" class="boton-menu boton-categoria" :class="{ active: $route.path === '/secundaria' }">
              - Secundaria Premium
              </router-link>
            </li>
            <li>
              <router-link to="/tutores" class="boton-menu boton-categoria" :class="{ active: $route.path === '/tutores' }">
              - Nuestros Tutores
              </router-link>
            </li>
            <li>
              <a class="boton-menu boton-carrito" href="src/tareas.html">
                Comprar Cursos <span id="numerito" class="numerito">0</span>
              </a>
            </li>
          </ul>
        </nav>
        <footer>
          <p class="texto-footer">Univ Duran Garcia <br> Carlos Gabriel</p>
        </footer>
      </aside>
      <main>
        <router-view></router-view>
        <h2 class="titulo-principal" id="titulo-principal">{{ $route.meta.title || 'Inscribete Ya!!!' }}</h2>
        <div id="contenedor-productos" class="contenedor-productos">
          <!-- Esto se va a rellenar con JS -->
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import router from './router';
  export default {
    mounted() {
      const scriptToastify = document.createElement('script');
      scriptToastify.src = 'https://cdn.jsdelivr.net/npm/toastify-js';
      scriptToastify.async = true;
      document.body.appendChild(scriptToastify);
  
      const scriptMain = document.createElement('script');
      scriptMain.src = './js/main.js';
      scriptMain.async = true;
      document.body.appendChild(scriptMain);
  
      const scriptMenu = document.createElement('script');
      scriptMenu.src = './js/menu.js';
      scriptMenu.async = true;
      document.body.appendChild(scriptMenu);
    },
    router,
  };
  </script>
  
  <style>
  @import './style.css';
  </style>  