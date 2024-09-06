<template>
    <BoxTarefa>
        <div class="columns clicavel" @click="tarefaClicada">
            <div class="column is-4 text" style="color:black;">
                {{tarefa.descricao || 'Tarefa sem descrição'}}
            </div>
            <div class="column is-3" style="color:black;"> 
                {{ tarefa.projeto?.nome || 'N/D' }}
            </div>
            <div class="column" style="color:black">
                <CronometroTarefa :tempoEmSegundos="tarefa.duracaoEmSegundos" />
            </div>
        </div>

    </BoxTarefa>
</template>

<script lang="ts">
import { defineComponent , PropType} from 'vue';
import CronometroTarefa from './CronometroTarefa.vue';
import ITarefa from '@/interface/ITarefa';
import BoxTarefa from './BoxTarefa.vue';

export default defineComponent({
    name:'TarefaComponente',
    emits:['aoTarefaClicada'],
    components: {
        CronometroTarefa,
        BoxTarefa
    },
    props:{
        tarefa:{
            type: Object as PropType<ITarefa>,
            required: true
        }
    },
    methods: {
        tarefaClicada(): void {
            this.$emit('aoTarefaClicada', this.tarefa)
        }
    }
})
</script>

<style>
.text{
    color: var(--texto-primario);
}
.clicavel{
    cursor: pointer;
}
</style>