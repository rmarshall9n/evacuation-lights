import ViewLightButton from "@/components/ViewLightButton.vue";
import { shallowMount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import { makeLight } from "@/tests/factory";

describe('ViewLightButton.vue', () => {
  test('the button has the correct link', () => {
    const wrapper = shallowMount(ViewLightButton, {
      props: {
        light: makeLight({
          id: 125
        })
      }
    })

    expect(wrapper.get('router-link-stub').attributes('to')).toBe('/lights/125')
  })
})
