<template>
  <input
    :value="value"
    type="text"
    class="text-field"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'TextField',
  props: {
    value: {
      required: true,
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.text-field {
  border: 1px solid rgba($dark, 0.3);
  border-radius: 0.8rem;
  height: 5rem;
  outline: none;
  padding-left: 1.6rem;
  transition: all 0.3s;
  width: 100%;

  &:focus {
    border-color: $dark;
  }
}
</style>
