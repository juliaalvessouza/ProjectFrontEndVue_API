<template>
    <div class="notificacoes">
        <article class="message"
            :class="contexto[notificacao.tipo]"
            v-for="notificacao in notifacoes"
            :key="notificacao.id"
            >
                <div class="message-header" style="color:var(--texto-primario);">
                    {{notificacao.titulo}}
                </div>
                <div class="message body" style="color:var(--texto-primario);">
                    {{notificacao.texto}}
                </div>
        </article>      
    </div>
</template>

<script lang="ts">
import { TipoNotificacao } from '@/interface/INotificacao';
import { useStore } from '@/store';
import { computed, defineComponent } from 'vue';

export default defineComponent({
    name:'NotificacoesProjeto',
    data (){
        return {
            contexto: {
                [TipoNotificacao.SUCESSO]: 'is-success',
                [TipoNotificacao.ATENCAO]: 'is-warning',
                [TipoNotificacao.FALHA]: 'is-danger'
            }
        }
    },
    setup() {
        const store = useStore()
        return {
            notifacoes: computed(() => store.state.notificacoes)
        }

    }
})
</script>

<style scoped>
.notificacoes {
    position: absolute;
    right: 0;
    width: 300px;
    padding: 8px;
    z-index: 105;
}
</style>