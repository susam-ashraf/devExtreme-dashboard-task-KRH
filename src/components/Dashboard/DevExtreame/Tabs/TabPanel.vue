<template>
  <div>
    <DxTabPanel
      :height="760"
      :data-source="companies"
      v-model:selected-index="selectedIndex"
      :loop="loop"
      :animation-enabled="animationEnabled"
      :swipe-enabled="swipeEnabled"
      item-title-template="itemTitle"
    >
      <template #itemTitle="{ data: company }">
        <span>{{ company.CompanyName }}</span>
      </template>
      <template #item="{ data: company }">
        <div v-if="company.ID == 1">
          <DashboardDevExtreameTabsDownloadTemplate />
        </div>
        <div v-if="company.ID == 2">
          <DashboardDevExtreameTabsUploadTemplate />
        </div>
        <div v-if="company.ID == 3">
          <DashboardDevExtreameDataGrid />
        </div>
        <div v-if="company.ID == 4">
          <DashboardDevExtreameTabsDeleteTemplate />
        </div>
      </template>
    </DxTabPanel>
    <div class="item-box">
      Item <span>{{ selectedIndex + 1 }}</span> of <span>{{ companies.length }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import DxTabPanel from "devextreme-vue/tab-panel";
import { multiViewItems } from "./data";

const companies = multiViewItems;
const selectedIndex = ref(0);
const loop = ref(false);
const animationEnabled = ref(true);
const swipeEnabled = ref(true);
</script>
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
