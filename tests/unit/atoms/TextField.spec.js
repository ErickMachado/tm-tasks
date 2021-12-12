import { shallowMount } from '@vue/test-utils'
import { TextField } from '@/components/atoms'

describe('TextField.vue', () => {
  it('Should emit an event named "input" on component input with value as payload', async () => {
    const valueMock = 'Some testing text'
    const wrapper = shallowMount(TextField, {
      propsData: { value: '' }
    })

    await wrapper.setValue(valueMock)

    expect(wrapper.emitted('input')).toBeTruthy()
    expect(wrapper.emitted('input')[0][0]).toEqual(valueMock)
  })
})
