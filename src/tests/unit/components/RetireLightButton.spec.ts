import RetireLightButton from "@/components/RetireLightButton.vue";
import { mount } from "@vue/test-utils";
import { describe, test, expect, vi, beforeEach } from "vitest";
import { makeLight } from "@/tests/factory";

let mockRetireLight = vi.fn()

vi.mock('@/api/lights', () => ({
  retireLight: (id: number) => mockRetireLight(id)
}))

describe('RetireLightButton.vue', () => {
  beforeEach(() => {
    mockRetireLight = vi.fn()
  })

  test('the button retires a light and emits an event', () => {
    const wrapper = mount(RetireLightButton, {
      props: {
        light: makeLight({ id: 123 })
      }
    })

    wrapper.find('[data-test="button"]').trigger('click')

    const event = wrapper.emitted('onRetired')
    expect(event).toHaveLength(1)

    expect(mockRetireLight).toHaveBeenCalledOnce()
    expect(mockRetireLight).toHaveBeenCalledWith(123)
  })
})
