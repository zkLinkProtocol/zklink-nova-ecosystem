<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <Header />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <!-- <RouterLink to="/about">About</RouterLink> -->
      </nav>
      <div class="hidden"></div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
.hidden{
  width: 15rem;
}
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding: calc(var(--section-gap) / 4) 0;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  nav {
    text-align: left;
    font-size: 2rem;
    margin-top: 0;
  }
}
</style>
