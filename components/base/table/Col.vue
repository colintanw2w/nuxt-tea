<script lang="ts" setup>

import { defineProps } from 'vue';

        interface Props {
            isLabel?: boolean;
            hasLabel?: boolean;
        }

const props = withDefaults(defineProps<Props>(), {
    isLabel: false,
    hasLabel: false
});
</script>

<template>
    <div
        :class="{ 'base-table__col--label col-5 col-sm-3 | lg:hidden w-5/12 lg:1/4': isLabel, 'w-7/12': hasLabel }"
        class="base-table__col"
        @click="$emit('click')"
    >
        <slot />
    </div>
</template>
