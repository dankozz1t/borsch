<script setup lang="ts">
import Logo from '@/components/Icons/Logo.vue';
</script>

<template>
  <NuxtLink to="/" class="logo">
    <Logo class="logo__icon" />
    <p class="logo__text">Borsch</p>
  </NuxtLink>
</template>

<style scoped lang="scss">
.logo {
  display: flex;
  align-items: center;
  gap: 0.375rem;

  height: 2.813rem;

  font-weight: 800;
  font-size: 1.563rem;

  color: black;

  &:hover {
    .logo__icon {
      transform: scale(1.6);
    }

    .logo__text::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
}

.logo__icon {
  height: 100%;
  width: auto;
  transition: transform var(--transition-time) var(--transition-cubic);
}

.logo__text {
  display: inline-block;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 0.125rem;

    background-color: var(--bg-second-accent-color);

    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
}
</style>
