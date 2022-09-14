<script lang="ts" setup>
import { defineProps } from 'vue';

export type sortObject = {
    ascending: boolean;
    column: string;
};

interface Props {
    sortable?: string;
    sorting?: sortObject;
}

const emit = defineEmits(['sort']);

const props = withDefaults(defineProps<Props>(), {
    sortable: null,
    sorting: null
});

const isSorted = computed(() => {
    return props.sorting && props.sorting.column === props.sortable;
});

const sortIndicator = computed(() => {
    if (isSorted.value) {
        return props.sorting.ascending ? 'sort-down' : 'sort-up';
    }

    return 'sort';
});

const sort = () => {
    if (!props.sortable) {
        return;
    }

    emit('sort', props.sortable);
};

</script>
<template>
    <div :class="{ 'base-table__col--sortable': sortable, 'base-table__col--sorted': isSorted }" class="base-table__col" @click="sort">
        <slot />
        <font-awesome-icon v-if="sortable" :icon="['fas', sortIndicator]" />
    </div>
</template>
