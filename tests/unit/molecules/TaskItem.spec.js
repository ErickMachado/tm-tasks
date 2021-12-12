import { createLocalVue, mount } from '@vue/test-utils'
import { TaskItem } from '@/components/molecules'
import { buildTask } from '../mocks/task'

const dataSelector = {
  COMPLETE_TASK_BUTTON: '[data-jest="complete-task-btn"]',
  DELETE_TASK_BUTTON: '[data-jest="delete-task-btn"]',
  TASK_TITLE: '[data-jest="task-title"]'
}
const localVue = createLocalVue()

describe('TaskItem.vue', () => {
  const task = buildTask()

  it('Should display task title equal to provided in the prop', () => {
    const wrapper = mount(TaskItem, {
      localVue,
      propsData: { task }
    })
    const taskTitle = wrapper.find(dataSelector.TASK_TITLE)

    expect(taskTitle.text()).toEqual(task.title)
  })

  it('Should emit an event named "complete" on complete task button click', async () => {
    const wrapper = mount(TaskItem, {
      localVue,
      propsData: { task }
    })
    const completeTaskButton = wrapper.find(dataSelector.COMPLETE_TASK_BUTTON)

    await completeTaskButton.trigger('click')

    expect(wrapper.emitted('complete')).toBeTruthy()
    expect(wrapper.emitted('complete')[0][0]).toEqual(task.id)
  })

  it('Should emit an event named "delete" on delete task button click', async () => {
    const wrapper = mount(TaskItem, {
      localVue,
      propsData: { task }
    })
    const deleteTaskButton = wrapper.find(dataSelector.DELETE_TASK_BUTTON)

    await deleteTaskButton.trigger('click')

    expect(wrapper.emitted('delete')).toBeTruthy()
    expect(wrapper.emitted('delete')[0][0]).toEqual(task.id)
  })

  it('Should hide complete task button if the task is complete', async () => {
    const wrapper = mount(TaskItem, {
      localVue,
      propsData: { task }
    })
    const completeTaskButton = wrapper.find(dataSelector.COMPLETE_TASK_BUTTON)

    expect(completeTaskButton.isVisible()).toBeFalsy()
  })

  it('Should show complete task button if the task is not complete', async () => {
    const wrapper = mount(TaskItem, {
      localVue,
      propsData: {
        task: buildTask(false)
      }
    })
    const completeTaskButton = wrapper.find(dataSelector.COMPLETE_TASK_BUTTON)

    expect(completeTaskButton.isVisible()).toBeTruthy()
  })

  it('Should have the class "is-complete" if the task is complete', () => {
    const wrapper = mount(TaskItem, {
      localVue,
      propsData: { task }
    })

    expect(wrapper.classes().includes('is-complete')).toBeTruthy()
  })

  it('Should not have the class "is-complete" if the task is not complete', () => {
    const wrapper = mount(TaskItem, {
      localVue,
      propsData: {
        task: buildTask(false)
      }
    })

    expect(wrapper.classes().includes('is-complete')).toBeFalsy()
  })
})
