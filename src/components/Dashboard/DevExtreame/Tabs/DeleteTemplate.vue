<template>
  <div class="grid h-56 grid-cols-3 content-center gap-4 mt-20">
    <div class="sm:col-span-3">
      <form class="max-w-xl mx-auto">
        <label for="countries" class="block text-sm/6 font-medium text-gray-900"
          >Select Template</label
        >
        <select
          id="countries"
          class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Choose Agency</option>
          <option value="pap">Federal Civil Service (PAP)</option>
          <option value="pan">State Civil Service (PAN)</option>
          <option value="bbp">Federal Statutory Body Authority (BBP)</option>
          <option value="bbn">State Statutory Body Authority (BBN)</option>
          <option value="pbt">Local Authorities (PBT)</option>
        </select>
      </form>
    </div>
    <div class="sm:col-span-3 max-w-xl mx-auto mt-10">
      <button
        type="button"
        class="max-w-xl mx-auto text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        {{ $t("delete_template_button") }}
      </button>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style>
.tabpanel-item {
  height: 200px;
  user-select: none;
  padding-left: 25px;
  padding-top: 55px;
}

.mobile .tabpanel-item {
  padding-top: 10px;
}

.tabpanel-item > div {
  float: left;
  padding: 0 85px 10px 10px;
}

.tabpanel-item p {
  font-size: 16px;
  margin: 0;
}

.item-box {
  font-size: 16px;
  margin: 15px 0 45px 10px;
}

.options {
  padding: 20px;
  background-color: rgba(191, 191, 191, 0.15);
  margin-top: 20px;
}

.caption {
  font-size: 18px;
  font-weight: 500;
}

.option {
  margin-top: 10px;
}
</style>
