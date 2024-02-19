<script setup lang="ts">
// ..
</script>

<template>
  <div class="header">
    <NuxtLink to="/">
      <img class="header__logo" src="/assets/images/logo.jpg" alt="turnip and borscht text" />
    </NuxtLink>

    <div>
      <input type="text" placeholder="search..." />
      <button type="button">0-</button>
    </div>

    <nav class="header__nav">
      <NuxtLink to="/recipes"> recipes </NuxtLink>

      <div class="header__auth">
        <button type="button">login</button>
        <button type="button">register</button>
      </div>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;

  color: var(--text-white-color);
  background-color: var(--bg-first-accent-color);
}

.header__logo {
  max-height: 45px;
  width: 150px;
  object-fit: cover;
}

.header__nav {
  display: flex;
  gap: 50px;
}

.header__auth {
  display: flex;
  gap: 12px;
}
</style>
