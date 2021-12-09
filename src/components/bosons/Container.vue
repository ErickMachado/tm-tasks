<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Container'
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  max-width: 1216px;
  padding: 0 1.5rem;
  width: 100%;
}
</style>
