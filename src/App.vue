<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
const baseUrl = "/ecosystem/assets"
</script>

<template>
  <Header></Header>
  <img :src="baseUrl + '/image/leftTop.png'" alt="" class="leftTop">
  <img :src="baseUrl + '/image/rightTop.png'" alt="" class="rightTop">
  <div style="padding: 25px 25px 60px 20px" class="description">
    <h2 class="title" style="font-size: 3rem; font-weight: bold">Explore zkLink Nova Ecosystem</h2>
    <p class="content" style="font-size: 20px">
      Unlock the vibrant dApp landscape on zkLink Nova, the first aggregated Layer 3 ZK-Rollup
      network. Enjoy native asset aggregation across multiple chains, unified liquidity, ultra-low
      fees, and Ethereum-level security.
    </p>
  <img :src="baseUrl + '/image/topLogo.svg'" alt="" class="topLogo">
  </div>

  <RouterView />
  <Footer></Footer>
</template>

<style scoped>
.title {
  font-size: 2em;
  color: #fff;
}

.content {
  color: #aaa;
  width: 85%;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
.hidden {
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
.description {
  margin-top: 200px;
  position: relative;
}
.leftTop{
  position: absolute;
  left: 0;
  top: 5%;
  z-index: -1;
}
.rightTop{
  position: absolute;
  right: 0;
  top: 5%;
  z-index: -1;
}
.topLogo{
  position: absolute;
  right: -150px;
  top: -130px;
  z-index: -1;
}
</style>
