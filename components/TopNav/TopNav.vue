<script setup lang="ts">

const props = defineProps<{
    user?: string
}>();

defineExpose({
    user: props.user
});
const route = useRoute();

const activeClass = (name: string) => {
    return route.name === name ? 'active' : '';
};

</script>

<template>
    <nav class="top-nav">
        <div class="content-container flex-1">
            Teamdriver nav bar thing
            <NuxtLink to="dashboard">
                <BaseButton color="transparent" :class="activeClass('dashboard')">
                    <font-awesome-icon :icon="['fas', 'bars']" />
                    Dashboard
                </BaseButton>
            </NuxtLink>
            <NuxtLink to="momentopnames">
                <BaseButton color="transparent" :class="activeClass('momentopnames')">
                    <font-awesome-icon :icon="['fas', 'bars']" />
                    Momentopnames
                </BaseButton>
            </NuxtLink>
            <BaseButton color="transparent">
                <font-awesome-icon :icon="['fas', 'bars']" />
                Actieplan
            </BaseButton>
            <BaseButton color="transparent">
                <font-awesome-icon :icon="['fas', 'bars']" />
                Kenniscentrum
            </BaseButton>
        </div>
    </nav>
</template>
