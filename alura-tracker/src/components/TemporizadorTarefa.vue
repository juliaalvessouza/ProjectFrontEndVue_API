<template>
    <section class="is-flex is-align-items-center is-justify-content-space-between">
      <CronometroTarefa :tempoEmSegundos="tempoEmSegundos"/>
      <BotaoTarefa @clicado="iniciar" icone="fas fa-play" texto="play" :desabilitado="cronometroRodando" />
      <BotaoTarefa @clicado="finalizar" icone="fas fa-stop" texto="stop" :desabilitado="!cronometroRodando" />
    </section>
  </template>

<script lang="ts">
import { defineComponent } from 'vue';
import CronometroTarefa from './CronometroTarefa.vue';
import BotaoTarefa from './BotaoTarefa.vue';

export default defineComponent({
    name: 'TemporizadorTarefa',
    emits: ['aoTemporizadorTarefaFinalizado'],
    components: {
        CronometroTarefa,
        BotaoTarefa
    },
    data() {
        return {
            tempoEmSegundos: 0,
            intervaloId: null as number | null,
            cronometroRodando: false
        };
    },
    methods: {
        iniciar() {
            if (this.cronometroRodando) return;  

            this.cronometroRodando = true;
            this.intervaloId = setInterval(() => {
                this.tempoEmSegundos += 1;
            }, 1000) as unknown as number;

            console.log('Cronômetro iniciado');
        },
        finalizar() {
            if (!this.cronometroRodando) return;  

            this.cronometroRodando = false; 
            if (this.intervaloId !== null) {
                clearInterval(this.intervaloId);
                this.intervaloId = null;
                this.$emit('aoTemporizadorTarefaFinalizado', this.tempoEmSegundos)
                this.tempoEmSegundos = 0
            }
            

            console.log('Cronômetro finalizado');
        }
    }
})
</script>
