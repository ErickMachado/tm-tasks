<template>
  <Container>
    <Header />
    <form class="task-input" @submit.prevent="handleTaskCreation">
      <TextField
        placeholder="Task title"
        v-model="taskTitle"
        @input="setTaskTitle"
      />
      <Button dark :disabled="!taskTitle">
        Add
        <img src="@/assets/images/plus.svg" alt="" />
      </Button>
    </form>
    <TaskList v-show="getTasks.length" :tasks="getTasks" />
    <div v-show="getTasks.length === 0" class="no-tasks">
      <img src="@/assets/images/no-tasks.svg" alt="" />
      <h2>All clean around here. Add some tasks 🤓</h2>
    </div>
  </Container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { Container } from '@/components/bosons'
import { Button, TextField } from '@/components/atoms'
import { Header } from '@/components/molecules'
import { TaskList } from '@/components/organisms'

export default {
  components: { Button, Container, Header, TaskList, TextField },
  computed: {
    ...mapGetters(['getTasks'])
  },
  data: () => ({
    taskTitle: ''
  }),
  methods: {
    ...mapActions(['createTask']),
    async handleTaskCreation() {
      await this.createTask(this.taskTitle)
      this.taskTitle = ''
    },
    setTaskTitle(title) {
      this.taskTitle = title
    }
  },
  name: 'Dashboard'
}
</script>

<style lang="scss" scoped>
.header {
  margin-top: 6.4rem;
}

.task-input {
  display: flex;
  gap: 0.8rem;
  margin: 6.4rem auto 0;
  max-width: 592px;
  width: 100%;

  > .btn {
    width: 112px;
  }
}

.task-list {
  margin: 3.2rem auto 0;
  max-width: 592px;
  width: 100%;
}

.no-tasks {
  margin-top: 6.4rem;

  > img {
    margin: 0 auto;
    max-width: 350px;
  }

  > h2 {
    font-size: 2.4rem;
    margin-top: 6.4rem;
    text-align: center;
  }
}
</style>
