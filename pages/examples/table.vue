<script setup lang="ts">

const { tableState, sortedData, sort, sortMethod, set } = useTable();

set([
    {
        firstname: 'Jan',
        lastname: 'van Psdafasdf',
        age: 13
    },
    {
        firstname: 'Xavi',
        lastname: 'Simons',
        age: 20
    },
    {
        firstname: 'Role',
        lastname: 'Role',
        age: 42
    },
    {
        firstname: 'Jesse',
        lastname: 'James',
        age: 31
    },
    {
        firstname: 'Jan',
        lastname: 'van Psdafasdf',
        age: 56
    }
]);

sortMethod.value = (a, b) => {
    const modifier = tableState.ascending ? 1 : -1;
    if (a[tableState.column] < b[tableState.column]) { return -1 * modifier; }
    if (a[tableState.column] > b[tableState.column]) { return 1 * modifier; }
    return 0;
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
                    <BaseTableHeaderCol sortable="firstname" :sorting="tableState" class="lg:w-1/4" @sort="sort">
                        Firstname
                    </BaseTableHeaderCol>
                    <BaseTableHeaderCol sortable="lastname" :sorting="tableState" class="lg:w-2/4" @sort="sort">
                        lastname
                    </BaseTableHeaderCol>
                    <BaseTableHeaderCol sortable="age" :sorting="tableState" class="lg:w-1/4" @sort="sort">
                        Leeftijd
                    </BaseTableHeaderCol>
                </BaseTableRow>
            </template>

            <BaseTableRow v-for="(item, index) in sortedData" :key="`table-row-${index}`" slim box>
                <BaseTableCol is-label>
                    voornaam
                </BaseTableCol>
                <BaseTableCol has-label class="lg:w-1/4">
                    {{ item.firstname }}
                </BaseTableCol>

                <BaseTableCol is-label>
                    achternaam
                </BaseTableCol>
                <BaseTableCol has-label class="lg:w-2/4">
                    {{ item.lastname }}
                </BaseTableCol>

                <BaseTableCol is-label>
                    Leeftijd
                </BaseTableCol>
                <BaseTableCol has-label class="lg:w-1/4">
                    {{ item.age }}
                </BaseTableCol>
            </BaseTableRow>
        </BaseTable>
    </div>
</template>
