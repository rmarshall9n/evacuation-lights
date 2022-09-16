import ValidationErrorsVue from "@/components/ValidationErrors.vue";
import { makeErrorObject } from "@/tests/factory";
import { shallowMount } from "@vue/test-utils";
import { test, describe, expect } from "vitest";

describe('ValidationErrors.vue', () => {
  test('the component is functional when there are no error objects', () => {
    const wrapper = shallowMount(ValidationErrorsVue, {
      props: {
        errors: []
      }
    })

    const errors = wrapper.findAll('[data-test="validation-error"]')
    expect(errors).toEqual([])
  })

  test('errors are displayed when passed as props', () => {
    const wrapper = shallowMount(ValidationErrorsVue, {
      props: {
        errors: [
          makeErrorObject({
            $property: 'name',
            $message: 'Value is required',
          }),
          makeErrorObject({
            $property: 'description',
            $message: 'Value is required',
          })
        ]
      }
    })

    const errors = wrapper.findAll('[data-test="validation-error"]')
    expect(errors.map((e) => e.text())).toEqual([
      'Name: Value is required',
      'Description: Value is required',
    ])
  })
})
