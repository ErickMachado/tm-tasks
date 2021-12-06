<template>
  <div class="intro">
    <h1>Task it.</h1>
    <h2>Your daily tasks management.</h2>
    <Button @click="$emit('step:change', 'UserForm')">
      Get started
      <img src="@/assets/images/arrow-right.svg" alt="" />
    </Button>
  </div>
</template>

<script>
import { Button } from '@/components/atoms'

export default {
  components: { Button },
  name: 'Intro'
}
</script>

<style lang="scss" scoped>
.intro {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    background: $gradient;
    background-clip: text;
    -webkit-background-clip: text;
    font-size: 6.4rem;
    font-weight: 800;
    text-transform: uppercase;
    -webkit-text-fill-color: transparent;
  }

  > h2 {
    color: $light;
    font-size: 3.2rem;
    margin-top: 2.4rem;
  }

  > .btn {
    margin-top: 6.4rem;

    > img {
      opacity: 0;
      transition: all 0.3s;
      width: 0;
    }

    &:hover > img {
      opacity: 1;
      width: 2.4rem;
    }
  }
}
</style>
