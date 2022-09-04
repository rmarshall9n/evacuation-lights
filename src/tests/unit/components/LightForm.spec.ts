// import LightPayload from "@/components/LightPayload.vue";
// import { mount } from "@vue/test-utils";
// import { describe, test, expect } from "vitest";

// describe('LightPayload.vue', () => {
//   test('form emits the light and resets', async () => {

//     const wrapper = mount(LightPayload)

//     const nameInput = wrapper.get('[data-test="input-name"]')
//     const descriptionInput = wrapper.get('[data-test="input-description"]')

//     await nameInput.setValue('test name')
//     await descriptionInput.setValue('test desc')
//     await wrapper.get('[data-test="form"]').trigger('submit')

//     expect(wrapper.emitted()).toHaveProperty('onCreate')

//     const event = wrapper.emitted('onCreate')

//     expect(event).toEqual([
//       [
//         {
//           "description": "test desc",
//           "id": 0,
//           "name": "test name",
//         },
//       ],
//     ])

//     expect((<HTMLInputElement>nameInput.element).value).toBe('')
//     expect((<HTMLInputElement>descriptionInput.element).value).toBe('')
//   })
// })
