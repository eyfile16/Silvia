<template>
  <div class="q-pa-md">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Montserrat:wght@500;700&display=swap" rel="stylesheet">
    
    <q-layout view="hHh Lpr lff" container class="shadow-2 full-height">
      <div class="background-movement"></div>

      <q-page-container class="page-container">
        <div class="catalogo">
          <h1 class="titulo-catalogo">Catálogo de Productos</h1>
          <div class="productos">
            <div
              v-for="producto in productos"
              :key="producto.id"
              class="producto-card"
            >
              <img :src="producto.imagen" alt="Producto" class="producto-imagen" />
              <h2 class="producto-nombre">{{ producto.nombre }}</h2>
              <p class="producto-descripcion">{{ producto.descripcion }}</p>
              <p class="producto-precio">${{ producto.precio.toFixed(2) }}</p>
              <button @click="showDetails(producto)">Detalles</button>
            </div>
          </div>
        </div>

        <!-- Card de detalles -->
        <div v-if="selectedProducto" class="details-card">
          <div class="details-content">
            <h3>Detalles</h3>
            <div class="detail-images">
              <img :src="selectedProducto.imagen1" alt="Detalle 1" class="detail-image" />
              <img :src="selectedProducto.imagen2" alt="Detalle 2" class="detail-image" />
            </div>
            <p>{{ selectedProducto.descripcionDetalles }}</p>
            <button @click="closeDetails">Cerrar</button>
          </div>
        </div>

        <div v-if="showContact" class="contact-footer">
          <p>Contacto: contacto@hotelsuenosdorados.com</p>
          <p>Hotel Sueños Dorados</p>
        </div>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const productos = ref([
  { id: 1, nombre: 'Producto 1', precio: 29.99, imagen: 'https://via.placeholder.com/150', imagen1: 'https://via.placeholder.com/200', imagen2: 'https://via.placeholder.com/200', descripcionDetalles: 'vela1' },
  { id: 2, nombre: 'Producto 2',  precio: 39.99, imagen: 'https://via.placeholder.com/150', imagen1: 'https://via.placeholder.com/200', imagen2: 'https://via.placeholder.com/200', descripcionDetalles: '' },
  { id: 3, nombre: 'Producto 3',  precio: 49.99, imagen: 'https://via.placeholder.com/150', imagen1: 'https://via.placeholder.com/200', imagen2: 'https://via.placeholder.com/200', descripcionDetalles: 'Detalles del producto 3' },
  { id: 4, nombre: 'Producto 4', precio: 19.99, imagen: 'https://via.placeholder.com/150', imagen1: 'https://via.placeholder.com/200', imagen2: 'https://via.placeholder.com/200', descripcionDetalles: 'Detalles del producto 4' },
  { id: 5, nombre: 'Producto 5', precio: 59.99, imagen: 'https://via.placeholder.com/150', imagen1: 'https://via.placeholder.com/200', imagen2: 'https://via.placeholder.com/200', descripcionDetalles: 'Detalles del producto 5' },
  { id: 6, nombre: 'Producto 6',  precio: 24.99, imagen: 'https://via.placeholder.com/150', imagen1: 'https://via.placeholder.com/200', imagen2: 'https://via.placeholder.com/200', descripcionDetalles: 'Detalles del producto 6' },
  { id: 7, nombre: 'Producto 7',  precio: 34.99, imagen: 'https://via.placeholder.com/150', imagen1: 'https://via.placeholder.com/200', imagen2: 'https://via.placeholder.com/200', descripcionDetalles: 'Detalles del producto 7' },
  { id: 8, nombre: 'Producto 8', precio: 44.99, imagen: 'https://via.placeholder.com/150', imagen1: 'https://via.placeholder.com/200', imagen2: 'https://via.placeholder.com/200', descripcionDetalles: 'Detalles del producto 8' },
  { id: 9, nombre: 'Producto 9',  precio: 39.99, imagen: 'https://via.placeholder.com/150', imagen1: 'https://via.placeholder.com/200', imagen2: 'https://via.placeholder.com/200', descripcionDetalles: 'Detalles del producto 9' },
  { id: 10, nombre: 'Producto 10', precio: 29.99, imagen: 'https://via.placeholder.com/150', imagen1: 'https://via.placeholder.com/200', imagen2: 'https://via.placeholder.com/200', descripcionDetalles: 'Detalles del producto 10' },
]);

const showContact = ref(false);
const selectedProducto = ref(null);

const showDetails = (producto) => {
  selectedProducto.value = producto;
};

const closeDetails = () => {
  selectedProducto.value = null;
};

const checkScroll = () => {
  const pageContainer = document.querySelector('.page-container');

  if (pageContainer.scrollHeight - pageContainer.scrollTop <= pageContainer.clientHeight + 10) {
    showContact.value = true;
  } else {
    showContact.value = false;
  }
};

onMounted(() => {
  const pageContainer = document.querySelector('.page-container');
  pageContainer.addEventListener('scroll', checkScroll);
});

onBeforeUnmount(() => {
  const pageContainer = document.querySelector('.page-container');
  pageContainer.removeEventListener('scroll', checkScroll);
});
</script>

<style scoped>
.q-pa-md {
  padding: 0;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.shadow-2 {
  box-shadow: none;
}

.full-height {
  height: 100vh;
}

.background-movement {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(270deg, #7200a2, #9a0000, #001c80);
  background-size: 600% 600%;
  animation: backgroundMovement 10s ease infinite;
  z-index: -1;
}

.page-container {
  padding: 20px;
  z-index: 1;
}

.catalogo {
  text-align: center;
}

.titulo-catalogo {
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #FFD700;
}

.productos {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.producto-card {
  background: rgb(53, 51, 51);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.producto-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}

.producto-imagen {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.producto-nombre {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  margin: 10px 0;
  color: #FFD700;
}

.producto-descripcion,
.producto-precio {
  font-size: 1.1rem;
  margin: 10px 0;
  color: #FFFFFF;
}

button {
  font-family: 'Roboto', sans-serif;
  background-color: #FFD700;
  color: #333;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

button:hover {
  background-color: #FFC107;
  transform: scale(1.05);
}

.details-card {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  padding: 20px;
  z-index: 100;
  width: 80%; /* Cambia este valor para hacer la card más ancha */
  max-width: 600px; /* Limitar el tamaño máximo */
}

.details-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.details-content h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
}

.details-content p {
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  margin: 10px 0;
}

.detail-images {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.detail-image {
  width: 48%;
  border-radius: 10px;
}

.contact-footer {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.9);
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  z-index: 100;
}

@keyframes backgroundMovement {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Media Queries para aumentar tamaño en móviles */
@media (max-width: 600px) {
  .details-card {
    width: 90%; /* Ajusta el ancho para pantallas pequeñas */
  }

  .producto-card {
    padding: 30px; /* Aumentar padding en móviles */
  }

  .producto-nombre {
    font-size: 1.8rem; /* Aumentar nombre en móviles */
  }

  .producto-descripcion,
  .producto-precio {
    font-size: 1.2rem; /* Aumentar descripción y precio en móviles */
  }

  .details-content h3 {
    font-size: 2.5rem; /* Aumentar tamaño de los detalles */
  }

  .details-content p {
    font-size: 1.8rem; /* Aumentar tamaño de la descripción de detalles */
  }
}
</style>
