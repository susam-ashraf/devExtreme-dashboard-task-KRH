<template>
  <div class="grid h-56 grid-cols-3 content-center gap-4 mt-20">
    <div class="sm:col-span-3">
      <div class="max-w-xl mx-auto">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input"
          >Upload file</label
        >
        <input
          class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="file_input"
          type="file"
        />
      </div>
    </div>
    <div class="sm:col-span-3 max-w-xl mx-auto mt-10">
      <button
        type="button"
        class="max-w-xl mx-auto text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        {{ $t("upload_template_button") }}
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
