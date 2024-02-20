<script setup lang="ts">
import Button from '@/components/Button/Button.vue';
import Logo from '@/components/Icons/Logo.vue';

const colors = ['1', '2', '3'];
</script>

<template>
  <div class="ui">
    <div class="container ui__container">
      <ul style="display: flex; align-items: flex-start; gap: 0.625rem">
        <li
          v-for="color in colors"
          :key="color"
          style="display: flex; flex-direction: column; gap: 0.625rem"
        >
          <Button size="small" :color="color"> Button Color{{ color }} Small </Button>
          <Button size="medium" :color="color"> Button Color{{ color }} Medium </Button>
          <Button size="large" :color="color"> Button Color{{ color }} Large </Button>

          <Button size="medium" :color="color" is-disabled>
            Button Color{{ color }} Medium Disabled
          </Button>
          <Button size="medium" :color="color" is-bordered>
            Button Color{{ color }} Medium Bordered</Button
          >
          <Button size="medium" :color="color" is-disabled is-bordered>
            Button Color{{ color }} Medium Disabled Bordered
          </Button>

          <Button :color="color">
            <Logo style="height: 1.25rem; width: auto" />
            Button Color{{ color }} Medium Icon
          </Button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ui {
  min-height: 100vh;
  height: 100%;

  background-color: #f4fffd;
}

.ui__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  padding: 10rem 0;
}
</style>
