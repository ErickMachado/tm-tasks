import { shallowMount } from '@vue/test-utils'
import { Button } from '@/components/atoms'

describe('Button.vue', () => {
  it('Should emit an event named "click" when component is clicked', async () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Button'
      }
    })

    await wrapper.trigger('click')

    expect(wrapper.emitted('click')).toBeTruthy()
  })
})
