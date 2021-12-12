<template>
  <li :class="['task-item', { 'is-complete': task.complete }]">
    <h3 data-jest="task-title">{{ task.title }}</h3>
    <div class="task-item__actions">
      <button
        v-show="!task.complete"
        @click="$emit('complete', task.id)"
        data-jest="complete-task-btn"
      >
        <img src="@/assets/images/check-square.svg" alt="" />
      </button>
      <button @click="$emit('delete', task.id)" data-jest="delete-task-btn">
        <img src="@/assets/images/trash.svg" alt="" />
      </button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'TaskItem',
  props: {
    task: {
      required: true,
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.task-item {
  align-items: center;
  background: $light;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15);
  border-radius: 0.8rem;
  display: flex;
  justify-content: space-between;
  padding: 2.4rem;
  position: relative;
  width: 100%;

  &::before {
    background: $dark;
    border-radius: 0.8rem 0 0 0.8rem;
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 7px;
  }

  > h3 {
    font-weight: 600;
    font-size: 2.4rem;
  }

  &__actions {
    align-items: center;
    display: flex;
    gap: 1.6rem;

    > button {
      background: transparent;
      border: none;
      border-radius: 0.4rem;
      padding: 0.4rem;
      transition: background 0.3s;

      &:hover {
        background: rgba($dark, 0.05);
      }
    }
  }

  &.is-complete {
    &::before {
      background-color: $success;
    }

    > h3 {
      color: $success;
      text-decoration: line-through;
    }
  }
}
</style>
