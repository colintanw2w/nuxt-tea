<script lang="ts" setup>
import { defineProps } from 'vue';

    interface Props {
        error?: boolean;
        highlighting?: boolean;
        box?: boolean;
    }

const props = withDefaults(defineProps<Props>(), {
    error: false,
    highlighting: false,
    box: false
});
</script>

<template>
    <BaseBox
        v-if="box"
        :class="{ 'row-error': error, highlighting }"
        class="base-table-row mb-2"
        @click="$emit('click')"
        @click.middle="$emit('middleClick')"
    >
        <slot />
    </BaseBox>
    <div
        v-else
        :class="{ 'row-error': error, highlighting }"
        class="base-table-row mb-2"
        @click="$emit('click')"
        @click.middle="$emit('middleClick')"
    >
        <slot />
    </div>
</template>
