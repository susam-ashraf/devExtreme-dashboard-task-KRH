<template>
  <div>
    <div class="relative overflow-x-auto mt-14">
      <!-- <form class="max-w-4xl mx-auto grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-2 mb-10 shadow-xl p-10">
        <div class="mb-5">
          <label for="id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">{{
            $t("title_table_empId")
            }}</label>
          <input type="text" v-model="state.search" id="empId"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Employee Id" required />
        </div>
        <div class="mb-5">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">{{
            $t("title_table_empName")
            }}</label>
          <input type="text" v-model="state.searchName" id="empName"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Employee Name" required />
        </div>
        <button type="button"
          class="mr-20 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          {{ $t("search_employee_button") }}
        </button>
      </form> -->

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
              <button @click="toggleModal" type="button" class="">
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
              </button>
            </td>
          </tr>
        </tbody>
      </table>
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
</style>
