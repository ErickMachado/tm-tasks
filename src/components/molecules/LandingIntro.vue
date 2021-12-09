<template>
  <div class="intro">
    <h1>TM Tasks</h1>
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
@keyframes fadeInDown {
  from {
    transform: translate3d(0, -30px, 0);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

.intro {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    animation: fadeInDown 0.5s backwards;
    animation-delay: 5s;
    background: $gradient;
    background-clip: text;
    -webkit-background-clip: text;
    font-size: 6.4rem;
    font-weight: 800;
    text-transform: uppercase;
    -webkit-text-fill-color: transparent;
  }

  > h2 {
    animation: fadeInDown 0.5s backwards;
    animation-delay: 5.5s;
    color: $light;
    font-size: 3.2rem;
    margin-top: 2.4rem;
  }

  > .btn {
    animation: fadeInDown 0.5s backwards;
    animation-delay: 6s;
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
