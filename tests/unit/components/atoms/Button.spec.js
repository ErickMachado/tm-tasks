import { createLocalVue, shallowMount } from '@vue/test-utils'
import { Button } from '../../../../src/components/atoms'

describe('Button.vue', () => {
  const options = {
    localVue: createLocalVue(),
    slots: {
      default: 'Button'
    }
  }
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Button, options)
  })

  it('Should have text equal to passed in the default slot', () => {
    expect(wrapper.text()).toEqual(options.slots.default)
  })

  it('Should be in dark variant if dark prop is provided', async () => {
    await wrapper.setProps({ dark: true })

    expect(wrapper.classes()).toContain('is-dark')
  })

  it("Should emit an event named 'click' on button click", async () => {
    await wrapper.trigger('click')

    expect(wrapper.emitted('click')).toBeTruthy()
  })
})
