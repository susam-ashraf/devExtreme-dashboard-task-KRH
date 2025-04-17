<template>
  <div>
    <div class="relative overflow-x-auto mt-14">
      <!-- Attendance modal -->
      <DashboardDevExtreameModal />

      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">
              {{ $t("title_table_empId") }}
            </th>
            <th scope="col" class="px-6 py-3">
              {{ $t("title_table_empName") }}
            </th>
            <th scope="col" class="px-6 py-3">
              {{ $t("title_table_typeReason") }}
            </th>
            <th scope="col" class="px-6 py-3">
              {{ $t("title_table_reason") }}
            </th>
            <th scope="col" class="px-6 py-3">
              {{ $t("title_table_dateEntry") }}
            </th>
            <th scope="col" class="px-6 py-3">
              {{ $t("title_table_dateReturn") }}
            </th>
            <th scope="col" class="px-6 py-3">
              {{ $t("title_table_action") }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(order, index) in filterTableData"
            :key="index"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ order.ID }}
            </th>
            <td class="px-6 py-4">
              {{ order.EmployeeName }}
            </td>
            <td class="px-6 py-4">
              {{ order.TypeReason }}
            </td>
            <td class="px-6 py-4">
              {{ order.Reason }}
            </td>
            <td class="px-6 py-4">
              {{ order.EntryWork }}
            </td>
            <td class="px-6 py-4">
              {{ order.ReturnWork }}
            </td>
            <td class="px-6 py-4">
              <div class="flex">
                <button @click="toggleModal" type="button" class="mr-5">
                  <svg
                    class="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 3a1 1 0 0 1 .78.375l4 5a1 1 0 1 1-1.56 1.25L13 6.85V14a1 1 0 1 1-2 0V6.85L8.78 9.626a1 1 0 1 1-1.56-1.25l4-5A1 1 0 0 1 12 3ZM9 14v-1H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-4v1a3 3 0 1 1-6 0Zm8 2a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div v-if="index == 1 || index == 3" class="ml-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg size-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <h1 class="mt-6 mb-6 pt-6 mx-auto text-center font-bold">Verification Status :</h1>
      <div class="mx-auto max-w-sm text-center flex flex-wrap justify-center">
        <div class="flex items-center mr-4 mb-4">
          <input id="radio1" type="radio" name="radio" class="hidden" checked />
          <label for="radio1" class="flex items-center cursor-pointer">
            <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
            Legitimate</label
          >
        </div>

        <div class="flex items-center mr-4 mb-4">
          <input id="radio2" type="radio" name="radio" class="hidden" />
          <label for="radio2" class="flex items-center cursor-pointer">
            <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
            Invalid</label
          >
        </div>
      </div>

      <div class="mt-5 col-span-full mx-auto max-w-xl text-center justify-center">
        <div>
          <label for="about" class="block text-sm/6 font-medium text-gray-900">Notes</label>
          <div class="mt-2 border-2">
            <textarea
              name="about"
              id="about"
              rows="3"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>
        <div class="sm:col-span-3 max-w-xl mx-auto mt-5">
          <button
            type="button"
            class="max-w-xl mx-auto text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            {{ $t("save_button") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed, onMounted } from "vue";

import { useTableDataStore } from "../../../stores/tableData.js";
import type { EmployeeDataType } from "@/types/dataTypes.js";
import { useModalStore } from "@/stores/modal.js";

const store = useTableDataStore();

const state = reactive({
  search: <string>"",
  searchName: <string>"",
  tableData: <EmployeeDataType[]>[],
});

const filterTableData = computed(() => {
  let filtered: EmployeeDataType[] = state.tableData;
  if (state.search != "") {
    const search = state.search.toLowerCase();
    filtered = filtered.filter(
      (item: EmployeeDataType) =>
        item.ID.toString().includes(search) || item.EmployeeName.toLowerCase().includes(search)
    );
  }
  if (state.searchName != "") {
    const searchName = state.searchName.toLowerCase();
    filtered = filtered.filter((item: EmployeeDataType) =>
      item.EmployeeName.toLowerCase().includes(searchName)
    );
  }
  return filtered;
});
onMounted(() => {
  // You can perform any data fetching or initialization here
  state.tableData = store.orders as EmployeeDataType[];
});

const modalStore = useModalStore();

function toggleModal() {
  modalStore.toggleModal(!modalStore.open, true);
}
</script>

<style scoped>
#gridContainer {
  height: 440px;
}

.options {
  padding: 20px;
  margin-top: 20px;
  background-color: rgba(191, 191, 191, 0.15);
}

.caption {
  font-size: 18px;
  font-weight: 500;
}

.option {
  margin-top: 10px;
}

.option > span {
  margin-right: 10px;
}

.option > .dx-selectbox {
  display: inline-block;
  vertical-align: middle;
}

input[type="radio"] + label span {
  transition:
    background 0.2s,
    transform 0.2s;
}

input[type="radio"] + label span:hover,
input[type="radio"] + label:hover span {
  transform: scale(1.2);
}

input[type="radio"]:checked + label span {
  background-color: #3490dc;
  box-shadow: 0px 0px 0px 2px white inset;
}

input[type="radio"]:checked + label {
  color: #3490dc;
}

input[type="radio"] + label {
  font-size: 16px;
}
</style>
