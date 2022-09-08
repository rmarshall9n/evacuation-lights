import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import LightDetails from "@/components/lights/LightDetails.vue";
import { makeLight } from "@/tests/factory";

describe('LightDetails.vue', () => {
  test('A light can be displayed', () => {

    const wrapper = mount(LightDetails, {
      props: {
        light: makeLight({
          name: 'hallway light 1',
          description: 'next to the front door'
        })
      }
    })
    expect(wrapper.text()).contains('Name');
    expect(wrapper.text()).contains('hallway light 1');
    expect(wrapper.text()).contains('Description');
    expect(wrapper.text()).contains('next to the front door');
  })
})
