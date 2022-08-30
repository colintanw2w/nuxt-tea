<script setup lang="ts">

const props = defineProps<{
    user?: string
}>()

defineExpose({
    user: props.user
})

</script>

<template>
    <nav class="top-nav">
        This is the main nav
    </nav>
</template>
    
    <style lang="scss" scoped>
    .top-nav {
        @apply bg-sky-700 px-6 py-4;
    }
    </style>