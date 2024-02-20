<script setup lang="ts"></script>

<template>
  <section class="hero">
    <div class="container hero__container">
      <h1 class="hero__title">Borsch</h1>
      <h2 class="hero__subtitle">веб-додаток, де смак України оживає в твоїх рецептах</h2>
    </div>

    <div></div>
  </section>
</template>

<style scoped lang="scss">
.hero__container {
  padding: 6rem 0;
  text-align: center;
}

.hero__title {
  margin-bottom: 0.75rem;

  @include font-size(2rem, 100%, 800);
}

.hero__subtitle {
  @include font-size(1.25rem, 100%, 600);
}
</style>
