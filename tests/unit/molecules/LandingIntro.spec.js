import { createLocalVue, mount } from '@vue/test-utils'
import { LandingIntro } from '@/components/molecules'

const dataSelector = {
  GET_STARTED_BUTTON: '[data-jest="get-started-btn"]'
}
const localVue = createLocalVue()

describe('LandingIntro.vue', () => {
  it('Should emit an event named "step:change" on get started button click', async () => {
    const wrapper = mount(LandingIntro, { localVue })
    const getStartedButton = wrapper.find(dataSelector.GET_STARTED_BUTTON)

    await getStartedButton.trigger('click')

    expect(wrapper.emitted('step:change')).toBeTruthy()
    expect(wrapper.emitted('step:change')[0][0]).toEqual('UserForm')
  })
})
