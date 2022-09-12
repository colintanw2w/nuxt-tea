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
    <div class="cards-table" :class="{ 'cards-table-flexible': flexible }">
        <div v-if="$slots.header" class="cards-table-header">
            <slot name="header" />
        </div>
        <div class="cards-table-body">
            <slot />
        </div>
    </div>
</template>
