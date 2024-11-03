<template>
  <div class="catalog-container">
    <h1>Catálogo de Productos</h1>
    <div class="product-list">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.image" alt="Imagen del producto" class="product-image" />
        <h2 class="product-title">{{ product.name }}</h2>
        <p class="product-description">{{ product.description }}</p>
        <p class="product-price">${{ product.price.toFixed(2) }}</p>
        <button class="add-to-cart-btn" @click="addToCart(product)">Agregar al carrito</button>
      </div>
    </div>
    <div class="cart">
      <h2>Carrito de Compras</h2>
      <ul>
        <li v-for="item in cart" :key="item.id">
          {{ item.name }} - ${{ item.price.toFixed(2) }} (Cantidad: {{ item.quantity }})
        </li>
      </ul>
      <p v-if="cart.length === 0">El carrito está vacío.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const products = ref([
  { id: 1, name: 'Producto 1', description: 'Descripción del producto 1', price: 10.99, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Producto 2', description: 'Descripción del producto 2', price: 12.49, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Producto 3', description: 'Descripción del producto 3', price: 8.99, image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Producto 4', description: 'Descripción del producto 4', price: 15.00, image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Producto 5', description: 'Descripción del producto 5', price: 5.75, image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Producto 6', description: 'Descripción del producto 6', price: 9.99, image: 'https://via.placeholder.com/150' },
  { id: 7, name: 'Producto 7', description: 'Descripción del producto 7', price: 14.99, image: 'https://via.placeholder.com/150' },
  { id: 8, name: 'Producto 8', description: 'Descripción del producto 8', price: 6.50, image: 'https://via.placeholder.com/150' },
  { id: 9, name: 'Producto 9', description: 'Descripción del producto 9', price: 7.99, image: 'https://via.placeholder.com/150' },
  { id: 10, name: 'Producto 10', description: 'Descripción del producto 10', price: 11.25, image: 'https://via.placeholder.com/150' },
]);

const cart = ref([]);

const addToCart = (product) => {
  const existingItem = cart.value.find(item => item.id === product.id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.value.push({ ...product, quantity: 1 });
  }
};
</script>

<style scoped>
.catalog-container {
  padding: 20px;
  text-align: center;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.product-card {
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 10px;
  padding: 15px;
  width: 200px;
  text-align: center;
}

.product-image {
  max-width: 100%;
  height: auto;
}

.add-to-cart-btn {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
}

.cart {
  margin-top: 20px;
  text-align: left;
}
</style>
