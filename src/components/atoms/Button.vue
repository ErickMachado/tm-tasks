<template>
  <button :class="['btn', { 'is-dark': dark }]" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    dark: {
      default: false,
      required: false,
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  align-items: center;
  background: $light;
  border: none;
  border-radius: 0.8rem;
  cursor: pointer;
  display: flex;
  font-weight: 600;
  gap: 0.8rem;
  height: 5rem;
  justify-content: center;
  padding: 0 3.2rem;
  transition: all 0.3s;

  &:not([disabled]):hover {
    filter: brightness(90%);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  &.is-dark {
    background: $dark;
    color: $light;

    &:not([disabled]):hover {
      background: rgba($dark, 0.7);
    }
  }
}
</style>
