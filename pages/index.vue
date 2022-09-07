<script setup lang="ts">
import { useCounter } from "~/stores/counter";
import TextInput from "@/components/forms/TextInput.vue";

definePageMeta({
    layout: "login",
});
// example dummy store
const counter = useCounter();
const router = useRouter();

const submit = async () => {
    // return navigateTo('/dashboard')
    router.push({ path: "/dashboard" });
};
</script>

<template>
    <div class="rounded-lg border bg-white w-[28.5rem] mx-auto mt-48 p-16">
        <h1 class="h2 text-center mb-6">Inloggen</h1>
        <TextInput type="text" placeholder="E-mail" data-attr='haha' />
        <TextInput type="password" placeholder="Wachtwoord" />
        <button class="border-0 bg-orange-400 text-white px-4 py-3 w-full rounded hover:bg-orange-500"
            @click="submit">Inloggen</button>
    </div>
</template>