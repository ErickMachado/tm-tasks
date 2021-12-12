import { createLocalVue, mount } from '@vue/test-utils'
import { UserForm } from '@/components/molecules'
import Vuex from 'vuex'

const dataSelector = {
  DONE_BUTTON: '[data-jest="done-btn"]',
  NAME_INPUT: '[data-jest="name-input"]'
}
const localVue = createLocalVue()
localVue.use(Vuex)

describe('UserForm.vue', () => {
  const actions = { createUserSession: jest.fn() }
  const store = new Vuex.Store({ actions })

  it('Should disable done button if name is not provided', () => {
    const wrapper = mount(UserForm, { localVue, store })
    const doneButton = wrapper.find(dataSelector.DONE_BUTTON)

    expect(doneButton.attributes().disabled).toBeTruthy()
  })

  it('Should able done button if name is provided', async () => {
    const wrapper = mount(UserForm, { localVue, store })
    const nameInput = wrapper.find(dataSelector.NAME_INPUT)
    const doneButton = wrapper.find(dataSelector.DONE_BUTTON)

    await nameInput.setValue('Testing name')

    expect(doneButton.attributes().disabled).toBeFalsy()
  })
})
