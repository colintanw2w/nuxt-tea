<script setup lang="ts">

const props = defineProps<{
    teams?: string[]
}>()

defineExpose({
    teams: props.teams
})

</script>

<template>
    <aside class="teams-sidebar">
        <div v-for="team in teams" class="rounded-md w-full aspect-square bg-orange-500 mb-3">
            {{  team  }}
        </div>
    </aside>
</template>

<style lang="scss" scoped>
.teams-sidebar {
    @apply fixed top-0 left-0 bottom-0 w-16 bg-slate-700 p-3 overflow-auto;
}
</style>