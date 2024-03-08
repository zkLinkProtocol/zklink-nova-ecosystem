<template>
  <div class="item">
    <i>
      <slot name="header"></slot>
    </i>
    <slot name="logo"></slot>
    <slot name="name"></slot>
    <slot name="link"></slot>
  </div>
</template>

<style scoped>
.item {
  width: 30%;
  padding: 10px;
  border-radius: 10px;
  background-color: #202020;
}

@media (min-width: 1024px) {
  
}
</style>
