<template>
  <button :class="['button', buttonClasses]" :disabled="isDisabled">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = defineProps({
  color: {
    type: String as PropType<'1' | '2' | '3'>,
    default: 'primary',
  },

  size: {
    type: String as PropType<'small' | 'medium' | 'large'>,
    default: 'medium',
  },
  isBordered: { type: Boolean, default: false },
  isDisabled: { type: Boolean, default: false },
});

const buttonClasses = computed(() => {
  return [
    `button--${props.color}`,
    `button--${props.size}`,
    {
      disabled: props.isDisabled,
      bordered: props.isBordered,
    },
  ];
});
</script>

<style scoped lang="scss">
$color_1: #3776b9;
$color_2: #3b9750;
$color_3: #b44ebd;

$colors_count: 3;

$colors: $color_1, $color_2, $color_3;

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  font-weight: bold;

  cursor: pointer;

  border-radius: 0.25rem;
  border: none;

  transition:
    background-color var(--transition-time) var(--transition-cubic),
    border-color var(--transition-time) var(--transition-cubic),
    color var(--transition-time) var(--transition-cubic);

  &--small {
    padding: 0.313rem 0.625rem;
  }
  &--medium {
    padding: 0.625rem 1.25rem;
  }
  &--large {
    padding: 0.938rem 1.875rem;
  }

  &.disabled {
    cursor: not-allowed;
    opacity: 0.5;
    pointer-events: none;
    user-select: none;
  }

  @for $i from 1 through $colors_count {
    &--#{$i} {
      background-color: nth($colors, $i);
      color: #fff;

      &:hover {
        background-color: darken(nth($colors, $i), 10%);
      }

      &.bordered {
        background-color: transparent;
        color: nth($colors, $i);
        border: 1px nth($colors, $i) solid;

        &:hover {
          color: #fff;
          background-color: darken(nth($colors, $i), 10%);
        }
      }
    }
  }
}
</style>
