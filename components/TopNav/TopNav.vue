<script setup lang="ts">

const props = defineProps<{
    user?: string
}>();

defineExpose({
    user: props.user
});
const route = useRoute();
console.log('current name', route.name);

const activeClass = (name: string) => {
    return route.name === name ? 'active' : '';
};

</script>

<template>
    <nav class="top-nav">
        <div class="content-container flex-1">
            Teamdriver nav bar thing
            <BaseButton color="transparent" :class="activeClass('dashboard')">
                <font-awesome-icon :icon="['fas', 'bars']" />
                Dashboard
            </BaseButton>
            <BaseButton color="transparent">
                <font-awesome-icon :icon="['fas', 'bars']" />
                Momentopnames
            </BaseButton>
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
