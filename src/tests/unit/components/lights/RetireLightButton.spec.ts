import { describe, test, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { createTestingPinia } from '@pinia/testing'
import { useLightsStore } from "@/store/lights";
import RetireLightButton from "@/components/lights/RetireLightButton.vue";

describe('RetireLightButton.vue', () => {
  test('the button retires a light and emits an event', () => {
    const wrapper = mount(RetireLightButton, {
        global: {
          plugins: [createTestingPinia({createSpy: vi.fn})],
        },
        props: {
          id: 123
        }
      })

    const store = useLightsStore()

    wrapper.find('[data-test="button"]').trigger('click')

    expect(wrapper.emitted('onRetired')).toHaveLength(1)

    expect(store.retire).toHaveBeenCalledOnce()
    expect(store.retire).toHaveBeenCalledWith(123)
  })
})
