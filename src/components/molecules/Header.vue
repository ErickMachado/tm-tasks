<template>
  <header class="header">
    <div class="header__tasks-info">
      <h1 data-jest="greeting">Hello, {{ getUsername }}! 👋</h1>
      <p data-jest="remaining-tasks">
        🕐 {{ getRemainingTasks.length }} task remaining
      </p>
      <p data-jest="completed-tasks">
        ✅ {{ getCompletedTasks.length }} tasks completed
      </p>
    </div>
    <h2 data-jest="current-date">{{ currentDate }}</h2>
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  async beforeMount() {
    await this.syncUsername()
  },
  computed: {
    ...mapGetters(['getCompletedTasks', 'getRemainingTasks', 'getUsername']),
    currentDate() {
      const currentMonth = new Date().toLocaleDateString('en-US', {
        month: 'long'
      })
      const currentDate = new Date().toLocaleDateString('pt-BR', {
        day: '2-digit'
      })

      return `${currentMonth}, ${currentDate}`
    }
  },
  methods: {
    ...mapActions(['syncUsername'])
  },
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.header {
  background: $dark;
  border-radius: 0.8rem;
  display: flex;
  justify-content: space-between;
  padding: 2.4rem;

  &__tasks-info {
    color: $light;

    > h1 {
      font-size: 2.4rem;
      margin-bottom: 1.6rem;
    }

    > p:last-child {
      margin-top: 1.2rem;
    }
  }

  > h2 {
    color: $light;
    font-size: 2.4rem;
  }
}
</style>
