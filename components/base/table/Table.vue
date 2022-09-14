<script lang="ts" setup>
import { defineProps } from 'vue';

interface Props {
    flexible?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    flexible: false
});
</script>
<template>
    <div class="base-table" :class="{ 'base-table-flexible': flexible }">
        <div v-if="$slots.header" class="base-table__header">
            <slot name="header" />
        </div>
        <div class="base-table-body">
            <slot />
        </div>
    </div>
</template>
