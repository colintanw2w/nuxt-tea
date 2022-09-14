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
                <BaseTableRow class="p-4">
                    <BaseTableHeaderCol sortable="firstname" :sorting="tableState" class="lg:w-1/4" @sort="sortData">
                        Firstname
                    </BaseTableHeaderCol>
                    <BaseTableHeaderCol sortable="lastname" :sorting="tableState" class="lg:w-2/4" @sort="sortData">
                        lastname
                    </BaseTableHeaderCol>
                    <BaseTableHeaderCol sortable="age" :sorting="tableState" class="lg:w-1/4" @sort="sortData">
                        Leeftijd
                    </BaseTableHeaderCol>
                </BaseTableRow>
            </template>

            <BaseTableRow slim box>
                <BaseTableCol is-label>
                    voornaam
                </BaseTableCol>
                <BaseTableCol has-label class="lg:w-1/4">
                    Jaap
                </BaseTableCol>

                <BaseTableCol is-label>
                    achternaam
                </BaseTableCol>
                <BaseTableCol has-label class="lg:w-2/4">
                    de Vries
                </BaseTableCol>

                <BaseTableCol is-label>
                    Leeftijd
                </BaseTableCol>
                <BaseTableCol has-label class="lg:w-1/4">
                    78
                </BaseTableCol>
            </BaseTableRow>
        </BaseTable>
    </div>
</template>
