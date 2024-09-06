<template>
  <FormularioTarefa @aoSalvarTarefa="salvarTarefa" />
  <div class="lista">
    <BoxTarefa v-if="listaEstaVazia">
      Você não está muito produtivo hoje... =(
    </BoxTarefa>
    <div class="field">
      <p class="control has-icons-left">
        <input class="input" type="text" placeholder="Digite para filtrar" v-model="filtro"/>
        <span class="icon is-small is-left">
          <i class="fas fa-search"></i>
        </span>      
      </p>
    </div>
    <TarefaComponente v-for="(tarefa, index) in tarefas" :tarefa="tarefa" :key="index"
      @aoTarefaClicada="selecionarTarefa" />   
    <ModalTarefa :mostrar="tarefaSelecionada != null">
      <template #cabecalho>
        <p class="modal-card-title">Editando uma tarefa</p>
        <button class="delete" aria-label="close"></button>
      </template>
      <template #corpo>
        <div class="field">
          <label for="descricaoDaTarefa" class="label">Descrição</label>
          <input type="text" class="input" v-model="tarefaSelecionada.descricao" id="descricaoDaTar" />
        </div>
      </template>
      <template #rodape>
        <div class="buttons">
          <button @click="alterarTarefa" class="button is-success">Salvar alterações</button>
          <button @click="fecharModal" class="button">Cancelar</button>
        </div>
      </template>
    </ModalTarefa>  
  </div>  
</template>

<script lang="ts">
import { computed, defineComponent, ref, watchEffect } from 'vue';
import FormularioTarefa from '../components/FormularioTarefa.vue';
import TarefaComponente from '../components/TarefaComponente.vue';
import BoxTarefa from '../components/BoxTarefa.vue';
import { useStore } from '@/store';
import { ALTERAR_TAREFA, CADASTRAR_TAREFA, OBTER_PROJETOS, OBTER_TAREFAS } from '@/store/tipo-acoes';
import ITarefa from '@/interface/ITarefa';
import ModalTarefa from '@/components/ModalTarefa.vue';

export default defineComponent({
  name: 'App',
  components: {
    FormularioTarefa,
    TarefaComponente,
    BoxTarefa,
    ModalTarefa
  },
  data() {
    return {
      tarefaSelecionada: null as ITarefa | null
    }
  },
  methods: {
    salvarTarefa(tarefa: ITarefa): void {
      this.store.dispatch(CADASTRAR_TAREFA, tarefa)
    },
    selecionarTarefa(tarefa: ITarefa) {
      this.tarefaSelecionada = tarefa
    },
    fecharModal() {
      this.tarefaSelecionada = null
    },
    alterarTarefa() {
      this.store.dispatch(ALTERAR_TAREFA, this.tarefaSelecionada)
        .then(() => this.fecharModal())
    }
  },
  computed: {
    listaEstaVazia(): boolean {
      return this.tarefas.length === 0;
    }
  },
  setup() {
    const store = useStore()
    store.dispatch(OBTER_TAREFAS)
    store.dispatch(OBTER_PROJETOS)
    const filtro = ref('')

    watchEffect(() => {
      store.dispatch(OBTER_TAREFAS, filtro.value)
    })

    return {
      tarefas: computed(() => store.state.tarefa.tarefas),
      store,
      filtro
    }
  }
});
</script>