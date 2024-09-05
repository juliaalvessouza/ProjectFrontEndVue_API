<template>
       <FormularioTarefa @aoSalvarTarefa="salvarTarefa" />
        <div class="lista">
          <TarefaComponente v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
          <BoxTarefa v-if="listaEstaVazia"> 
              Você não está muito produtivo hoje... =(       
          </BoxTarefa>
        </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import FormularioTarefa from '../components/FormularioTarefa.vue';
  import ITarefa from '../interface/ITarefa';
  import TarefaComponente from '../components/TarefaComponente.vue';
  import BoxTarefa from '../components/BoxTarefa.vue';
  
  export default defineComponent({
    name: 'App',
    components: {
      FormularioTarefa,
      TarefaComponente,
      BoxTarefa
    },
    data() {
      return {
        tarefas: [] as ITarefa[]
      }
    },
    computed: {
      listaEstaVazia(): boolean {
        return this.tarefas.length === 0; 
      }
    },
    methods: {
      salvarTarefa(tarefa: ITarefa) {
        this.tarefas.push(tarefa)
      }
    }
  });
  </script>
  