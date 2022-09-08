<script setup lang="ts">
    type Color = 'orange' | 'blue' | 'transparent';
    interface Props {
        color?: Color;
    }

const props = withDefaults(defineProps<Props>(), {
    color: 'transparent'
});

const cssClasses = computed(() => {
    return props.color ?? 'transparent';
});
</script>

<template>
    <div class="base-box" :class="cssClasses">
        <slot />
    </div>
</template>
