<script setup lang="ts">
import { useCounter } from "~/stores/counter";

definePageMeta({
    layout: "login",
});
const counter = useCounter();
</script>

<template>
    <div class="rounded-lg border bg-white w-[28.5rem] mx-auto mt-48 p-16">
        <h1 class="">Inloggen</h1>
        <input type="text" placeholder="Email">
        <input type="text" placeholder="Wachtwoord">
    </div>
</template>