<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-5" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input type="text" class="input" placeholder="Qual tarefa deseja iniciar?" v-model="descricao">
            </div>
            <div class="column is-3">
                <div class="select">
                    <select v-model="idProjeto">
                        <option value="">Selecione o projeto</option>
                        <option
                        :value="projeto.id"
                        v-for="projeto in projetos"
                        :key="projeto.id"
                        >
                        {{ projeto.nome }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="column"> 
               <TemporizadorTarefa @aoTemporizadorTarefaFinalizado="salvarTarefa"/>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import TemporizadorTarefa from './TemporizadorTarefa.vue';
import { useStore } from 'vuex';
import { key } from '@/store';

export default defineComponent({
    name: 'FormularioTarefa',
    emits: ['aoSalvarTarefa'],
    components: {
        TemporizadorTarefa
    },
    setup(props, {emit}) {
        const store = useStore(key)
        const descricao = ref("")
        const idProjeto = ref("")
        const projetos = computed(() => store.state.projeto.projetos)


        const salvarTarefa = (tempoDecorrido: number): void => {
            emit('aoSalvarTarefa',{
                duracaoEmSegundos: tempoDecorrido,
                descricao : descricao.value,
                projeto: projetos.value.find(proj => proj.id == idProjeto.value)
            })
            descricao.value = ''
        }


        return {
            descricao,
            idProjeto,
            projetos,
            salvarTarefa
        }
    }
})
</script>

<style>
.formulario{
    color: var(--texto-primario);
    background-color: var(--bg-primario);
}
.input{
    background-color: var(--bg-primario);
    color: var(--texto-primario);
}
.input::placeholder {
  color: var(--texto-primario);
  opacity: 0.6; 
}

</style>




