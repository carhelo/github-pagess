<template>
  <h1>Grados de Escolaridad</h1>
  <table>
    <tr>
      <td>
        <div class="card">
          <div class="circle"></div>
          <div class="content">
          <br>
            <h3>Primero de <br> Secundaria</h3> <br>
            <p>
              CONTENIDO <br>
              - Matemáticas <br>
              - Física <br>
              - Química <br>
              - Informática <br>
            </p>
            <a href="#">Descargar</a>
          </div>
          <img src="../img/imagen1.jpg" alt="">
        </div>
      </td>
      
      <td>
        <div class="card">
          <div class="circle"></div>
          <div class="content">
            <br>
            <h3>Segundo de <br> Secundaria</h3> <br>
            <p>
              CONTENIDO <br>
              - Matemáticas <br>
              - Física <br>
              - Química <br>
              - Informática <br>
            </p>
            <a href="#">Descargar</a>
          </div>
          <img src="../img/imagen2.jpg" alt="">
        </div>
      </td>
    </tr>
    
    <tr>
      <td>
        <div class="card">
          <div class="circle"></div>
          <div class="content">
            <br>
            <h3>Tercero de <br> Secundaria</h3> <br>
            <p>
              CONTENIDO <br>
              - Matemáticas <br>
              - Física <br>
              - Química <br>
              - Informática <br>
            </p>
            <a href="#">Descargar</a>
          </div>
          <img src="../img/imagen3.jpg" alt="">
        </div>
      </td>
      
      <td>
        <div class="card">
          <div class="circle"></div>
          <div class="content">
            <br>
            <h3>Cuarto de <br> Secundaria</h3> <br>
            <p>
              CONTENIDO <br>
              - Matemáticas <br>
              - Física <br>
              - Química <br>
              - Informática <br>
            </p>
            <a href="#">Descargar</a>
          </div>
          <img src="../img/imagen4.jpg" alt="">
        </div>
      </td>
    </tr>
    
    <tr>
      <td>
        <div class="card">
          <div class="circle"></div>
          <div class="content">
            <br>
            <h3>Quinto de <br> Secundaria</h3> <br>
            <p>
              CONTENIDO <br>
              - Matemáticas <br>
              - Física <br>
              - Química <br>
              - Informática <br>
            </p>
            <a href="#">Descargar</a>
          </div>
          <img src="../img/imagen5.jpg" alt="">
        </div>
      </td>
      
      <td>
        <div class="card">
          <div class="circle"></div>
          <div class="content">
            <br>
            <h3>Sexto de <br> Secundaria</h3> <br>
            <p>
              CONTENIDO <br>
              - Matemáticas <br>
              - Física <br>
              - Química <br>
              - Informática <br>
            </p>
            <a href="#">Descargar</a>
          </div>
          <img src="../img/imagen6.jpg" alt="">
        </div>
      </td>
    </tr>
  </table>

</template>

<script>
export default {
  mounted() {
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