<script setup lang="ts">

const props = defineProps<{
    user?: string
}>();

defineExpose({
    user: props.user
});
const route = useRoute();

const isActive = (name: string) => {
    return route.name === name;
};

</script>

<template>
    <nav class="top-nav">
        <div class="content-container flex-1">
            Teamdriver nav bar thing
            <NuxtLink to="dashboard" :aria-current="isActive('dashboard') ? 'page' : ''">
                <BaseButton color="transparent" :class="isActive('dashboard') ? 'active' : ''">
                    <font-awesome-icon :icon="['fas', 'bars']" />
                    Dashboard
                </BaseButton>
            </NuxtLink>
            <NuxtLink to="momentopnames" :aria-current="isActive('momentopnames') ? 'page' : ''">
                <BaseButton color="transparent" :class="isActive('momentopnames')? 'active': ''">
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
