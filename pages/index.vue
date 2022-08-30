<template>
    hi
</template>
<script setup lang="ts">
import { useCounter } from "~/stores/counter";

definePageMeta({
    layout: "login",
});
const counter = useCounter();
</script>