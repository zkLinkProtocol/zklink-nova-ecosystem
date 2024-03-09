<script setup lang="ts">
</script>

<template>
  <div class="greetings">
    <img src="/assets/image/logo.png" alt="" @click="goToPage">
  </div>
</template>

<style scoped>
.greetings img {
  width: 15rem;
  cursor: pointer;
}


@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
<script>
export default {
  methods: {
    goToPage() {
      window.location.href = 'http://zklink.io';
    }
  }
}
</script>