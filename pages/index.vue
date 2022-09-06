<script setup lang="ts">
import { useCounter } from "~/stores/counter";
import TextInput from "@/components/forms/TextInput.vue";

definePageMeta({
    layout: "login",
});
const counter = useCounter();
</script>

<template>
    <div class="rounded-lg border bg-white w-[28.5rem] mx-auto mt-48 p-16">
        <h1 class="">Inloggen</h1>
        <TextInput type="text" placeholder="E-mail" data-attr='haha' />
        <TextInput type="password" placeholder="Wachtwoord" />
    </div>
</template>