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
        <div class="content-container flex-1">
            Teamdriver nav bar thing
            <font-awesome-icon :icon="['fas', 'bars']" />
        </div>
    </nav>
</template>
