<script setup lang="ts">
    type Color = 'orange' | 'blue' | 'transparent';
    interface Props {
        color?: Color;
        slim?: boolean;
    }

const props = withDefaults(defineProps<Props>(), {
    color: 'transparent',
    slim: false
});

const cssClasses = computed(() => {
    const colorClass = props.color;

    return {
        'base-card': true,
        'base-card--slim': props.slim,
        [`base-card--${colorClass}`]: true
    };
});
</script>

<template>
    <div class="base-card" :class="cssClasses">
        <slot />
    </div>
</template>
