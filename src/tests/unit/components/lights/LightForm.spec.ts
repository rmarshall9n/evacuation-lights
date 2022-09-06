import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import LightForm from "@/components/lights/LightForm.vue";
import { makeLight } from "@/tests/factory";

describe('LightForm.vue', () => {

  test('the form is empty when no a light prop is missing', () => {
    const wrapper = mount(LightForm, {
      props: {}
    })

    const nameInput = wrapper.get('[data-test="input-name"]')
    const descriptionInput = wrapper.get('[data-test="input-description"]')

    expect((<HTMLInputElement>nameInput.element).value).toBe('')
    expect((<HTMLInputElement>descriptionInput.element).value).toBe('')
  })

  test('the form is populated when a light prop is present', () => {
    const wrapper = mount(LightForm, {
      props: {
        light: makeLight({ name: 'light name', description: 'light description'})
      }
    })

    const nameInput = wrapper.get('[data-test="input-name"]')
    const descriptionInput = wrapper.get('[data-test="input-description"]')

    expect((<HTMLInputElement>nameInput.element).value).toBe('light name')
    expect((<HTMLInputElement>descriptionInput.element).value).toBe('light description')
  })

  test('form emits the light and resets with no light ', async () => {

    const wrapper = mount(LightForm)

    const nameInput = wrapper.get('[data-test="input-name"]')
    const descriptionInput = wrapper.get('[data-test="input-description"]')

    await nameInput.setValue('test name')
    await descriptionInput.setValue('test desc')
    await wrapper.get('[data-test="form"]').trigger('submit')

    expect(wrapper.emitted()).toHaveProperty('onSubmitted')

    const event = wrapper.emitted('onSubmitted')

    expect(event).toEqual([
      [
        {
          "description": "test desc",
          "name": "test name",
        },
      ],
    ])

    expect((<HTMLInputElement>nameInput.element).value).toBe('')
    expect((<HTMLInputElement>descriptionInput.element).value).toBe('')
  })
})
