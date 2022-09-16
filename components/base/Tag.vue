<script setup lang="ts">
    type Color = 'orange' | 'blue' | 'turquoise';

    interface Props {
        color?: Color;
    }

const props = withDefaults(defineProps<Props>(), {
    color: 'blue'
});

const cssClasses = computed(() => {
    return props.color ? 'base-tag--' + props.color : '';
});
</script>

<template>
    <div class="base-tag" :class="cssClasses">
        <slot />
    </div>
</template>
