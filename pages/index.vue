<script setup lang="ts">
import { useCounter } from '~/stores/counter';

definePageMeta({
    layout: 'login'
});

// example dummy store
const counter = useCounter();
const router = useRouter();

const submit = () => {
    // return navigateTo('/dashboard')
    router.push({ path: '/dashboard' });
};
</script>

<template>
    <div class="rounded-lg border bg-white w-[28.5rem] mx-auto mt-48 p-16 max-w-full">
        <h1 class="h2 text-center mb-6">
            Inloggen
        </h1>
        <FormTextInput type="text" placeholder="E-mail" data-attr="haha" />
        <FormTextInput type="password" placeholder="Wachtwoord" />
        <BaseButton color="orange" full @click="submit">
            Inloggen
        </BaseButton>
    </div>
</template>
