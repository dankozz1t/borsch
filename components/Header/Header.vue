<script setup lang="ts">
import FullLogo from '@/components/FullLogo/FullLogo.vue';
</script>

<template>
  <div class="header">
    <div class="container header__container">
      <FullLogo />

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
  </div>
</template>

<style scoped lang="scss">
.header {
  color: var(--text-white-color);
  background-color: var(--bg-first-accent-color);
}

.header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.header__nav {
  display: flex;
  gap: 3.125rem;
}

.header__auth {
  display: flex;
  gap: 0.75rem;
}
</style>
