<script lang="ts" setup>
import { defineProps } from 'vue';

    interface Props {
        error?: boolean;
        box?: boolean;
    }

const props = withDefaults(defineProps<Props>(), {
    error: false,
    box: false
});

const baseCssClasses = 'base-table__row';
</script>

<template>
    <BaseCard
        v-if="box"
        :class="{ 'row-error': error, [`${baseCssClasses}`]: true }"
        class=""
        @click="$emit('click')"
        @click.middle="$emit('middleClick')"
    >
        <slot />
    </BaseCard>
    <div
        v-else
        :class="{ 'row-error': error, [`${baseCssClasses}`]: true }"
        @click="$emit('click')"
        @click.middle="$emit('middleClick')"
    >
        <slot />
    </div>
</template>
