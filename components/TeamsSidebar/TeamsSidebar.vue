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
        <div v-for="(team, i) in teams" class="team-block bg-amber-700" :class="i === 0 ? 'active' : ''">
            {{  team  }}
        </div>

        <div class="add-block">
            +
        </div>
    </aside>
</template>
