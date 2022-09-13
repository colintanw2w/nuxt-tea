<script setup lang="ts">
import { sortObject } from '@/components/base/table/HeaderCol.vue';
const tableState = reactive<sortObject>({
    ascending: true,
    column: 'firstname'
});

const sortData = (sortable: string) => {
    if (sortable !== tableState.column) {
        tableState.column = sortable;
        tableState.ascending = true;
    } else {
        tableState.ascending = !tableState.ascending;
    }
};

</script>

<template>
    <div class="content-container pt-8">
        <h1 class="h1">
            Table example
        </h1>
        <BaseTable>
            <template #header>
                <BaseTableRow class="flex flex-row">
                    <BaseTableHeaderCol sortable="firstname" :sorting="tableState" class="w-80" @sort="sortData">
                        Firstname
                    </BaseTableHeaderCol>
                    <BaseTableHeaderCol sortable="lastname" :sorting="tableState" @sort="sortData">
                        lastname
                    </BaseTableHeaderCol>
                </BaseTableRow>
            </template>

            <BaseTableRow slim box>
                Table row
            </BaseTableRow>
        </BaseTable>
    </div>
</template>
