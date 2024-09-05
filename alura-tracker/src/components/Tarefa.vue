<template>
    <Box>
        <div class="columns">
            <div class="column is-7">
                {{tarefa.descricao || 'Tarefa sem descrição'}}
            </div>
            <div class="column">
                <CronometroTarefa :tempoEmSegundos="tarefa.duracaoEmSegundos" />
            </div>
        </div>

    </Box>
</template>

<script lang="ts">
import { defineComponent , PropType} from 'vue';
import CronometroTarefa from './CronometroTarefa.vue';
import ITarefa from '@/interface/ITarefa';
import Box from './Box.vue';

export default defineComponent({
    name:'Tarefa',
    components: {
        CronometroTarefa,
        Box
    },
    props:{
        tarefa:{
            type: Object as PropType<ITarefa>,
            required: true
        }
    } 
})
</script>

