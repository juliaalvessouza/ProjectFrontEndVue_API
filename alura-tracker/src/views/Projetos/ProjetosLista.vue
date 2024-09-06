<template>
    <section>                
        <RouterLink to="/listaProjetos/novo" class="button">
            <span class="icon is-small">
                <i class="fas fa-plus"></i>
            </span>
            <span>Novo Projeto</span>
        </RouterLink>    
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody v-for="projeto in projetos" :key="projeto.id">
                <tr>
                    <td>{{projeto.id}}</td>
                    <td>{{projeto.nome}}</td>
                    <td>
                        <RouterLink :to="`/listaProjetos/${projeto.id}`" class="button">
                            <span class="icon is-small">
                                <i class="fas fa-pencil-alt"></i>
                            </span>
                        </RouterLink>  
                        <button class="button ml-2 is-danger" @click="excluir(projeto.id)">
                            <span class="icon is-small">
                                <i class="fas fa-trash"></i>
                            </span>
                        </button> 
                    </td>
                </tr>
            </tbody>

        </table>
    </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from '@/store';
import { OBTER_PROJETOS, REMOVER_PROJETO } from '@/store/tipo-acoes';

export default defineComponent({
    name: 'ProjetosLista',   
    methods:{
        excluir(id: string){
            this.store.dispatch(REMOVER_PROJETO, id)
        }
    },
    setup () {
        const store = useStore()
        store.dispatch(OBTER_PROJETOS)

        return {
            projetos: computed(() => store.state.projetos),
            store
        }
    }
})
</script>

