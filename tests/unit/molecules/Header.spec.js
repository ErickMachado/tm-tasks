import { createLocalVue, shallowMount } from '@vue/test-utils'
import { Header } from '@/components/molecules'
import { buildCompletedTasks, buildIncompleteTasks } from '../mocks/task'
import Vuex from 'vuex'

const dataSelector = {
  COMPLETED_TASKS: '[data-jest="completed-tasks"]',
  CURRENT_DATE: '[data-jest="current-date"]',
  GREETING: '[data-jest="greeting"]',
  REMAINING_TASKS: '[data-jest="remaining-tasks"]'
}
const localVue = createLocalVue()
localVue.use(Vuex)

describe('Header.vue', () => {
  const actions = { syncUsername: () => {} }
  const getters = {
    getRemainingTasks: () => buildIncompleteTasks(),
    getCompletedTasks: () => buildCompletedTasks(),
    getUsername: () => 'Test user'
  }
  const store = new Vuex.Store({ actions, getters })

  it('Should have username on greeting', () => {
    const wrapper = shallowMount(Header, { localVue, store })
    const title = wrapper.find(dataSelector.GREETING)

    expect(title.text()).toEqual(`Hello, ${getters.getUsername()}! 👋`)
  })

  it('Should display current date on format: month, day', () => {
    const wrapper = shallowMount(Header, { localVue, store })
    const currentDate = wrapper.find(dataSelector.CURRENT_DATE)
    const currentDay = new Date().toLocaleDateString('en-US', {
      day: '2-digit'
    })
    const currentMonth = new Date().toLocaleDateString('en-US', {
      month: 'long'
    })
    const expectedDateFormat = `${currentMonth}, ${currentDay}`

    expect(currentDate.text()).toEqual(expectedDateFormat)
  })
})
