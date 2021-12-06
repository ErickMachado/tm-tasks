<template>
  <div class="page-landing">
    <transition mode="out-in">
      <component :is="activeComponent" @step:change="handleStepChange" />
    </transition>
  </div>
</template>

<script>
import { LandingIntro, UserForm } from '@/components/molecules'

export default {
  components: { LandingIntro, UserForm },
  data: () => ({
    activeComponent: 'LandingIntro'
  }),
  methods: {
    handleStepChange(componentName) {
      this.activeComponent = componentName
    }
  },
  name: 'Landing'
}
</script>

<style lang="scss" scoped>
.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.2s;
}

.page-landing {
  align-items: center;
  background: $dark;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
}
</style>
