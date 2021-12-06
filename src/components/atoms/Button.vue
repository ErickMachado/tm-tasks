<template>
  <button class="btn" @click="$emit('click')">
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  name: 'Button'
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
}
</style>
