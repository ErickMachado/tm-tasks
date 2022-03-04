import Vuex from 'vuex'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import { Header } from '../../../../src/components/molecules'

describe('Header.vue', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  let store
  let wrapper
  let getters
  let actions
  let options

  beforeEach(() => {
    getters = {
      getCompletedTasks: () => [0, 0],
      getRemainingTasks: () => [0, 0, 0],
      getUsername: () => 'Bat-Fábio'
    }
    actions = { syncUsername: () => 'Bat-Fábio' }
    store = new Vuex.Store({ actions, getters })
    options = {
      localVue,
      slots: {
        default: 'Header'
      },
      store
    }
    wrapper = shallowMount(Header, options)
  })

  it('Should build remaining tasks paragraph correctly', async () => {
    const $remainingTasks = wrapper.find(
      '[data-testid="header__remaining-tasks"]'
    ).text()
    
    expect($remainingTasks).toContain('3')
  })

  it('Should build completed tasks paragraph correctly', async () => {
    const $completedTasks = wrapper.find(
      '[data-testid="header__completed-tasks"]'
    ).text()
    
    expect($completedTasks).toContain('2')
  })
})
