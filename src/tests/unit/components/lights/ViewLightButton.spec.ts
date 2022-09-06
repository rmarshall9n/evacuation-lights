import { describe, test, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import ViewLightButton from "@/components/lights/ViewLightButton.vue";

describe('ViewLightButton.vue', () => {
  test('the button has the correct link', () => {
    const wrapper = shallowMount(ViewLightButton, {
      props: {
        id: 125
      }
    })

    expect(wrapper.get('router-link-stub').attributes('to')).toBe('/lights/125')
  })
})
