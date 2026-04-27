<template>
  <tela :controller="controller" />
</template>

<script setup>
import { buscaCepControllerImpl } from "../di/di";
import Tela from "../components/tela.vue";
const controller = buscaCepControllerImpl();
</script>

<style>
</style>