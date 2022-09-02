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
        <NuxtLink v-for="(team, i) in teams" :to="'team' + i">
            <div class="team-block bg-amber-700" :class="i === 0 ? 'active' : ''">
                {{  team  }}
            </div>
        </NuxtLink>
        <div class="add-block">
            +
        </div>
    </aside>
</template>
