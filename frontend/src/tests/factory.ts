import type { Light } from "@/types";
import type { ErrorObject } from "@vuelidate/core";

export function makeLight(data?: Partial<Light>): Light {
  return {
    id: 1,
    name: 'light name',
    description: 'light description',
    retired_at: null,
    ...data
  }
}

export function makeErrorObject(data?: Partial<ErrorObject>): ErrorObject {
  return {
    $message: "Value is required",
    $params: { type: 'required' },
    $pending: false,
    $property: "description",
    $propertyPath: "description",
    $response: null,
    $uid: 'description-required',
    $validator: 'required',
    ...data
  }
}
