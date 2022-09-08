<script setup lang="ts">
  defineProps<{
    headings: string[],
    data: any[][],
  }>()
</script>
<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full">
            <thead class="border-b">
              <tr>
                <th v-for="heading of headings"
                  scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  {{ heading }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row of data" class="border-b">
                <td v-for="cell of row" class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  <slot :name="cell.name" :value="cell.value">
                    {{ cell.value }}
                  </slot>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
