<template>
  <v-container>
    <v-card class="mx-auto px-6 py-8 text-center" width="850">
      <v-card-title>
        Busca CEP
        <v-tooltip text="Busque apenas por CEP de São Paulo">
          <template v-slot:activator="{ props }">
            <v-icon v-bind="props" rigth size="small"
              >mdi-information-variant</v-icon
            >
          </template>
        </v-tooltip>
      </v-card-title>
      <v-card-text class="py-5 px-2">
        <v-row dense>
          <v-col cols="12">
            <v-select
              label="Selecione o formato"
              density="compact"
              color="primary"
              variant="underlined"
              :items="controller.formato.value"
              @update:model-value="controller.mostraRetorno.value = false"
              v-model="controller.formatoSelecionado.value"
            ></v-select>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="12">
            <v-text-field
              label="Informe o CEP"
              density="compact"
              color="primary"
              variant="underlined"
              hint="Digite apenas numeros"
              counter="8"
              clearable
              v-model="controller.cepDigitado.value"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn
          class="text-none text-subtitle-1"
          color="indigo-darken-3"
          size="x-large"
          variant="flat"
          prepend-icon="mdi-magnify"
          block
          :loading="controller.carregando.value"
          :disabled="controller.carregando.value"
          @click="controller.buscaDadosCep()"
          >Buscar</v-btn
        >
      </v-card-actions>

      <v-card
        class="elevation-0"
        v-if="controller.mostraRetorno.value && !controller.mostraErro.value"
      >
        <v-card-text>
          <pre
            v-if="controller.formatoSelecionado.value === 'json'"
            class="language-json pa-5 rounded"
            style="background-color: #212121; font-size: 10px; color: #ffffff"
            >{{ controller.jsonFormatado.value }}</pre
          >
          <pre
            v-else
            class="language-xml pa-5 rounded"
            style="background-color: #212121; font-size: 10px; color: #ffffff"
            >{{ controller.xmlFormatado.value }}</pre
          >
        </v-card-text>
      </v-card>
    </v-card>
  </v-container>
</template>

<script setup>
defineProps({
  controller: {
    type: Object,
    required: true,
  },
});
</script>

<style>
</style>