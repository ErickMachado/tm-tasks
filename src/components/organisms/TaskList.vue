<template>
  <ul class="task-list">
    <TaskItem
      v-for="(task, index) in tasks"
      :key="index"
      :task="task"
      @complete="completeTask"
      @delete="deleteTask"
    />
  </ul>
</template>

<script>
import { mapActions } from 'vuex'
import { TaskItem } from '@/components/molecules'

export default {
  components: { TaskItem },
  methods: {
    ...mapActions(['completeTask', 'deleteTask'])
  },
  name: 'TaskList',
  props: {
    tasks: {
      required: true,
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.task-list {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
}
</style>
